'use strict';
module.exports = {
    routes: [{
        method: 'POST',
        path: '/profileupdate',
        handler: 'profile.profileupdate',
    }, {
        method: 'POST',
        path: '/profilefetch',
        handler: 'profile.profilefetch',
    },]
}