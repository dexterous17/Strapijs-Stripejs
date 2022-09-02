'use strict';

/**
 *  ordersfromuser controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ordersfromuser.ordersfromuser', ({ strapi }) => ({
    findoneorder: async (ctx) => {
        const product = ctx.request.body;
        console.log(product)
        try {
            const data = await strapi.db.query('api::order.order')
                .findOne({
                    where: {
                        payment_intent: product.payment_intent,
                        payment_status: "payment_intent.succeeded",
                        user: ctx.state.user.id
                    }, populate: { ordersfromusers: { populate: { product: { populate: { Product_Image: { populate: { relation: true } } } } } } }
                })

            return (ctx.body = {
                data: data
            })

        } catch (err) {
            ctx.response.status = 400;
            ctx.response.body = err.message;
            ctx.throw(ctx.status, ctx.response.body);
        }
    }
}));
