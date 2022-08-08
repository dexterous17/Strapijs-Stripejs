'use strict';
const stripe = require("stripe")("sk_test_51Hps8SLAex9slWfOMnvvTl2SMBc1yAFXV0Utd6osXmuSJ7PH8PeykDeoMhJQC18LKJNTbvCw51wBX2DYqV8XpwcO004uzzI3cv");
const endpointSecret = "whsec_da974669a0da7b9495ad4773b1235904b25bb60c2c1b32acc6db03a83932348f";

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


const calculateOrderAmount = async (items) => {
  var sum = 0;
  try {
    for (const id of items) {
      const storeItem = await strapi.db.query('api::product.product').findOne({
        select: ['Product_price'],
        where: { id: id }
      })
      const item = await storeItem
      sum = item.Product_price + sum
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
    try {

      const paymentIntent = await stripe.paymentIntents.create({
        amount: await calculateOrderAmount(Product_id),
        currency: "eur",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      const entry = await strapi.db.query('api::order.order').create({
        data: {
          payment_intent: paymentIntent.id,
          payment_status: paymentIntent.status,
          user: ctx.state.user.id,
          products: Product_id
        },
      })

      return (ctx.body = {
        data:paymentIntent 
      })


    } catch (e) {
      console.log(e.message)
    }
  }, cancleorder: async (ctx) => {

  }, paymentIntentsccess: async (ctx) => {
      console.log(ctx.request.body.data.object.id)
      ctx.body='okay'
  }
})));
