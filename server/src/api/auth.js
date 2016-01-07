import _ from 'lodash'
import Boom from 'boom'

let userSessions = {}

const users = {
    'joe@example.com': {
        email: 'joe@example.com',
        password: 'password1',
        name: 'John Doe'
    }
};

function handleLogin(request, reply) {
  // WARNING: this should be only used via HTTPS

  let account = null
  console.log(request.auth)

  // alreay authenticated
  if (request.auth.isAuthenticated) {

    return reply({
      message: 'already authenticated'
    })
  }

  // missing payload
  if (!request.payload.email || !request.payload.password) {

    return reply(Boom.badRequest('Missing username or password'))
  }

  const email = request.payload.email
  const password = request.payload.password

  // get user data from database
  account = users[email];

  // if (email === 'joe@example.com' && password === 'password1') {
  if (!account || account.password !== password) {

    return reply(Boom.badRequest('Invalid username or password'))
  }

  const ssid = Math.random().toString(36).substring(7)

  // Store sessions
  userSessions[email] = ssid

  return reply({
    message: 'success',
    ssid: ssid
  })

  // }

  // else {
  //
  //   return reply(Boom.unauthorized('Invalid email or password'))
  // }
}

function handleCheckAuth(request, reply) {

  const ssid = request.payload.ssid
  const userSessionValues = _.values(userSessions)

  if (_.includes(userSessionValues, ssid)) {

    reply({
      message: 'authenticated'
    })
  }

  else {

    reply(Boom.notFound('The provided SSID does not belong to sessions.'))
  }
}

function handleLogout(request, reply) {
  const ssid = request.payload.ssid

  // Remove ssid from sessions
  // TODO: use persistence
  userSessions = _.omit(userSessions, (value) => {
    return value === ssid
  })

  reply({
    message: 'success'
  })
}

//
// const logout = function (request, reply) {
//
//     request.cookieAuth.clear();
//     return reply.redirect('/');
// };

export default [
  {
    method: 'POST',
    path: '/api/auth/login',
    config: {
      auth: { mode: 'try' },
      handler: handleLogin
    }
  },
  {
    method: 'POST',
    path: '/api/auth/check',
    handler: handleCheckAuth
  },
  {
    method: 'POST',
    path: '/api/auth/logout',
    handler: handleLogout
  },
  {
    method: 'GET`',
    path: '/api/auth/testauthcookie',
    handler: (request, response) => {
      reply(request.auth.credentials)
    }
  },

]
