"use strict";
module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/findoneorder',
      handler: 'ordersfromuser.findoneorder',
    }
  ],
};