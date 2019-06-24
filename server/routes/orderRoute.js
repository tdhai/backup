'use strict'

const controller = require('../controllers/orderController')


exports.plugin = {
  register: (server, option) => {
    server.route({
      method: 'POST',
      path: '/createOrder',
      handler: controller.createOrder
    })

    server.route({
      method: 'GET',
      path: '/orders',
      handler: controller.getOrder
    })

    
  },
  name: 'order'
}

