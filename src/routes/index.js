const express = require('express')
const cors = require('cors')
const v1 = require('./api/v1')

const app = express()

app.use(cors())

app.get('/', (req, res, next) => res.json({ message: 'You shall not pass' }))
app.get('/ping', (req, res) => res.send('pong'))

app.use('/api/v1', v1)

// Handle all wrong/missing paths
app.get('*', (req, res) => res.json({ message: 'not found' }, 404))

module.exports = app
