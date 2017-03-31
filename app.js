'use strict'

const express = require('express')
const logger = require('morgan')
const BodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const resolve = require('path').resolve

const Message = require('./lib/message')
const nodemailer = require('nodemailer')

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

  console.log('sending mail!');

  const body = req.body

	// Create the transporter with the required configuration for Gmail
	// change the user and pass !
	var transporter = nodemailer.createTransport({
			host: 'smtp.zoho.com',
			port: 465,
			secure: true, // use SSL
			auth: {
					user: 'servifacil@steed.mx',
					pass: 'Servifacil2016'
			}
	});

	// setup e-mail data, even with unicode symbols
	var mailOptions = {
			from: '"Sitio Web Servifácil " <servifacil@steed.mx>', // sender address (who sends)
			to: 'gerenciadf@servifacil.com.mx, servicioaclientesdf@servifacil.com.mx, robertodelvalle@servifacil.com.mx, eugeniodelvalle@servifacil.com.mx, sfsvales@servifacil.com.mx, gestiondeservicios@servifacil.com.mx, jefventasdf@servifacil.com.mx, clientes@servifacil.com.mx, matias@steed.mx', // list of receivers (who receives)
			subject: 'Forma de contacto del sitio ', // Subject line
			html: '<b>Mensaje enviado desde la forma de contacto en www.servifacil.com.mx </b><br> Nombre del cliente: ' + body.name + '<br> Correo electrónico: ' + body.email + '<br> Asunto: ' + body.subject + '<br> Mensaje: ' + body.message// html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
			if(error){
					return console.log(error);
			}

			console.log('Message sent: ' + info.response);
	});

  res.redirect('/')
})

app.post(/\/cv$/, (req, res) => {
  const body = req.body

	// Create the transporter with the required configuration for Gmail
	// change the user and pass !
	var transporter = nodemailer.createTransport({
			host: 'smtp.zoho.com',
			port: 465,
			secure: true, // use SSL
			auth: {
					user: 'servifacil@steed.mx',
					pass: 'Servifacil2016'
			}
	});

	// setup e-mail data, even with unicode symbols
	var mailOptions = {
			from: '"Sitio Web Servifácil " <servifacil@steed.mx>', // sender address (who sends)
			to: 'gerenciarh@servifacil.com.mx, reclutamientoct@servifacil.com.mx, rechumanosdf@servifacil.com.mx, matias@steed.mx', // list of receivers (who receives)
			subject: 'Interesado en bolsa de trabajo', // Subject line
			html: '<b>Mensaje enviado desde la bolsa de trabajo en www.servifacil.com.mx <br> Nombre del interesado: </b>' + body.name + '<b><br> Edad: </b>' + body.age + '<b><br> Género: </b>' + body.sex + '<b><br> Ciudad: </b>' + body.city + '<b><br> Estado: </b>' + body.state + '<b><br> Teléfono: </b>' + body.telephone + '<b><br> Celular: </b>' + body.cellular + '<b><br> Correo electrónico: </b>' + body.email + '<b><br> Vacante deseada: </b>' + body.position + '<b><br> Sueldo mensuale deseado: </b>' + body.wage + '<b><br> Grado de estudios: </b>' + body.school + '<b><br> Disponibilidad de horario: </b>' + body.schedule + '<b><br> Disponibilidad de viajar: </b>' + body.travel + '<b><br> Comentarios: </b>' + body.comments
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
			if(error){
					return console.log(error);
			}

			console.log('Message sent: ' + info.response);
	});

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
