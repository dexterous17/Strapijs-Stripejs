'use strict';

/**
 *  profile controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::profile.profile', (({ strapi }) => ({
    profileupdate: async (ctx) => {
        const response = await strapi.db.query('api::profile.profile').update({
            data: ctx.request.body,
            where: { user: ctx.state.user.id }
        })
        return (ctx.body = response)
    },
    profilefetch: async (ctx) => {

        const res = await strapi.db.query('api::profile.profile').findOne({
            where: { user: ctx.state.user.id }
        })

        if (res === null) {
            await strapi.db.query('api::profile.profile').create({
                data: {
                    Name: '',
                    MiddleName: '',
                    LastName: '',
                    Address: '',
                    user: ctx.state.user.id
                }
            })
        }

        const response = await strapi.db.query('api::profile.profile').findOne({
            select: ['Name', 'MiddleName', 'LastName', 'Address'],
            where: { user: ctx.state.user.id }
        })
        return (ctx.body = response)
    },
})));
