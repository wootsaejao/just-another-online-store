import Hapi from 'hapi'
// import Routes from './routes'

const server = new Hapi.Server()

module.exports = (port) => {
  server.connection({
    host: '0.0.0.0',
    port: port,
    routes: { cors: true }
  })

  // serve static files
  server.register(
    require('inert'),
    (err) => {
      if (err) {
        throw err
      }

      server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
          directory: {
            path: 'public',
            index: ['index.html']
          }
        }
      })

      server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
          reply.file('./public/index.html')
        }
      })
    }
  )

  // all other routes
  // server.route(Routes)

  return server

}
