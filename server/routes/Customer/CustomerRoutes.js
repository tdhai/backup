'use strict'

const mongoose = require('mongoose')
const controller = require('../../controllers/Customer/CutomerController')


exports.plugin={
  register: (server, option) =>{
    server.route({
      method: 'POST',
      path: '/register',
      handler: controller.createAccount
    }),

    server.route({
      method: 'GET',
      path: '/getAllCustomers',
      handler: controller.getAllCustomers
    })

    server.route({
      method: 'GET',
      path: '/login',
      handler: controller.getCustomer
    })

    // server.route({
    //   method: 'PUT',
    //   path: '/task/{id}',
    //   handler: controller.updateTask
    // })
  },
  name: 'customer'
}

