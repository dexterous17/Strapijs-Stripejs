"use strict";
module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/createorder',
      handler: 'order.createorder',
    }
  ],
};