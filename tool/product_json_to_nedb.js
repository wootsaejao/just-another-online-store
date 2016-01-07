
var _ = require('lodash')
var Datastore = require('nedb')

var productObjArray = require('./__build__/products')

var db = new Datastore({ filename: './__build__/database.db' });

db.loadDatabase(function (err) {

  db.insert(productObjArray, function (err, newDocs) {
    if (err) {
      console.log(err)
    }

    else {
      console.log('success')
    }
  })
});
