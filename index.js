'use strict'

require('babel-register')

var PORT = process.env.PORT || 9990

var server = require('./server/src/server.js')(PORT)

// main server
server.start(function(err) {
  if (err) {
    throw err
  }
  console.log('Hapi Server is running at:', server.info.uri)
})

// webpack dev server
if (process.env.NODE_ENV != 'production') {
  var webpackDevServer = require('./webpackDevServer')
  webpackDevServer.listen(PORT)
}
