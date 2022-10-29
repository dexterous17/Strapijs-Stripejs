'use strict';

/**
 *  profile controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::profile.profile', (({ strapi }) => ({
    profileupdate: async (ctx) => {

        return (ctx.status = 200)
    },
    profilefetch: async (ctx) => {
        const response = await strapi.db.query('api::profile.profile').findOne({
            select: ['Name', 'MiddleName', 'LastName', 'Address'],
            where: { user: ctx.state.user.id }
        })
        return (ctx.body = response)
    },
})));
