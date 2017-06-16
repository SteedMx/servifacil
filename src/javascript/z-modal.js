// Needed by IE and Edge. Creates a 1px div for 1ms to jolt the browser into displaying the new DOM
function cleanDisplay() {
    console.log('were in cleanDisplay function');
    var c = document.createElement('div');
    c.innerHTML = 'x';
    c.style.visibility = 'hidden';
    c.style.height = '1px';
    document.body.insertBefore(c, document.body.firstChild);
    window.setTimeout(function() {document.body.removeChild(c)}, 1);
}

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
  console.log('clicking debit')
  if (debitModal.dataset.active === 'false') {
    debitModal.dataset.active = 'true'
  }
	cleanDisplay();
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

  console.log('clicking credit')
  if (creditModal.dataset.active === 'false') {
    creditModal.dataset.active = 'true'
  }
	cleanDisplay();
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
  console.log('clicking vales')

  if (valesModal.dataset.active === 'false') {
    valesModal.dataset.active = 'true'
  }
  //jQuery('.hero__float').addClass('z').removeClass('z');
	cleanDisplay();
})

/*
valesModal.addEventListener('click', function (event) {
  event.preventDefault()

  if (valesModal.dataset.active === 'true') {
    valesModal.dataset.active = 'false'
  }
})
*/

var mclose = document.querySelector('#mclose')

mclose.addEventListener('click', function () {
  if (debitModal.dataset.active === 'true') {
  debitModal.dataset.active = 'false'
  }
  if (valesModal.dataset.active === 'true') {
  valesModal.dataset.active = 'false'
  }
  if (creditModal.dataset.active === 'true') {
  creditModal.dataset.active = 'false'
  }
  cleanDisplay();
})

var valesClose = document.querySelector('#valesclose')

valesClose.addEventListener('click', function () {
  valesModal.dataset.active = 'false'
  cleanDisplay();
})

var creditClose = document.querySelector('#creditclose')

creditClose.addEventListener('click', function () {
  creditModal.dataset.active = 'false'
  cleanDisplay();
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

window.onclick = function(event) {
	if (event.target == debitModalId) {
		debitModal.dataset.active = 'false'
	} else if (event.target == creditModalId) {
    creditModal.dataset.active = 'false'
  } else if (event.target == valesModalId) {
    valesModal.dataset.active = 'false'
  }
}
