'use strict';
const stripe = require("stripe")("sk_test_51Hps8SLAex9slWfOMnvvTl2SMBc1yAFXV0Utd6osXmuSJ7PH8PeykDeoMhJQC18LKJNTbvCw51wBX2DYqV8XpwcO004uzzI3cv");
const endpointSecret = "whsec_da974669a0da7b9495ad4773b1235904b25bb60c2c1b32acc6db03a83932348f";

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const calculateOrderAmount = () => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

module.exports = createCoreController('api::order.order', (({ strapi }) => ({
  payment: async (ctx) => {
    console.log(ctx.request.body)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    ctx.body = JSON.stringify(paymentIntent);
  },
  confirmpayment: async (ctx) => {
    console.log(ctx.request.body)
    console.log(ctx.header)
    /**const sig = ctx.request.headers['stripe-signature'];

    let event;
  
    try {
      event = stripe.webhooks.constructEvent(ctx.request.body, sig, endpointSecret);
    } catch (err) {
      ctx.throw(400,`Webhook Error ${err.message}`)
      return;
    }
  
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log(paymentIntent)
        // Then define and call a function to handle the event payment_intent.succeeded
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  
    // Return a 200 response to acknowledge receipt of the event
    ctx.response.send();*/
  }
})));
 