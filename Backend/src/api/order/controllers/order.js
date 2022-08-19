'use strict';
const stripe = require("stripe")("sk_test_51Hps8SLAex9slWfOMnvvTl2SMBc1yAFXV0Utd6osXmuSJ7PH8PeykDeoMhJQC18LKJNTbvCw51wBX2DYqV8XpwcO004uzzI3cv");

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


const calculateOrderAmount = async (items) => {
  var sum = 0;
  try {
    for (const single of items) {
      const storeItem = await strapi.db.query('api::product.product').findOne({
        select: ['Product_price'],
        where: { id: single.itemid }
      })
      const item = await storeItem
      sum = (item.Product_price * single.quantity) + sum
    }
    return sum
  } catch (e) {
    console.log(e.message)
    return sum
  }
};




module.exports = createCoreController('api::order.order', (({ strapi }) => ({
  createorder: async (ctx) => {
    const Product_id = ctx.request.body
    console.log(Product_id)
    try {

      const paymentIntent = await stripe.paymentIntents.create({
        amount: await calculateOrderAmount(Product_id),
        currency: "eur",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      var items = []
      for (const single of Product_id) {
        const data = await strapi.db.query('api::ordersfromuser.ordersfromuser').create({
          data: {
            quantity: single.quantity,
            product: single.itemid,
            user: ctx.state.user.id
          },
        })

        items.push(data.id)
      }

      await strapi.db.query('api::order.order').create({
        data: {
          payment_intent: paymentIntent.id,
          payment_status: paymentIntent.status,
          payment_amount: paymentIntent.amount,
          user: ctx.state.user.id,
          ordersfromusers: [...items]
        },
      })

      return (ctx.body = {
        data: paymentIntent
      })


    } catch (e) {
      console.log(e.message)
    }
  }, cancleorder: async (ctx) => {

  }, paymentIntentsccess: async (ctx) => {

    console.log(ctx.request.body.data.object.id)

    ctx.body = 'okay'

    await strapi.db.query('api::order.order').update({
      where: { payment_intent: ctx.request.body.data.object.id },
      data: { payment_status: ctx.request.body.type }
    })

  }, getorderinformationbasedoonpuymentintent: async (ctx) => {



  }

})));
