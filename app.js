'use strict'

const express = require('express')
const logger = require('morgan')
const BodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const resolve = require('path').resolve

const Message = require('./lib/message')
const Mandrill = require('./lib/mandrill')

const app = express()
const files = () => express.static(resolve(__dirname, 'public'))

if (process.env.NODE_ENV === 'development') {
  app.use(cors())
}

app.use(compression())
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

app.post(/\/contact$/, (req, res) => {
  const body = req.body
  const msg = Message.contact(body)

  Mandrill
    .sendEmail(msg)
    .then((status) => res.status(201).json(status))
    .catch((err) => res.status(500).json(err))
})

app.post(/\/cv$/, (req, res) => {
  const body = req.body
  const msg = Message.cv(body)

  Mandrill
    .sendEmail(msg)
    .then((status) => res.status(200).json(status))
    .catch((err) => res.status(500).json(err))
})

if (!module.parent) {
  app.listen(3000)
}

module.exports = app
