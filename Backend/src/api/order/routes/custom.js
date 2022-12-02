"use strict";
module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/createorder',
      handler: 'order.createorder',
    },
    {
      method: 'POST',
      path: '/paymentIntentsccess',
      handler: 'order.paymentIntentsccess',
    }, {
      method: 'POST',
      path: '/getmutipleorder',
      handler: 'order.getmutipleorder',
    }
  ],
};