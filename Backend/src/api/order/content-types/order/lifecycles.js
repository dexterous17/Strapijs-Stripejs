'use strict';

module.exports = {
  async beforeCreate(event) {
    console.log(event.data + "before")
  },
  async afterCreate(event) {
    console.log(event.data +'after')
  },
};
