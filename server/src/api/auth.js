import _ from 'lodash'
import Boom from 'boom'

let userSessions = {}

function handleLogin(request, reply) {
  // WARNING: this should be only used via HTTPS

  const email = request.payload.email
  const password = request.payload.password

  // TODO: use persistence
  if (email === 'joe@example.com' && password === 'password1') {
    const ssid = Math.random().toString(36).substring(7)

    // Store sessions
    userSessions[email] = ssid

    reply({
      message: 'success',
      ssid: ssid
    })
  }
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

export default [
  {
    method: 'POST',
    path: '/api/auth/login',
    handler: handleLogin
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

]
