'use strict'

const controller = require('../controllers/categoryController')
const Joi = require('@hapi/joi');


exports.plugin = {
  register: (server, option) => {
    server.route({
      method: 'GET',
      path: '/categories',
      options: {
        handler: controller.getAllCategory,
        tags: ['api'], // ADD THIS TAG
        description: 'Get all category have products'
      }
    }),

      server.route({
        method: 'GET',
        path: '/',
        handler: () => { return "Wellcom to Pizza Order Hai Truong" }
      }),

      server.route({
        method: 'GET',
        path: '/categories/{id}',
        options: {
          handler: controller.getCategory,
          tags: ['api'], // ADD THIS TAG
          description: 'Get category by id have products',
          validate: {
            params: {
              id: Joi.string().min(3).max(50)
            }
          }
        }
      })

    server.route({
      method: 'POST',
      path: '/categories',
      handler: controller.createCategory
    })
  },
  name: 'category'
}

