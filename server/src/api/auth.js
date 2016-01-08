import _ from 'lodash'
import Boom from 'boom'

let userSessions = {}

// let uuid = 1;       // Use seq instead of proper unique identifiers for demo only

const users = {
    'joe@example.com': {
        email: 'joe@example.com',
        password: 'password1',
        name: 'John Doe'
    }
};

function handleLogin(request, reply) {
  // WARNING: this should be only used via HTTPS

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
  const account = users[email];

  if (!account || account.password !== password) {

    return reply(Boom.badRequest('Invalid username or password'))
  }

  const sid = Math.random().toString(36).substring(7)

  request.server.app.cache.set(sid, { account: account }, 0, (err) => {

    if (err) {
      return reply(err);
    }

    request.cookieAuth.set({ sid: sid });
    return reply({
      message: 'success',
      sid: sid
    })
  });
}

function handleCheckAuth(request, reply) {
  if (request.auth.isAuthenticated &&
      request.payload.sid === request.auth.artifacts.sid) { // quite naive

    return reply()
  }

  else {

    request.cookieAuth.clear();
    return reply(Boom.unauthorized())
  }

}

function handleLogout(request, reply) {

  request.cookieAuth.clear();

  reply({
    message: 'success'
  })
}

export default [
  {
    method: 'POST',
    path: '/api/auth/login',
    config: { auth: { mode: 'try' } },
    handler: handleLogin
  },
  {
    method: 'POST',
    path: '/api/auth/check',
    config: { auth: { mode: 'try' } },
    handler: handleCheckAuth
  },
  {
    method: 'GET',
    path: '/api/auth/logout',
    config: { auth: { mode: 'try' } },
    handler: handleLogout
  },

  {
    method: 'GET',
    path: '/api/auth/tryauth',
    config: { auth: { mode: 'try' } },
    handler: (request, reply) => {
      console.log(request.auth)
      reply('try auth')
    }
  },
  {
    method: 'GET',
    path: '/api/auth/authenticated',
    handler: (request, reply) => {
      console.log(request.auth)
      reply('authenticated')
    }
  },

]
