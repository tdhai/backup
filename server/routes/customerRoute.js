'use strict'

// const mongoose = require('mongoose')
// const controller = require('../controllers/cutomerController')


exports.plugin = {
  register: (server, option) => {
    server.route(
      {
        method: 'GET',
        path: '/',
        handler: function(req, res){ return 'heroku1'}
       });
  },
  name: 'customer'
}

