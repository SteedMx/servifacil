'use strict'

const express = require('express')
const logger = require('morgan')
const BodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const Mandrill = require('mandrill-api/mandrill')

const resolve = require('path').resolve

const app = express()
const files = () => express.static(resolve(__dirname, 'public'))
const mandrillClient = new Mandrill.Mandrill(process.env.MANDRIL_API_KEY)

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

  const message = {
    html: body.message,
    subject: body.subject,
    from_email: body.email,
    from_name: body.name,
    to: [{
      email: 'michell@steed.mx',
      name: 'Michell Ayala',
      type: 'to'
    }]
  }

  mandrillClient
    .messages
    .send({ message },
    function (result) {
      return res.status(201).send({ status: 'sent' })
    },
    function (err) {
      return res.status(500).send(err)
    })
})

if (!module.parent) {
  app.listen(3000)
}

module.exports = app
