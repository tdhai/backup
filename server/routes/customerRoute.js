'use strict'

const mongoose = require('mongoose')
const controller = require('../controllers/cutomerController')


exports.plugin = {
  register: (server, option) => {
    server.route({
      method: 'POST',
      path: '/register',
      options: {
        handler: controller.createAccount,
        tags: ['api'], // ADD THIS TAG
        description: 'Register account'
      }
    }),

      server.route({
        method: 'POST',
        path: '/login',
        options: {
          handler: controller.getCustomer,
          tags: ['api'], // ADD THIS TAG
          description: 'Login account'
        }
      })

    server.route({
      method: 'GET',
      path: '/customers',
      handler: controller.getAllCustomers
    })

    server.route({
      method: 'PUT',
      path: '/updateAccount',
      options: {
        auth: 'jwt'
      },
      handler: controller.updateAccount

    })
  },
  name: 'customer'
}

