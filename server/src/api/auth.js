export default [
  {
    method: 'GET',
    path: '/api/auth/login',
    handler: function (request, reply) {
      reply('login')
    }
  },

  {
    method: 'GET',
    path: '/api/auth/logout',
    handler: function (request, reply) {
      reply('logout')
    }
  },

  {
    method: 'GET',
    path: '/api/auth/check',
    handler: function (request, reply) {
      reply('check auth')
    }
  },
]
