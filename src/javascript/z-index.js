$(document).ready(function () {
  var misionLink = document.querySelector('#mvv-link')
  var misionModal = document.querySelector('#mvv-modal')

  misionLink.addEventListener('click', function (event) {
    event.preventDefault()
    misionModal.dataset.active = 'true'
  })

  misionModal.addEventListener('click', function () {
    misionModal.dataset.active = 'false'
  })

  var historyLink = document.querySelector('#h-link')
  var historyModal = document.querySelector('#h-modal')

  historyLink.addEventListener('click', function (event) {
    console.log('clicking')
    event.preventDefault()
    historyModal.dataset.active = 'true'
  })

  historyModal.addEventListener('click', function () {
    historyModal.dataset.active = 'false'
  })

  var qsLink = document.querySelector('#qs-link')
  var qsModal = document.querySelector('#qs-modal')

  qsLink.addEventListener('click', function (event) {
    event.preventDefault()
    qsModal.dataset.active = 'true'
  })

  qsModal.addEventListener('click', function () {
    qsModal.dataset.active = 'false'
  })

  var gasLink = document.querySelector('#gas')
  var gasModal = document.querySelector('#ser-gas')

  gasLink.addEventListener('click', function (event) {
    event.preventDefault()
    gasModal.dataset.active = 'true'
  })

  gasModal.addEventListener('click', function () {
    gasModal.dataset.active = 'false'
  })

  var factLink = document.querySelector('#fact')
  var factModal = document.querySelector('#ser-fact')

  factLink.addEventListener('click', function (event) {
    event.preventDefault()
    factModal.dataset.active = 'true'
  })

  factModal.addEventListener('click', function () {
    factModal.dataset.active = 'false'
  })

  var limpLink = document.querySelector('#limp')
  var limpModal = document.querySelector('#ser-limp')

  limpLink.addEventListener('click', function (event) {
    event.preventDefault()
    limpModal.dataset.active = 'true'
  })

  limpModal.addEventListener('click', function () {
    limpModal.dataset.active = 'false'
  })

  var mgasLink = document.querySelector('#mgas')
  var mgasModal = document.querySelector('#mgas-modal')
  var close = document.querySelector('#close')

  mgasLink.addEventListener('click', function (event) {
    event.preventDefault()
    setTimeout(function () {
      initMap()
    }, 1000)
    mgasModal.dataset.active = 'true'
  })

  close.addEventListener('click', function () {
    mgasModal.dataset.active = 'false'
  })

  var mfactLink = document.querySelector('#mfact')
  var mfactModal = document.querySelector('#mfact-modal')
  var mfactClose = document.querySelector('#mclose')

  mfactLink.addEventListener('click', function (event) {
    event.preventDefault()
    mfactModal.dataset.active = 'true'
  })

  mclose.addEventListener('click', function () {
    mfactModal.dataset.active = 'false'
  })

  var sprovLink = document.querySelector('#provee')
  var sprovModal = document.querySelector('#sprov-modal')

  sprovLink.addEventListener('click', function (event) {
    event.preventDefault()
    sprovModal.dataset.active = 'true'
  })

  sprovModal.addEventListener('click', function () {
    sprovModal.dataset.active = 'false'
  })

  var spitsLink = document.querySelector('#spits')
  var spitsModal = document.querySelector('#spits-modal')

  spitsLink.addEventListener('click', function (event) {
    event.preventDefault()
    spitsModal.dataset.active = 'true'
  })

  spitsModal.addEventListener('click', function () {
    spitsModal.dataset.active = 'false'
  })

  var rsLink = document.querySelector('#rs')
  var rsModal = document.querySelector('#rs-modal')

  rsLink.addEventListener('click', function (event) {
    event.preventDefault()
    rsModal.dataset.active = 'true'
  })

  rsModal.addEventListener('click', function () {
    rsModal.dataset.active = 'false'
  })

  var bolsaLink = document.querySelector('#bolsa')
  var bolsaClose = document.querySelector('#bolsa-close')
  var bolsaModal = document.querySelector('#bolsa-modal')

  bolsaLink.addEventListener('click', function (event) {
    console.log('click')
    event.preventDefault()
    bolsaModal.dataset.active = 'true'
  })

  bolsaClose.addEventListener('click', function () {
    bolsaModal.dataset.active = 'false'
  })

  var servivales = document.querySelector('#product-vales')
  var servivalesModal = document.querySelector('#product-vales-modal')

  servivales.addEventListener('click', function (event) {
    event.preventDefault()
    servivalesModal.dataset.active = 'true'
  })

  servivalesModal.addEventListener('click', function () {
    servivalesModal.dataset.active = 'false'
  })

  var icon = 'https://raw.githubusercontent.com/SteedMx/servifacil/master/src/images/ping.png'
  window.initMap = function () {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 19,
        lng: -99
      },
      scrollwheel: true,
      zoom: 5
    })

    var marker1 = new google.maps.Marker({
      position: {
        lat: 19.8442755,
        lng: -98.9774797
      },
      map: map,
      icon: icon
    })

    var marker2 = new google.maps.Marker({
      position: {
        lat: 19.8366984,
        lng: -98.9574462
      },
      map: map,
      icon: icon
    })

    var marker3 = new google.maps.Marker({
      position: {
        lat: 20.0678267,
        lng: -99.3302687
      },
      map: map,
      icon: icon
    })

    var marker4 = new google.maps.Marker({
      position: {
        lat: 20.0559626,
        lng: -99.3030389
      },
      map: map,
      icon: icon
    })

    var marker5 = new google.maps.Marker({
      position: {
        lat: 20.0468906,
        lng: -99.3426057
      },
      map: map,
      icon: icon
    })

    var marker6 = new google.maps.Marker({
      position: {
        lat: 19.703757,
        lng: -99.185143
      },
      map: map,
      icon: icon
    })

    var marker7 = new google.maps.Marker({
      position: {
        lat: 19.70374,
        lng: -99.185207
      },
      map: map,
      icon: icon
    })

    var marker8 = new google.maps.Marker({
      position: {
        lat: 19.657212,
        lng: -99.164631
      },
      map: map,
      icon: icon
    })

    var marker9 = new google.maps.Marker({
      position: {
        lat: 19.838287,
        lng: -99.077625
      },
      map: map,
      icon: icon
    })

    var marker10 = new google.maps.Marker({
      position: {
        lat: 18.390977,
        lng: -95.753355
      },
      map: map,
      icon: icon
    })

    var marker11 = new google.maps.Marker({
      position: {
        lat: 18.390984,
        lng: -95.753382
      },
      map: map,
      icon: icon
    })

    var marker12 = new google.maps.Marker({
      position: {
        lat: 19.714988,
        lng: -99.251284
      },
      map: map,
      icon: icon
    })

    var marker13 = new google.maps.Marker({
      position: {
        lat: 19.601722,
        lng: -98.918314
      },
      map: map,
      icon: icon
    })

    var marker14 = new google.maps.Marker({
      position: {
        lat: 19.44037,
        lng: -98.900434
      },
      map: map,
      icon: icon
    })

    var marker15 = new google.maps.Marker({
      position: {
        lat: 19.427311,
        lng: -98.905179
      },
      map: map,
      icon: icon
    })

    var marker16 = new google.maps.Marker({
      position: {
        lat: 18.972666,
        lng: -99.589989
      },
      map: map,
      icon: icon
    })

    var marker17 = new google.maps.Marker({
      position: {
        lat: 18.972644,
        lng: -99.589996
      },
      map: map,
      icon: icon
    })

    var marker18 = new google.maps.Marker({
      position: {
        lat: 19.654651,
        lng: -99.097127
      },
      map: map,
      icon: icon
    })

    var marker19 = new google.maps.Marker({
      position: {
        lat: 19.653832,
        lng: -99.097183
      },
      map: map,
      icon: icon
    })

    var marker20 = new google.maps.Marker({
      position: {
        lat: 19.675518,
        lng: -99.072233
      },
      map: map,
      icon: icon
    })

    var marker21 = new google.maps.Marker({
      position: {
        lat: 19.675518,
        lng: -99.072233
      },
      map: map,
      icon: icon
    })

    var marker22 = new google.maps.Marker({
      position: {
        lat: 19.817719,
        lng: -99.864743
      },
      map: map,
      icon: icon
    })

    var marker23 = new google.maps.Marker({
      position: {
        lat: 18.043829,
        lng: -92.904052
      },
      map: map,
      icon: icon
    })


    var marker24 = new google.maps.Marker({
      position: {
        lat: 18.125192,
        lng: -92.864193
      },
      map: map,
      icon: icon
    })

    var marker25 = new google.maps.Marker({
      position: {
        lat: 18.006126,
        lng: -92.948128
      },
      map: map,
      icon: icon
    })

    var marker26 = new google.maps.Marker({
      position: {
        lat: 18.006521,
        lng: -92.94812
      },
      map: map,
      icon: icon
    })

    var marker27 = new google.maps.Marker({
      position: {
        lat: 17.996069,
        lng: -92.93667
      },
      map: map,
      icon: icon
    })

    var marker28 = new google.maps.Marker({
      position: {
        lat: 17.984593,
        lng: -92.92567
      },
      map: map,
      icon: icon
    })
  }

  var script = document.createElement('script')
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDkAzNwyVOO-eiYaKszYkUuAaQN3Y9ttfA&callback=initMap'
  document.querySelector('body').appendChild(script)
})
