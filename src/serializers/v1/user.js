'use strict'
var JSONAPISerializer = require('jsonapi-serializer').Serializer

var opts = {
  attributes: [
    'uid',
    'createdAt',
    'updatedAt'
  ]
}

module.exports = (data, meta = '') => {
  if (meta !== null) opts.meta = meta
  const Serializer = new JSONAPISerializer('user', opts)
  return Serializer.serialize(data)
}
