'use strict'

const controller = require('../controllers/toppingController')


exports.plugin = {
  register: (server, option) => {
    server.route({
      method: 'GET',
      path: '/toppings',
      handler: controller.getAllTopping
    }),

      server.route({
        method: 'GET',
        path: '/topping/{id}',
        handler: controller.getTopping
      })

    server.route({
      method: 'POST',
      path: '/createTopping',
      handler: controller.createTopping
    })
  },
  name: 'topping'
}

