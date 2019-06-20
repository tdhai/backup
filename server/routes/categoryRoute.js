'use strict'

const controller = require('../controllers/categoryController')


exports.plugin = {
  register: (server, option) => {
    server.route({
      method: 'GET',
      path: '/categories',
      handler: controller.getAllCategory
    }),

      server.route({
        method: 'GET',
        path: '/category/{id}',
        handler: controller.getCategory
      })

    server.route({
      method: 'POST',
      path: '/createcategory',
      handler: controller.createCategory
    })
  },
  name: 'category'
}

