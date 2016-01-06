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
  // Still don't know how to handle server instant when testing seperate file.
  // So put them all in this file for now.
  //

  describe('auth api', () => {
    it('allow user to login', (done) => {
      const options = {
        method: 'GET',
        url: '/api/auth/login'
      }
      server.inject(options, (response) => {
        expect(response.statusCode).to.equal(200)
        expect(response.result).to.equal('login')
        done()
      })
    })
  })

})
