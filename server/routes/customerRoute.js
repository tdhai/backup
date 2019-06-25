'use strict'

const mongoose = require('mongoose')
const controller = require('../controllers/cutomerController')


exports.plugin = {
  register: (server, option) => {
    server.route(
      {
        method: 'GET',
        path: '/',
        handler: function(req, res){ return 'heroku'}
      },{ 
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

