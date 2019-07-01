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
          name: JoiHapi.string().required(),
          detail: JoiHapi.string().required(),
          star: JoiHapi.number().required(),
          picture: JoiHapi.string().required(),
          size: JoiHapi.string().max(2).required(),
          type: JoiHapi.string().min(3).max(6).required(),
          price: JoiHapi.number().required()
        }
      }
      }
    })
  },
  name: 'product'
}

