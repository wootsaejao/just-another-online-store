'use strict'

require('babel-register')

var PORT = process.env.PORT || 9990

var startServer = require('./server/src/server.js')

startServer(PORT, function (err, serverInstant) {
  if (err) {
    throw err
  }
  console.log('Hapi Server is running at:', serverInstant.info.uri)
})
