'use strict'

const mongoose = require('mongoose')
const controller = require('../../controllers/Product/ProductController')


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
      method: 'GET',
      path: '/categories',
      handler: controller.getAllCategory
    })

    server.route({
      method: 'GET',
      path: '/category/{id}',
      handler: controller.getCategory
    })

    // server.route({
    //   method: 'POST',
    //   path: '/createpizza',
    //   handler: controller.createPizza
    // })

    // server.route({
    //   method: 'POST',
    //   path: '/createcategory',
    //   handler: controller.createCategoy
    // })

  },



  name: 'product'
}

