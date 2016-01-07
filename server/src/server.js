import Hapi from 'hapi'
import Boom from 'boom'
import api from './api'

const server = new Hapi.Server()

const HapiAuthCookiePassword = 'very_securly_secret_passsword_do_not_let_anyone_know'
const HapiAuthCookie = 'sid-example'

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
      // hapi-auth-cookie
      //
      const cache = server.cache({ segment: 'sessions', expiresIn: 3 * 24 * 60 * 60 * 1000 });
      server.app.cache = cache;

      server.auth.strategy('session', 'cookie', true, {
        password: HapiAuthCookiePassword,
        cookie: HapiAuthCookie,
        // redirectTo: '/login',
        isSecure: false,
        validateFunc: function (request, session, callback) {

          cache.get(session.sid, (err, cached) => {

            if (err) {
              return callback(err, false);
            }

            if (!cached) {
              return callback(null, false);
            }

            return callback(null, true, cached.account);
          });
        }
      });

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
