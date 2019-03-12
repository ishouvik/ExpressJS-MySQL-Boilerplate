---
to: src/controllers/<%= h.inflection.dasherize(h.changeCase.lower(path)) %>/<%= h.inflection.camelize(resource, true) %>.js
---
<%
  path = h.inflection.dasherize(h.changeCase.lower(path))
  resourceType = h.inflection.camelize(resource, true)
  model = h.inflection.camelize(resource)
%>
const <%= model %>Service = require('@services/<%= resourceType %>')
const <%= model %>Serializer = require('@serializers/<%= path %>/<%= resourceType %>')

exports.index = async (req, res) => {
  try {
    const { docs, meta } = await <%= model %>Service.findAll(req.query.page)
    res.json(<%= model %>Serializer(docs, meta))
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
}

exports.show = async (req, res) => {
  try {
    const <%= resourceType %> = await <%= model %>Service.findOne({ uid: req.params.uid })

    if (<%= resourceType %>.errors) res.status(404).send(<%= resourceType %>.errors)
    res.json(<%= model %>Serializer(<%= resourceType %>))
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
}

exports.create = async (req, res) => {
  try {
    const <%= resourceType %> = await <%= model %>Service.create(req.body)

    if (<%= resourceType %>.errors) res.status(422).send(<%= resourceType %>.errors)
    res.json(<%= model %>Serializer(<%= resourceType %>))
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
}

exports.update = async (req, res) => {
  try {
    const <%= resourceType %> = await <%= model %>Service.update(req.params.uid, req.body)

    if (<%= resourceType %>.errors) res.status(422).send(<%= resourceType %>.errors)
    res.json(<%= model %>Serializer(<%= resourceType %>))
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
}
