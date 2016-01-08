import { expect } from 'chai'
import startServer from '../src/server'

let server

describe('server', () => {
  before((done) => {
    startServer(9999, (err, serverInstant) => {
      server = serverInstant
      done()
    })
  })

  after((done) => {
    server.root.stop(() => {
      done()
    })
  })

  describe('serving content', () => {
    it('server response to GET request on root path', (done) => {
      const options = {
        method: 'GET',
        url: '/'
      }
      server.inject(options, (response) => {
        expect(response.statusCode).to.equal(200)
        expect(response.headers['content-type']).to.include('html')
        done()
      })
    })

    it('server response to GET request on bundle.js', (done) => {
      const options = {
        method: 'GET',
        url: '/static/bundle.js'
      }
      server.inject(options, (response) => {
        expect(response.statusCode).to.equal(200)
        expect(response.headers['content-type']).to.include('javascript')
        done()
      })
    })
  })

  //
  // Still don't know how to handle server instant when testing on a seperate file.
  // So put them all in this file for now.
  //

  describe('auth api', () => {
    let sid

    it('allow user to login', (done) => {
      const options = {
        method: 'POST',
        url: '/api/auth/login',
        payload: {
          email: 'joe@example.com',
          password: 'password1'
        }
      }
      server.inject(options, (response) => {
        expect(response.statusCode).to.equal(200)
        expect(response.result.message).to.equal('success')
        expect(response.result.sid).to.exist
        sid = response.result.sid
        done()
      })
    })

    it('login with invalid password', (done) => {
      const options = {
        method: 'POST',
        url: '/api/auth/login',
        payload: {
          email: 'joe@example.com',
          password: 'intentional_invalid_password'
        }
      }
      server.inject(options, (response) => {
        expect(response.statusCode).to.equal(400)
        expect(response.result.message).to.equal('Invalid username or password')
        expect(response.result.sid).to.not.exist
        done()
      })
    })

    // it('check for exisiting sid', (done) => {
    //   const options = {
    //     method: 'POST',
    //     url: '/api/auth/check',
    //     payload: {
    //       sid: sid
    //     }
    //   }
    //   server.inject(options, (response) => {
    //     expect(response.statusCode).to.equal(200)
    //     expect(response.result.message).to.equal('authenticated')
    //     done()
    //   })
    // })

    // it('check auth with unexisted sid', (done) => {
    //   const options = {
    //     method: 'POST',
    //     url: '/api/auth/check',
    //     payload: {
    //       sid: 'random_sid_for_the_sake_of_testing'
    //     }
    //   }
    //   server.inject(options, (response) => {
    //     expect(response.statusCode).to.equal(404)
    //     expect(response.result.message).to.equal('The provided SSID does not belong to sessions.')
    //     done()
    //   })
    // })

    // // TODO: figure out how to test auth route
    // it('logout', (done) => {
    //   const options = {
    //     method: 'GET',
    //     url: '/api/auth/logout',
    //   }
    //   server.inject(options, (response) => {
    //     expect(response.statusCode).to.equal(200)
    //     expect(response.result.message).to.equal('success')
    //     done()
    //   })
    // })

  })

})
