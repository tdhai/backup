'use strict'

const mongoose = require('mongoose')
const controller = require('../controllers/cutomerController')
const JoiHapi = require('@hapi/joi');

exports.plugin = {
  register: (server, option) => {
    server.route({
      method: 'POST',
      path: '/customers/register',
      options: {
        handler: controller.createAccount,
        tags: ['api'], // ADD THIS TAG
        description: 'Register account',
        validate: {
          payload: {
            email: JoiHapi.string(),
            password: JoiHapi.string().min(3),
            rePassword: JoiHapi.string().min(3),
            name: JoiHapi.string()
          }
        }
      }
    }),

      server.route({
        method: 'POST',
        path: '/customers/login',
        options: {
          handler: controller.login,
          tags: ['api'], // ADD THIS TAG
          description: 'Login account',
          validate: {
            payload: {
              email: JoiHapi.string(),
              password: JoiHapi.string().min(3)
            }
          }
        }
      })

    server.route({
      method: 'GET',
      path: '/customers',
      options: {
        handler: controller.getAllCustomers,
        tags: ['api'],
        description: "Get all customers ADMIN"
      }
    })

    server.route({
      method: 'GET',
      path: '/customers/{id}',
      options: {
        handler: controller.getCustomer,
        description: "Get customer by ID",
        tags: ['api'],
        validate: {
          params: {
            id: JoiHapi.string().min(3).max(50)
          }
        }
      }
    })


    server.route({
      method: 'PUT',
      path: '/customers/updateName',
      options: {
        auth: 'jwt',
        handler: controller.updateName,
        tags: ['api'],
        validate: {
          payload: {
            name: JoiHapi.string()
          },
          headers: JoiHapi.object().keys({
            authorization: JoiHapi.string().required()
          }).unknown()
        }
      }
    })

    server.route({
      method: 'PUT',
      path: '/customers/updatePassword',
      options: {
        auth: 'jwt',
        handler: controller.updatePassword,
        tags: ['api'],
        validate: {
          payload: {
            password: JoiHapi.string().min(8)
          },
          headers: JoiHapi.object().keys({
            authorization: JoiHapi.string().required()
          }).unknown()
        }
      }
    })

  },
  name: 'customer'
}

