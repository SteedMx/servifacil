'use strict'

const contact = (body) => ({
  html: body.message,
  subject: body.subject,
  from_email: 'michell@steed.mx',
  from_name: body.name,
  to: [{
    email: body.email,
    type: 'to'
  }]
})

const cv = (body) => ({
  html: `Edad: ${body.age}
  Sexo: ${body.sex}
  Ciudad: ${body.city}
  Estado: ${body.state}
  Telefono: ${body.telephone}
  Celular: ${body.cellular}
  Email: ${body.email}
  Vacante: ${body.position}
  Sueldo: ${body.wage}
  Escolaridad: ${body.school}
  Disponibilidad de horario: ${body.schedule}
  Disponibilidad de viajar: ${body.travel}
  Comentarios: ${body.comments}`,
  subject: 'Vacante - CV',
  from_email: body.email,
  from_name: body.name,
  to: [{
    email: 'michell@steed.mx',
    name: 'Michell Ayala',
    type: 'to'
  }]
})

module.exports = { contact, cv }
