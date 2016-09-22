'use strict'

const express = require('express')
const logger = require('morgan')
const resolve = require('path').resolve

const app = express()
const files = () => express.static(resolve(__dirname, 'public'))

app.use(logger('tiny'))
app.use(files())

app.get(/|index(.html)?$/, (req, res) => {
  res.sendFile(resolve(__dirname, 'public/index.html'))
})

app.get(/metodos(.html)?$/, (req, res) => {
  res.sendFile(resolve(__dirname, 'public/metodos.html'))
})

if (!module.parent) {
  app.listen(3000)
}

module.exports = app

