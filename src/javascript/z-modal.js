var debitLink = document.querySelector('#sm-debit')
var debitModal = document.querySelector('.payments__modalDebit')

debitLink.addEventListener('click', function (event) {
  event.preventDefault()

  if (debitModal.dataset.active === 'false') {
    debitModal.dataset.active = 'true'
  }
})

debitModal.addEventListener('click', function (event) {
  event.preventDefault()

  if (debitModal.dataset.active === 'true') {
    debitModal.dataset.active = 'false'
  }
})

var creditLink = document.querySelector('#sm-credit')
var creditModal = document.querySelector('.payments__modalCredit')

creditLink.addEventListener('click', function (event) {
  event.preventDefault()

  console.log('clicking link')
  if (creditModal.dataset.active === 'false') {
    creditModal.dataset.active = 'true'
  }
})

creditModal.addEventListener('click', function (event) {
  event.preventDefault()

  if (creditModal.dataset.active === 'true') {
    creditModal.dataset.active = 'false'
  }
})

var valesLink = document.querySelector('#sm-vales')
var valesModal = document.querySelector('.payments__modalVales')

valesLink.addEventListener('click', function (event) {
  event.preventDefault()

  if (valesModal.dataset.active === 'false') {
    valesModal.dataset.active = 'true'
  }
})

valesModal.addEventListener('click', function (event) {
  event.preventDefault()

  if (valesModal.dataset.active === 'true') {
    valesModal.dataset.active = 'false'
  }
})

var $nav = $('.nav')

$(document).scroll(function () {
  var top = $nav.offset().top

  if (top >= 0 && top <= 50) {
    $nav.attr('data-fixed', 'false')
  } else {
    $nav.attr('data-fixed', 'true')
  }
})
