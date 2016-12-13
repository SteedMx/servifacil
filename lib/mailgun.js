var api_key = 'key-ef297db5b49a9a073e4e855642a0ff11';
var domain = 'sandbox4c12a580366f46ecba936b8fcfc6b1e2.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

module.exports = {
  sendMail: function (html) {
    const data = {
      from: 'Steed Page <steed@gmail.com>',
      to: 'Factura <factura@servifacil.com.mx>',
      subject: 'New quote',
      html: html
    };
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
    });
  },
  contactMailHtml: function (form) {
    var now = new Date();
    return `
      Enviada el: ${now.toLocaleTimeString()}
      </br>
      </br>
      <p>Nombre: ${form.contactName}</p>
      </br>
      <p>Email: ${form.contactEmail}</p>
      </br>
      <p>Titulo: ${form.contactSubject}</p>
      </br>
      <p>Mensaje: ${form.contactMessage}</p>
      `
  },
  cvMailHtml: function (form) {
    var now = new Date();
    return `
      Enviada el: ${now.toLocaleTimeString()}
      </br>
      </br>
      <p>Nombre: ${form.name}</p>
      </br>
      <p>Edad: ${form.age}</p>
      </br>
      <p>Sexo: ${form.sex}</p>
      </br>
      <p>Ciudad: ${form.city}</p>
      <p>Estado: ${form.state}</p>
      </br>
      <p>Telefono: ${form.telephone}</p>
      </br>
      <p>Celular: ${form.cellular}</p>
      </br>
      <p>Email: ${form.email}</p>
      <p>Vacante deseada: ${form.position}</p>
      </br>
      <p>Sueldo mensual deseado: ${form.wage}</p>
      </br>
      <p>Escolaridad: ${form.school}</p>
      </br>
      <p>Disponibilidad de horario: ${form.schedule}</p>
      <p>Estado: ${form.state}</p>
      </br>
      <p>Disponibilidad para viajar: ${form.travel}</p>
      </br>
      <p>Comentarios: ${form.comments}</p>
      `
  },
  facturacionMailHtml: function (form) {
    var now = new Date();
    return `
      Enviada el: ${now.toLocaleTimeString()}
      </br>
      </br>
      <p>Folio: ${form.folio}</p>
      </br>
      <p>Importe: ${form.import}</p>
      </br>
      <p>Metodo de pago: ${form.paymentMethod}</p>
      </br>
      <p>Estacion: ${form.station}</p>
      </br>
      <p>Ultimos 4 digitos: ${form.lastDigits}</p>
      </br>
      <p>Fecha: ${form.date}</p>
      </br>
      <p>Nombre o razon social: ${form.name}</p>
      </br>
      <p>Domicilio fiscal: ${form.address}</p>
      </br>
      <p>Colonia: ${form.address2}</p>
      </br>
      <p>Ciudad: ${form.city}</p>
      </br>
      <p>Estado: ${form.estate}</p>
      </br>
      <p>Rfc: ${form.rfc}</p>
      </br>
      <p>Código postal: ${form.postalCode}</p>
      </br>
      <p>Correo electrónico: ${form.email}</p>
      </br>
      <p>Teléfono: ${form.phone}</p>
      <p>Comentarios: ${form.comments}</p>
      </br>
      `
  },
}
