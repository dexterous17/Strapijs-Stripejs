'use strict';
const stripe = require("stripe")("sk_test_51Hps8SLAex9slWfOMnvvTl2SMBc1yAFXV0Utd6osXmuSJ7PH8PeykDeoMhJQC18LKJNTbvCw51wBX2DYqV8XpwcO004uzzI3cv");
const endpointSecret = "whsec_da974669a0da7b9495ad4773b1235904b25bb60c2c1b32acc6db03a83932348f";

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::order.order', (({ strapi }) => ({
  createorder: async (ctx) => {

    /** try {
       const session = await stripe.checkout.sessions.create({
         payment_method_types: ["card"],
         mode: "payment",
 
         line_items: ctx.body.items.map(item => {
           const storeItem = strapi.db.query('api::product.product').findOne({where:{id:item}})
           return {
             price_data: {
               currency: "usd",
               product_data: {
                 name: storeItem.name,
               },
               unit_amount: storeItem.priceInCents,
             },
             quantity: item.quantity,
           }
         }),
         success_url: `${process.env.CLIENT_URL}/success.html`,
         cancel_url: `${process.env.CLIENT_URL}/Cart`,
       })
       ctx.body({ url: session.url })
     } catch (e) {
       ctx.status(500).json({ error: e.message })
     }*/
    const Product_id = ctx.request.body
    console.log(Product_id)
    console.log(ctx.state.user.id)
    console.log(ctx.state.user.username)

    const storeItem = await strapi.db.query('api::product.product').findOne({ where: { id: 1 } })
    const entry = await strapi.db.query('api::order.order').create({
      data: {
        hello: 'Hello',
        user: ctx.state.user.id
      },
    })
    console.log(storeItem)


    ctx.body = 'okay'
  },
})));
