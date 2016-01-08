
import Boom from 'boom'
import Datastore from 'nedb'
import path from 'path'

const productsDBPath = path.resolve(__dirname, '../../database/products.db')
var db = new Datastore({ filename: productsDBPath })

function handleGetProducts(request, reply) {
  db.loadDatabase((err) => {
    db.find({}).limit(2).exec((err, docs) => {
      reply(docs)
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
    config: { auth: false },
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

// export default [{
//   method: 'GET',
//   path: '/api/products',
//   config: { auth: false },
//   handler: (request, response) => {
//     reply('peoducts')
//   }
// }]
