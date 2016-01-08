
import Boom from 'boom'
import Datastore from 'nedb'
import path from 'path'
import Joi from 'joi'
import _ from 'lodash'

const productsDBPath = path.resolve(__dirname, '../../database/products.db')
var db = new Datastore({ filename: productsDBPath })

function handleGetProducts(request, reply) {

  const limit = request.query.limit || 10
  const excludeImage = request.query['excludeImage'] === 'true' || false

  db.loadDatabase((err) => {

    db.find({}).limit(limit).exec((err, docs) => {

      if (excludeImage) {

        return reply(docs.map((doc) => {
            return _.omit(doc, 'image')
          })
        )
      }

      else {
        return reply(docs)
      }
    })
  })
}

export default [
  // {
  //   method: 'POST',
  //   path: '/api/products',
  //   handler: handleCreateProduct
  // },
  {
    method: 'GET',
    path: '/api/products',
    config: {
      auth: false,
      validate: {
        query: {
          limit: Joi.number().integer(),
          excludeImage: Joi.string()
        }
      },
    },
    handler: handleGetProducts
  },
  // {
  //   method: 'GET',
  //   path: '/api/products/{id}',
  //   handler: handleGetProductById
  // },
  // {
  //   method: 'PUT',
  //   path: '/api/products/{id}',
  //   handler: handleUpdateProduct
  // },
  // {
  //   method: 'DELETE',
  //   path: '/api/products/{id}',
  //   handler: handleDeleteProduct
  // },
]
