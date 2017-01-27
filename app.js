'use strict'

const express = require('express')
const logger = require('morgan')
const BodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const resolve = require('path').resolve

/*
const Message = require('./lib/message')
const Mandrill = require('./lib/mandrill')
const mailgun = require('./lib/mailgun')
*/

const nodemailer = require('nodemailer');

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
  /*
  const body = req.body
  const msg = mailgun.contactMailHtml(body)
  mailgun.sendMail(msg)
  res.redirect('/')
  */

  var mailOpts, smtpTrans;

  // setup nodemailer transport
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use ssl
    auth: {
      user: 'servifacil@steed.mx',
      pass: 'Servifacil2016'
    }
  });

  console.log('BODY: ', req.body);
  // setup e-mail data, even with unicode symbols
  mailOpts = {
    from: '"Contacto Servifácil" <servifacil@steed.mx>', // sender's address
    to: 'matias.rodgian@gmail.com, comunicaciones@servifacil.com.mx', // list of receivers
    subject: 'Correo desde Servifacil localhost', // subject line
    html: 'Este mensaje ha sido enviado desde la forma de contacto al pie de la Web servifacil.com.mx<br>Nombre: ' +  req.body.name + '<br>Correo: ' + req.body.email + '<br>Título: ' + req.body.subject + '<br>Mensaje: ' + req.body.message
  };

  smtpTrans.sendMail(mailOpts, function (error, response) {
    // email failed to send
    if (error) {
      res.render('index', {
        title: 'Servifacil - Contacto',
        msg: 'Error occurred, message not sent.',
        err: true,
        page: 'index'
      })
    }
    // email sent successfully
    else {
      res.render('index', {
        title: 'Servifacil - Contacto',
        msg: 'Message sent! Thank you.',
        err: false,
        page: 'index'
      })
    }
  });
})

app.post(/\/cv$/, (req, res) => {
  const body = req.body
  const msg = mailgun.cvMailHtml(body)
  mailgun.sendMail(msg)
  res.redirect('/')
})

app.post(/\/factura$/, (req, res) => {
  const body = req.body
  const msg = mailgun.facturacionMailHtml(body)
  mailgun.sendMail(msg)
  res.redirect('/')
})

if (!module.parent) {
  app.listen(3000)
}

module.exports = app
