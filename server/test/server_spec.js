import { expect } from 'chai'
import getServer from '../src/server'

const server = getServer(9999)

describe('server', () => {
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
