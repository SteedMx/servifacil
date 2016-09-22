'use strict'

const Mandrill = require('mandrill-api/mandrill')
const mandrillClient = new Mandrill.Mandrill(process.env.MANDRIL_API_KEY)

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
