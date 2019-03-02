const express = require('express')
const gatekeeper = require('../../middlewares/gatekeeper')
const users = require('./user')

const app = express()

// Protect resources from unauthorized access
app.use(gatekeeper.internalV1Auth)

// Resources
app.use('/users', users)

module.exports = app
