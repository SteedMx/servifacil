'use strict'

const express = require('express')
const logger = require('morgan')
const resolve = require('path').resolve

const app = express()
const files = () => express.static(resolve(__dirname, 'public'))

app.use(logger('tiny'))
app.use(files())

app.get('/', function () {
  res.sendFile('public/index.html')
})

app.get('/metodos', function (req, res) {
  res.sendFile('public/metodos.html')
})

if (!module.parent) {
  app.listen(3000)
}

module.exports = app

