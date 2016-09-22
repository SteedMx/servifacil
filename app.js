'use strict'

const express = require('express')
const logger = require('morgan')
const BodyParser = require('body-parser')

const resolve = require('path').resolve

const app = express()
const files = () => express.static(resolve(__dirname, 'public'))

app.use(logger('tiny'))
app.use(files())
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: false }))

app.get(/\/|index(.html)?$/, (req, res) => {
  res.sendFile(resolve(__dirname, 'public/index.html'))
})

app.get(/metodos(.html)?$/, (req, res) => {
  res.sendFile(resolve(__dirname, 'public/metodos.html'))
})

app.post(/\/contact/, (req, res) => {
  const body = req.body
  res.json(body)
})

if (!module.parent) {
  app.listen(3000)
}

module.exports = app

