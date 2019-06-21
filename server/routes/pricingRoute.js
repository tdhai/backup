'use strict'

const controller = require('../controllers/pricingController')


exports.plugin = {
  register: (server, option) => {
    server.route({
      method: 'POST',
      path: '/createPricing',
      handler: controller.createPricing
    })

    server.route({
      method: 'GET',
      path: '/pricinges',
      handler: controller.getPricinges
    })

    server.route({
      method: 'POST',
      path: '/pricing',
      handler: controller.getPricing
    })
  },
  name: 'pricing'
}

