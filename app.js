require('module-alias/register')
var express = require('express')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var router = require('@routes')
var helmet = require('helmet')

var app = express()

app.use(helmet())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', router)

module.exports = app
