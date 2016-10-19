'use strict'

const key = require('../.env').mandrillApiKey
const Mandrill = require('mandrill-api/mandrill')
const mandrillClient = new Mandrill.Mandrill(key)

const sendEmail = (msg) => (
  new Promise((resolve, reject) => {
    mandrillClient
      .messages
      .send(
        { message: msg },
        (result) => resolve({ status: 'send' }),
        (err) => reject(err)
      )
  })
)

module.exports = { sendEmail }
