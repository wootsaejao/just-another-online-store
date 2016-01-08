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

  let account = null
  // console.log(request.auth)

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

  const sid = request.payload.sid
  const userSessionValues = _.values(userSessions)

  if (_.includes(userSessionValues, sid)) {

    reply({
      message: 'authenticated'
    })
  }

  else {

    reply(Boom.notFound('The provided SSID does not belong to sessions.'))
  }
}

function handleLogout(request, reply) {
  // const sid = request.payload.sid
  //
  // // Remove sid from sessions
  // // TODO: use persistence
  // userSessions = _.omit(userSessions, (value) => {
  //   return value === sid
  // })

  console.log(request.cookieAuth)
  request.cookieAuth.clear();

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
