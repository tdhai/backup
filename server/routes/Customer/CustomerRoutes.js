'use strict'

const mongoose = require('mongoose')
const controller = require('../../controllers/Customer/CutomerController')


exports.plugin = {
  register: (server, option) => {
    server.route({
      method: 'POST',
      path: '/register',
      handler: controller.createAccount
    }),

    server.route({
      method: 'POST',
      path: '/login',
      handler: controller.getCustomer
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

