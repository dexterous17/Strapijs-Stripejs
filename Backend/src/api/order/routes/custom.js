"use strict";
module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/payment',
        handler: 'order.payment',
        config:{
            auth:false,
        } 
    },
    {
      method: 'POST',
      path: '/webhook',
      handler: 'order.confirmpayment',
      config:{
          auth:false,
      } 
  },
    ],
  };