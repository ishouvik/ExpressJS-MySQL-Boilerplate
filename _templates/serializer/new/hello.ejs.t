---
to: src/serializers/<%= h.inflection.dasherize(h.changeCase.lower(path)) %>/<%= h.inflection.camelize(resource, true) %>.js
---
<%
  serializerType = h.inflection.dasherize(h.changeCase.lower(resource))
%>
'use strict'
var JSONAPISerializer = require('jsonapi-serializer').Serializer

var opts = {
  attributes: ['id', 'createdAt']
}

module.exports = (data, meta = '') => {
  if (meta !== null) opts.meta = meta
  const Serializer = new JSONAPISerializer('<%= serializerType %>', opts)
  return Serializer.serialize(data)
}
