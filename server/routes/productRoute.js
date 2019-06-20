'use strict'

const controller = require('../controllers/productController')


exports.plugin = {
  register: (server, option) => {
    server.route({
      method: 'GET',
      path: '/products',
      handler: controller.getAllProducts
    }),

      server.route({
        method: 'GET',
        path: '/product/{id}',
        handler: controller.getProduct
      })

    server.route({
      method: 'POST',
      path: '/createpizza',
      handler: controller.createPizza
    })
  },
  name: 'product'
}

