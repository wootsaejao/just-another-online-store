import Hapi from 'hapi'
import Boom from 'boom'
import api from './api'

const server = new Hapi.Server()

module.exports = (port, callback) => {

  server.connection({
    host: '0.0.0.0',
    port: port,
    routes: { cors: true }
  })

  server.register(
    [
      require('inert'),
      require('h2o2'),
      require('hapi-auth-cookie')
    ],
    (err) => {

      if (err) {
        throw err
      }

      //
      // Handle static files
      //
      server.route({
        method: 'GET',
        path: '/static/{param*}',
        handler: (request, reply) => {

          const param = request.params.param

          // prevent accesing index.html file
          if (param === 'index.html') {
            reply(Boom.notFound())
          }

          if (process.env.NODE_ENV !== 'production') {

            // proxy to webpack dev server
            reply.proxy({
              host: 'localhost',
              port: port + 1,
              protocol: 'http'
            })
          }

          else {

            reply.file('./static/' + param)
          }
        }
      })

      //
      // Index
      //
      server.route({
        method: 'GET',
        path: '/{param*}',
        handler: function (request, reply) {
          reply(`
            <!DOCTYPE html>
            <html>
            <body>
              <div id="app"></div>
              <script src="static/bundle.js"></script>
            </body>
            </html>
          `)
        }
      })
    }
  )

  // all other routes
  server.route(api)

  server.start(function(err) {
    callback(err, server)
  })

}
