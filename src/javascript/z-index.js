$(document).ready(function () {
  var misionLink = document.querySelector('#mvv-link')
  var misionModal = document.querySelector('#mvv-modal')
  var misionClose = document.querySelector('#mvv-close')

  misionLink.addEventListener('click', function (event) {
    event.preventDefault()
    misionModal.dataset.active = 'true'
  })

  misionClose.addEventListener('click', function () {
    misionModal.dataset.active = 'false'
  })

  var historyLink = document.querySelector('#h-link')
  var historyModal = document.querySelector('#h-modal')
  var historyClose = document.querySelector('#h-close')

  historyLink.addEventListener('click', function (event) {
    event.preventDefault()
    historyModal.dataset.active = 'true'
  })

  historyClose.addEventListener('click', function () {
    historyModal.dataset.active = 'false'
  })

  var qsLink = document.querySelector('#qs-link')
  var qsModal = document.querySelector('#qs-modal')
  var qsClose = document.querySelector('#qs-close')

  qsLink.addEventListener('click', function (event) {
    event.preventDefault()
    qsModal.dataset.active = 'true'
  })

  qsClose.addEventListener('click', function () {
    qsModal.dataset.active = 'false'
  })

  var gasLink = document.querySelector('#gas')
  var gasModal = document.querySelector('#ser-gas')
  var gasClose = document.querySelector('#ser-close')

  gasLink.addEventListener('click', function (event) {
    event.preventDefault()
    gasModal.dataset.active = 'true'
  })

  gasClose.addEventListener('click', function () {
    gasModal.dataset.active = 'false'
  })

  var factLink = document.querySelector('#fact')
  var factModal = document.querySelector('#ser-fact')
  var factClose = document.querySelector('#ser-fact-close')

  factLink.addEventListener('click', function (event) {
    event.preventDefault()
    factModal.dataset.active = 'true'
  })

  factClose.addEventListener('click', function () {
    factModal.dataset.active = 'false'
  })

  var limpLink = document.querySelector('#limp')
  var limpModal = document.querySelector('#ser-limp')
  var limpClose = document.querySelector('#ser-limp-close')

  limpLink.addEventListener('click', function (event) {
    event.preventDefault()
    limpModal.dataset.active = 'true'
  })

  limpClose.addEventListener('click', function () {
    console.log('some shit')
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

  /*
  mfactLink.addEventListener('click', function (event) {
    event.preventDefault()
    mfactModal.dataset.active = 'true'
  })
  */

  mclose.addEventListener('click', function () {
    mfactModal.dataset.active = 'false'
  })

  var sprovLink = document.querySelector('#provee')
  var sprovModal = document.querySelector('#sprov-modal')
  var sprovClose = document.querySelector('#sprov-close')

  sprovLink.addEventListener('click', function (event) {
    event.preventDefault()
    sprovModal.dataset.active = 'true'
  })

  sprovClose.addEventListener('click', function () {
    sprovModal.dataset.active = 'false'
  })

  var spitsLink = document.querySelector('#spits')
  var spitsModal = document.querySelector('#spits-modal')
  var spitsClose = document.querySelector('#spits-close')

  spitsLink.addEventListener('click', function (event) {
    event.preventDefault()
    spitsModal.dataset.active = 'true'
  })

  spitsClose.addEventListener('click', function () {
    spitsModal.dataset.active = 'false'
  })

  var rsLink = document.querySelector('#rs')
  var rsModal = document.querySelector('#rs-modal')
  var rsClose = document.querySelector('#rs-close')

  rsLink.addEventListener('click', function (event) {
    event.preventDefault()
    rsModal.dataset.active = 'true'
  })

  rsClose.addEventListener('click', function () {
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

  /*!
   * Map
   */

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
        lat: 18.146370,
        lng: -94.420677
      },
      title: '407 Lemarroy',
      map: map,
      icon: icon
    })

    var marker2 = new google.maps.Marker({
      position: {
        lat: 17.926456,
        lng: -94.094460
      },
      title: '408 Calzadas 5',
      map: map,
      icon: icon
    })

    var marker3 = new google.maps.Marker({
      position: {
        lat: 18.078382,
        lng: -94.408410
      },
      title:  '411 Nanchital',
      map: map,
      icon: icon
    })

    var marker4 = new google.maps.Marker({
      position: {
        lat: 20.0559626,
        lng: -99.3030389
      },
      title: 'Bravo Grande',
      map: map,
      icon: icon
    })

    var marker5 = new google.maps.Marker({
      position: {
        lat: 18.366699,
        lng: -95.777482
      },
      title: '2486 Bravo Chica',
      map: map,
      icon: icon
    })

    var marker6 = new google.maps.Marker({
      position: {
        lat: 17.921193,
        lng: -94.930843
      },
      title: '3242 Oteapan 1',
      map: map,
      icon: icon
    })

    var marker7 = new google.maps.Marker({
      position: {
        lat: 18.808802,
        lng: -96.720839
      },
      title: '3676 Cuitláhuac',
      map: map,
      icon: icon
    })

    var marker8 = new google.maps.Marker({
      position: {
        lat: 18.155946,
        lng: -94.400511
      },
      title: '3863 Quevedo',
      map: map,
      icon: icon
    })

    var marker9 = new google.maps.Marker({
      position: {
        lat: 18.118937,
        lng: -94.446149
      },
      title: '3933 Calzadas 1',
      map: map,
      icon: icon
    })

    var marker10 = new google.maps.Marker({
      position: {
        lat: 17.956801,
        lng: -94.909119
      },
      title: '9836 Hojitas',
      map: map,
      icon: icon
    })

    var marker11 = new google.maps.Marker({
      position: {
        lat: 17.956324,
        lng: -94.909156
      },
      title: '10136 Sayula 2',
      map: map,
      icon: icon
    })

    var marker12 = new google.maps.Marker({
      position: {
        lat: 18.143261,
        lng: -94.520729
      },
      title: '10527 Oteapan 4',
      map: map,
      icon: icon
    })

    var marker13 = new google.maps.Marker({
      position: {
        lat: 17.899417,
        lng: -94.099172
      },
      title: '10828 Calzadas 3',
      map: map,
      icon: icon
    })

    var marker14 = new google.maps.Marker({
      position: {
        lat: 18.014668,
        lng: -94.393218
      },
      title: '11192 Ixhuatlán',
      map: map,
      icon: icon
    })

    var marker15 = new google.maps.Marker({
      position: {
        lat: 18.102644,
        lng: -94.456340
      },
      title: '11466 Calzadas  IV',
      map: map,
      icon: icon
    })

    var marker16 = new google.maps.Marker({
      position: {
        lat: 17.876890,
        lng: -94.963834
      },
      title: '12757 Sayula Centro',
      map: map,
      icon: icon
    })

    var marker17 = new google.maps.Marker({
      position: {
        lat: 17.940583,
        lng: -94.910962
      },
      title: '12765 La Florida',
      map: map,
      icon: icon
    })

    var marker18 = new google.maps.Marker({
      position: {
        lat: 18.086759,
        lng: -94.040271
      },
      title: '2472 La Venta',
      map: map,
      icon: icon
    })

    var marker19 = new google.maps.Marker({
      position: {
        lat: 17.982814,
        lng: -93.378033
      },
      title: '4092 Cárdenas',
      map: map,
      icon: icon
    })

    var marker20 = new google.maps.Marker({
      position: {
        lat: 17.985055,
        lng: -92.831070
      },
      title: '4689 Cima 1 (Dos Montes)',
      map: map,
      icon: icon
    })

    var marker20 = new google.maps.Marker({
      position: {
        lat: 18.025148,
        lng: -92.905745
      },
      title: '4979 Ciudad Industrial 1',
      map: map,
      icon: icon
    })

    var marker20 = new google.maps.Marker({
      position: {
        lat: 17.988809,
        lng: -92.949025
      },
      title: '5213 Kronos 1',
      map: map,
      icon: icon
    })

    var marker21 = new google.maps.Marker({
      position: {
        lat: 17.966665,
        lng: -92.927914
      },
      title: '5340 Ultra 1',
      map: map,
      icon: icon
    })

    var marker22 = new google.maps.Marker({
      position: {
        lat: 17.976976,
        lng: -92.973445
      },
      title: '5398 Ultra 2',
      map: map,
      icon: icon
    })

    var marker23 = new google.maps.Marker({
      position: {
        lat: 18.000200,
        lng: -92.938585
      },
      title: '5517 Promos 1',
      map: map,
      icon: icon
    })

    var marker24 = new google.maps.Marker({
      position: {
        lat: 18.019896,
        lng: -92.920640
      },
      title: '5802 Kronos 2 (Tierra Colorada)',
      map: map,
      icon: icon
    })

    var marker25 = new google.maps.Marker({
      position: {
        lat: 17.985140,
        lng: -93.003349
      },
      title: '6428 Promos 2 (Loma de Caballo)',
      map: map,
      icon: icon
    })

    var marker26 = new google.maps.Marker({
      position: {
        lat: 17.988653,
        lng: -92.966417
      },
      title: '6842 Villa Sam´s Tab. (Avitec)',
      map: map,
      icon: icon
    })

    var marker27 = new google.maps.Marker({
      position: {
        lat: 18.001616,
        lng: -92.927010
      },
      title: '6848 Casa Blanca',
      map: map,
      icon: icon
    })

    var marker28 = new google.maps.Marker({
      position: {
        lat: 17.978612,
        lng: -92.939064
      },
      title: '6850 Deportiva (Aurrerá)',
      map: map,
      icon: icon
    })

    var marker29 = new google.maps.Marker({
      position: {
        lat: 18.106587,
        lng: -92.865675
      },
      title: '7991 Ciudad Industrial 2',
      map: map,
      icon: icon
    })

    var marker30 = new google.maps.Marker({
      position: {
        lat: 17.981839,
        lng: -93.160396
      },
      title: '9790 Cima 2 (Boca Limón)',
      map: map,
      icon: icon
    })

    var marker31 = new google.maps.Marker({
      position: {
        lat: 17.981839,
        lng: -93.160396
      },
      title: '11337 Cima 3 (Miraflores)',
      map: map,
      icon: icon
    })

    var marker32 = new google.maps.Marker({
      position: {
        lat: 17.981839,
        lng: -93.160396
      },
      title: 'Cima 4',
      map: map,
      icon: icon
    })

    var marker33 = new google.maps.Marker({
      position: {
        lat: 18.410119,
        lng: -93.214154
      },
      title: 'Villa Paraiso',
      map: map,
      icon: icon
    })

    var marker34 = new google.maps.Marker({
      position: {
        lat: 19.636136,
        lng: -99.098706
      },
      title: '7250 Coacalco',
      map: map,
      icon: icon
    })

    var marker35 = new google.maps.Marker({
      position: {
        lat: 19.638710,
        lng: -99.167195
      },
      title: '7937 Tultitlán',
      map: map,
      icon: icon
    })

    var marker36 = new google.maps.Marker({
      position: {
        lat: 19.583413,
        lng: -98.920684
      },
      title: '9356 Tezoyuca',
      map: map,
      icon: icon
    })

    var marker37 = new google.maps.Marker({
      position: {
        lat: 19.686500,
        lng: -99.186693
      },
      title: '9517 Xhala',
      map: map,
      icon: icon
    })

    var marker38 = new google.maps.Marker({
      position: {
        lat: 19.422114,
        lng: -98.903158
      },
      title: '9998 San Vicente',
      map: map,
      icon: icon
    })

    var marker39 = new google.maps.Marker({
      position: {
        lat: 19.801854,
        lng: -99.865879,
      },
      title: '11325 Atlacomulco',
      map: map,
      icon: icon
    })

    var marker40 = new google.maps.Marker({
      position: {
        lat: 18.956598,
        lng: -99.591390,
      },
      title: '11348 Tenancingo',
      map: map,
      icon: icon
    })

    var marker41 = new google.maps.Marker({
      position: {
        lat: 19.820898,
        lng: -99.080342
      },
      title: 'Zumpango',
      map: map,
      icon: icon
    })

    var marker42 = new google.maps.Marker({
      position: {
        lat: 19.413411,
        lng: -98.917903
      },
      title: 'San Vicente 2',
      map: map,
      icon: icon
    })

    var marker43 = new google.maps.Marker({
      position: {
        lat: 19.831553,
        lng: -99.214419
      },
      title: 'Huehuetoca',
      map: map,
      icon: icon
    })

    var marker44 = new google.maps.Marker({
      position: {
        lat: 19.850841,
        lng: -98.975046
      },
      title: '9784 Tizayuca 1',
      map: map,
      icon: icon
    })

    var marker45 = new google.maps.Marker({
      position: {
        lat: 19.837011,
        lng: -98.955317
      },
      title: '10487 Tizayuca 2',
      map: map,
      icon: icon
    })

    var marker46 = new google.maps.Marker({
      position: {
        lat: 20.078683,
        lng: -99.308486
      },
      title: '11475 Tula Iturbe',
      map: map,
      icon: icon
    })

    var marker47 = new google.maps.Marker({
      position: {
        lat: 20.058461,
        lng: -99.291539
      },
      title: '11760 Tula el Llano',
      map: map,
      icon: icon
    })

    var marker48 = new google.maps.Marker({
      position: {
        lat: 19.629267,
        lng: -99.133546
      },
      title: '12111 Eje 3',
      map: map,
      icon: icon
    })

    var marker49 = new google.maps.Marker({
      position: {
        lat: 20.045532,
        lng: -99.340486
      },
      title: 'Tula Jalpa',
      map: map,
      icon: icon
    })

    var marker50 = new google.maps.Marker({
      position: {
        lat: 19.649497,
        lng: -99.077328
      },
      title: 'Presidentes',
      map: map,
      icon: icon
    })

    var marker51 = new google.maps.Marker({
      position: {
        lat: 19.692921,
        lng: -99.259075
      },
      title: 'Tepotzotlan',
      map: map,
      icon: icon
    })

    var marker52 = new google.maps.Marker({
      position: {
        lat: 19.692921,
        lng: -99.259075
      },
      title: 'Tepotzotlan',
      map: map,
      icon: icon
    })
  }

  var script = document.createElement('script')
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDkAzNwyVOO-eiYaKszYkUuAaQN3Y9ttfA&callback=initMap'
  document.querySelector('body').appendChild(script)

  var footerForm = document.querySelector('.footer__form')

  footerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var successModal = document.querySelector('#success-modal')
    var failureModal = document.querySelector('#failure-modal')

    var successClose = document.querySelector('#success-close')
    var failureClose = document.querySelector('#failure-close')

    var contactName = footerForm.contactName
    var contactEmail = footerForm.contactEmail
    var contactMessage = footerForm.contactMessage
    var contactSubject = footerForm.contactSubject

    successClose.addEventListener('click', function (event) {
      event.preventDefault()
      successModal.dataset.active = 'false'
    })

    failureClose.addEventListener('click', function (event) {
      event.preventDefault()
      failureModal.dataset.active = 'false'
    })

    var data = {
      name: contactName.value,
      email: contactEmail.value,
      message: contactMessage.value,
      subject: contactSubject.value
    }

    var clearForm = function () {
      contactName.value = ''
      contactEmail.value = ''
      contactMessage.value = ''
      contactSubject.value = ''
    }

    var success = function (res) {
      clearForm()
      successModal.dataset.active = 'true'
    }

    var error = function (err) {
      clearForm()
      failureModal.dataset.ative = 'true'
    }

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/contact',
      data: data,
      success: success,
      error: error,
      dataType: 'json'
    })
  })
})
