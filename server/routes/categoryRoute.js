'use strict'

const controller = require('../controllers/categoryController')
const Joi = require('@hapi/joi');


exports.plugin = {
  register: (server, option) => {
    server.route([{
      method: 'GET',
        path: '/',
        handler: async (request, h) =>{
          return `OK Hello WOrld!`
        }
    },{
      method: 'GET',
      path: '/categories',
      options: {
        handler: controller.getAllCategory,
        tags: ['api'], // ADD THIS TAG
        description: 'Get all category have products'
      }
    }]),

      server.route({
        method: 'GET',
        path: '/category/{id}',
        options: {
          handler: controller.getCategory,
          tags: ['api'], // ADD THIS TAG
          description: 'Get category by id have products',
          validate: {
            params: {
              id: Joi.string().min(3).max(50)
                // .required()
                // .description('the id for the todo item'),
            }
          }
        }
      })

    server.route({
      method: 'POST',
      path: '/createCategory',
      handler: controller.createCategory
    })
  },
  name: 'category'
}

