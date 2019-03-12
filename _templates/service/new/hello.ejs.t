---
to: src/services/<%= h.inflection.camelize(resource, true) %>.js
---
<%
  resourceType = h.inflection.camelize(resource, true)
  model = h.inflection.camelize(resource)
%>
const models = require('@models')
const <%= model %> = models.<%= model %>

// creates paginated <%= resourceType %> list
// @params pageNum: integer
// @return object
exports.findAll = async pageNum => {
  try {
    const total = await <%= model %>.count()
    const limit = 10
    const page = parseInt(pageNum) || 1
    const offset = limit * (page - 1)
    const docs = await <%= model %>.scope('sorted').findAll({
      limit,
      offset
    })

    return { docs, meta: { total, limit, page } }
  } catch (err) {
    return err
  }
}

// find <%= resourceType %> by key
// @parmas args { uid: 'xxxxxxxxxxxxxxx' }
// @return object
exports.findOne = async args => {
  try {
    const <%= resourceType %> = await <%= model %>.findOne({
      where: args
    })

    if (<%= resourceType %> === null) {
      return {
        errors: { message: 'not found' }
      }
    }

    return <%= resourceType %>
  } catch (err) {
    return {
      errors: { message: 'something went wrong' }
    }
  }
}

// creates <%= resourceType %>
// performs rollback if validation errors occurred
// @params args: {}
// @return object
exports.create = async args => {
  try {
    let <%= resourceType %> = await <%= model %>.create(args)

    <%= resourceType %> = await <%= model %>.findOne({
      where: { uid: <%= resourceType %>.uid }
    })

    return <%= resourceType %>
  } catch (err) {
    return err
  }
}

// Update <%= resourceType %> attrs
// @params {  }
exports.update = async (uid, args) => {
  try {
    let <%= resourceType %> = await <%= model %>.findOne({
      where: { uid }
    })

    await <%= resourceType %>.update(args)
    <%= resourceType %> = await <%= resourceType %>.reload()

    return <%= resourceType %>
  } catch (err) {
    return err
  }
}
