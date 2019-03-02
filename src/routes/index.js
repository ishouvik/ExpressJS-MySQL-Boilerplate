const express = require('express')
const cors = require('cors')
const v1 = require('./v1')

const app = express()

app.use(cors())

app.get('/', function (req, res, next) {
  res.json({ message: 'Create sites' })
})

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.use('/v1', v1)

// Handle all wrong/missing paths
app.get('*', (req, res) => {
  res.json({ message: 'not found' }, 404)
})

module.exports = app
