'use strict'

const controller = require('../controllers/orderController')
const Joi = require('@hapi/joi');

exports.plugin = {
  register: (server, option) => {
    server.route({
      method: 'POST',
      path: '/order',
      options: {
        auth: 'jwt',
        handler: controller.createOrder,
        tags: ['api'], // ADD THIS TAG
        description: 'Create order by authorization',
      }
    })

    server.route({
      method: 'GET',
      path: '/order',
      options: {
        auth: 'jwt',
        handler: controller.getOrder,
        tags: ['api'], // ADD THIS TAG
        description: 'Get order by authorization',
      },

    })


  },
  name: 'order'
}

