$(document).ready(function() {
  var hamburguer = document.querySelector('.nav-mobile__hamburguer')

  hamburguer.addEventListener('click', function () {
    var mobile = document.querySelector('.nav-mobile__tabs')

    if (hamburguer.dataset.active === 'true') {
      hamburguer.dataset.active = 'false'
      mobile.dataset.active = 'false'
    } else {
      hamburguer.dataset.active = 'true'
      mobile.dataset.active = 'true'
    }
  })

  $('.nav__mobileLink').each(function (index, element) {
    $(element).on('click', function (event) {
      var hamburguer = document.querySelector('.nav-mobile__hamburguer')
      var mobile = document.querySelector('.nav-mobile__tabs')
      hamburguer.dataset.active = 'false'
      mobile.dataset.active = 'false'
    })
  })
})
