var debitLink = document.querySelector('#sm-debit2')
var debitModal = document.querySelector('.payments__modalDebit')

console.log(324432)
debitLink.addEventListener('click', function (event) {
  console.log(123456)
  event.preventDefault()
  if (debitModal.dataset.active === 'false') {
    debitModal.dataset.active = 'true'
  }
})

/*
debitModal.addEventListener('click', function (event) {
  event.preventDefault()

  if (debitModal.dataset.active === 'true') {
    debitModal.dataset.active = 'false'
  }
})
*/

var creditLink = document.querySelector('#sm-credit2')
var creditModal = document.querySelector('.payments__modalCredit')

creditLink.addEventListener('click', function (event) {
  event.preventDefault()

  console.log('clicking link')
  if (creditModal.dataset.active === 'false') {
    creditModal.dataset.active = 'true'
  }
})

/*
creditModal.addEventListener('click', function (event) {
  event.preventDefault()

  if (creditModal.dataset.active === 'true') {
    creditModal.dataset.active = 'false'
  }
})
*/

var valesLink = document.querySelector('#sm-vales2')
var valesModal = document.querySelector('.payments__modalVales')

valesLink.addEventListener('click', function (event) {
  event.preventDefault()

  if (valesModal.dataset.active === 'false') {
    valesModal.dataset.active = 'true'
  }
})

/*
valesModal.addEventListener('click', function (event) {
  event.preventDefault()

  if (valesModal.dataset.active === 'true') {
    valesModal.dataset.active = 'false'
  }
})
*/

var $nav = $('.nav')

$(document).scroll(function () {
  var top = $nav.offset().top

  if (top >= 0 && top <= 50) {
    $nav.attr('data-fixed', 'false')
  } else {
    $nav.attr('data-fixed', 'true')
  }
})
