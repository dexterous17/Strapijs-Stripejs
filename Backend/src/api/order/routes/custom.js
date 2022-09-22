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
      path: '/cancleorder',
      handler: 'order.cancleorder',
    },
    {
      method: 'POST',
      path: '/paymentIntentsccess',
      handler: 'order.paymentIntentsccess',
    },
    {
      method: 'POST',
      path: '/getorderinformationbasedoonpuymentintent',
      handler: 'order.getorderinformationbasedoonpuymentintent',
    }, {
      method: 'POST',
      path: '/getmutipleorder',
      handler: 'order.getmutipleorder',
    }
  ],
};