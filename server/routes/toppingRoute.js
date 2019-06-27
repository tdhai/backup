'use strict'

const controller = require('../controllers/toppingController')


exports.plugin = {
  register: (server, option) => {
    server.route({
      method: 'GET',
      path: '/toppings',
      options: {
        handler: controller.getAllTopping,
        tags: ['api'], // ADD THIS TAG
        description: 'Get all topping'
      }
    }),

    server.route({
      method: 'POST',
      path: '/toppings',
      handler: controller.createTopping
    })
  },
  name: 'topping'
}

