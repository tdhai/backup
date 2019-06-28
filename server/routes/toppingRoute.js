'use strict'

const controller = require('../controllers/toppingController')
const JoiHapi = require('@hapi/joi');

exports.plugin = {
  register: (server, option) => {
    server.route({
      method: 'GET',
      path: '/toppings',
      options: {
        handler: controller.getAllTopping,
        tags: ['api'], // ADD THIS TAG
        description: 'Get all topping'
      }
    }),

    server.route({
      method: 'POST',
      path: '/toppings',
      options:{
      handler: controller.createTopping,
      tags:['api'],
      validate:{
        payload:{
          name: JoiHapi.string(),
          picture: JoiHapi.string(),
          price: JoiHapi.number()
        }
      }
      }
    })
  },
  name: 'topping'
}

