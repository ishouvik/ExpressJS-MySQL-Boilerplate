---
to: src/routes/api/<%= h.inflection.dasherize(h.changeCase.lower(path)) %>/<%= h.inflection.camelize(resource, true) %>.js
---
<%
  path = h.inflection.dasherize(h.changeCase.lower(path))
  resourceController = h.inflection.camelize(resource, true)
%>const express = require('express')
const router = express.Router()
const <%= resourceController %> = require('@controllers/<%= path %>/<%= resourceController %>')

router.get('/', <%= resourceController %>.index)
router.get('/:uid', <%= resourceController %>.show)
router.post('/', <%= resourceController %>.create)
router.patch('/:uid', <%= resourceController %>.update)
router.put('/:uid', <%= resourceController %>.update)

module.exports = router
