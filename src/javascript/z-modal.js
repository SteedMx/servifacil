var debitLink = document.querySelector('#sm-debit2')
var debitModal = document.querySelector('.payments__modalDebit')
var debitModalId = document.getElementById('debitModal');

function getParameterByName(name, url) {
	if (!url) {
		url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var paramDebit = getParameterByName('paramDebit');

if (paramDebit) {
  debitModal.dataset.active = 'true'
}

debitLink.addEventListener('click', function (event) {
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
var creditModalId = document.getElementById('creditModal');

var paramCredit = getParameterByName('paramCredit');

if (paramCredit) {
  creditModal.dataset.active = 'true'
}

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
var valesModalId = document.getElementById('valesModal');

var paramVales = getParameterByName('paramVales');

if (paramVales) {
  valesModal.dataset.active = 'true'
}

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

window.onclick = function(event) {
	if (event.target == debitModalId) {
		debitModal.dataset.active = 'false'
	} else if (event.target == creditModalId) {
    creditModal.dataset.active = 'false'
  } else if (event.target == valesModalId) {
    valesModal.dataset.active = 'false'
  }
}
