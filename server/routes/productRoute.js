'use strict'

const controller = require('../controllers/productController')
const JoiHapi = require('@hapi/joi');

exports.plugin = {
  register: (server, option) => {
    server.route({
      method: 'GET',
      path: '/products',
      options: {
        handler: controller.getAllProducts,
        tags: ['api'], // ADD THIS TAG
        description: 'Get all products'
      }
    }),

      server.route({
        method: 'GET',
        path: '/products/{id}',
        options: {
          handler: controller.getProduct,
          tags: ['api'], // ADD THIS TAG
          validate: {
            params: {
              id: JoiHapi.string().min(3).max(50)
            }
          }
        }
      })

    server.route({
      method: 'POST',
      path: '/products',
      options:{
      handler: controller.createProduct,
      tags: ['api'], // ADD THIS TAG
      validate:{
        payload:{
          name: JoiHapi.string(),
          detail: JoiHapi.string(),
          star: JoiHapi.number(),
          picture: JoiHapi.string(),
          size: JoiHapi.string().max(2),
          type: JoiHapi.string().min(3).max(6),
          price: JoiHapi.number()
        }
      }
      }
    })
  },
  name: 'product'
}

