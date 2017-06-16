$(document).ready(function () {
  // Needed by IE and Edge. Creates a 1px div for 1ms to jolt the browser into displaying the new DOM
  function cleanDisplay() {
      var c = document.createElement('div');
      c.innerHTML = 'x';
      c.style.visibility = 'hidden';
      c.style.height = '1px';
      document.body.insertBefore(c, document.body.firstChild);
      window.setTimeout(function() {document.body.removeChild(c)}, 1);
  }

  var misionLink = document.querySelector('#mvv-link')
  var misionModal = document.querySelector('#mvv-modal')
  var misionClose = document.querySelector('#mvv-close')

  var paramSent = getParameterByName('paramSent');

  if (paramSent) {
    console.log('Value of paramSent = ', paramSent);
    $(".se-pre-con").addClass("hidden");
    $(".se-pre-sen").removeClass("hidden");
    $(".se-pre-sen").fadeOut("slow");;
  } else {
    $(".se-pre-con").fadeOut("slow");;
  }

  $('#navbar__ubicanos').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 75
        }, 1000);
        return false;
      }
    }
  });

  $('#navbar__nosotros').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 84
        }, 1000);
        return false;
      }
    }
  });

  $('#navbar__servicios').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 84
        }, 1000);
        return false;
      }
    }
  });

  $('#navbar__contacto').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 75
        }, 1000);
        return false;
      }
    }
  });

  $(window).scroll(function () {

    var windscroll = $(window).scrollTop();

    if (windscroll >= 50) {
      //$('.nav').css('background-color','#c33');

      $('.anchor').each(function(i) {
          if ($(this).position().top <= windscroll + 200) {
              $('.nav a.active').removeClass('active');
              $('.nav a').eq(i).addClass('active');
          }
      });
    } else {
      //$('.nav').css('background-color','transparent');
      $('.nav a.active').removeClass('active');
      $('.nav a:first').addClass('active');
    }
  }).scroll();

  misionLink.addEventListener('click', function (event) {
    event.preventDefault()
    misionModal.dataset.active = 'true'
    cleanDisplay();
  })

  misionClose.addEventListener('click', function () {
    misionModal.dataset.active = 'false'
    cleanDisplay();
  })

  var historyLink = document.querySelector('#h-link')
  var historyModal = document.querySelector('#h-modal')
  var historyClose = document.querySelector('#h-close')

  historyLink.addEventListener('click', function (event) {
    event.preventDefault()
    historyModal.dataset.active = 'true'
    cleanDisplay();
  })

  historyClose.addEventListener('click', function () {
    historyModal.dataset.active = 'false'
    cleanDisplay();
  })

  var qsLink = document.querySelector('#qs-link')
  var qsModal = document.querySelector('#qs-modal')
  var qsClose = document.querySelector('#qs-close')

  qsLink.addEventListener('click', function (event) {
    event.preventDefault()
    qsModal.dataset.active = 'true'
    cleanDisplay();
  })

  qsClose.addEventListener('click', function () {
    qsModal.dataset.active = 'false'
    cleanDisplay();
  })

  var gasLink = document.querySelector('#gas')
  var gasModal = document.querySelector('#ser-gas')
  var gasClose = document.querySelector('#ser-close')

  gasLink.addEventListener('click', function (event) {
    event.preventDefault()
    gasModal.dataset.active = 'true'
    cleanDisplay();
  })

  gasClose.addEventListener('click', function () {
    gasModal.dataset.active = 'false'
    cleanDisplay();
  })

  var factLink = document.querySelector('#fact')
  var factModal = document.querySelector('#ser-fact')
  var factClose = document.querySelector('#ser-fact-close')

  factLink.addEventListener('click', function (event) {
    event.preventDefault()
    factModal.dataset.active = 'true'
    cleanDisplay();
  })

  factClose.addEventListener('click', function () {
    factModal.dataset.active = 'false'
    cleanDisplay();
  })

  var limpLink = document.querySelector('#limp')
  var limpModal = document.querySelector('#ser-limp')
  var limpClose = document.querySelector('#ser-limp-close')

  limpLink.addEventListener('click', function (event) {
    event.preventDefault()
    limpModal.dataset.active = 'true'
    cleanDisplay();
  })

  limpClose.addEventListener('click', function () {
    console.log('some shit')
    limpModal.dataset.active = 'false'
    cleanDisplay();
  })

  var mgasLink = document.querySelector('#know')
  var mgasModal = document.querySelector('#mgas-modal')
  var close = document.querySelector('#close')

  mgasLink.addEventListener('click', function (event) {
    event.preventDefault()
    /*
    setTimeout(function () {
      initMap()
    }, 1000)
    */
    mgasModal.dataset.active = 'true'
    cleanDisplay();
  })

  close.addEventListener('click', function () {
    mgasModal.dataset.active = 'false'
    cleanDisplay();
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
    cleanDisplay();
  })

  var sprovLink = document.querySelector('#provee')
  var sprovModal = document.querySelector('#sprov-modal')
  var sprovClose = document.querySelector('#sprov-close')

  sprovLink.addEventListener('click', function (event) {
    event.preventDefault()
    sprovModal.dataset.active = 'true'
    cleanDisplay();
  })

  sprovClose.addEventListener('click', function () {
    sprovModal.dataset.active = 'false'
    cleanDisplay();
  })

  var spitsLink = document.querySelector('#spits')
  var spitsModal = document.querySelector('#spits-modal')
  var spitsClose = document.querySelector('#spits-close')

  spitsLink.addEventListener('click', function (event) {
    event.preventDefault()
    spitsModal.dataset.active = 'true'
    cleanDisplay();
  })

  spitsClose.addEventListener('click', function () {
    spitsModal.dataset.active = 'false'
    cleanDisplay();
  })

  var rsLink = document.querySelector('#rs')
  var rsModal = document.querySelector('#rs-modal')
  var rsClose = document.querySelector('#rs-close')

  rsLink.addEventListener('click', function (event) {
    event.preventDefault()
    rsModal.dataset.active = 'true'
    cleanDisplay();
  })

  rsClose.addEventListener('click', function () {
    rsModal.dataset.active = 'false'
    cleanDisplay();
  })

  var bolsaLink = document.querySelector('#bolsa')
  var bolsaClose = document.querySelector('#bolsa-close')
  var bolsaModal = document.querySelector('#bolsa-modal')

  bolsaLink.addEventListener('click', function (event) {
    console.log('click')
    event.preventDefault()
    bolsaModal.dataset.active = 'true'
    cleanDisplay();
  })

  bolsaClose.addEventListener('click', function () {
    bolsaModal.dataset.active = 'false'
    cleanDisplay();
  })

  /*!
   * Map
   */

  /*
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
        lat: 18.366101,
        lng: -95.776162
      },
      title: '1013 Bravo Grande',
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
        lat: 17.999781,
        lng: -94.921667
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
        lat: 17.926828,
        lng: -93.143844
      },
      title: '9790 Cima 2 (Boca Limón)',
      map: map,
      icon: icon
    })

    var marker31 = new google.maps.Marker({
      position: {
        lat: 17.900066,
        lng: -92.757502
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
      title: '13022 Cima 4',
      map: map,
      icon: icon
    })

    var marker33 = new google.maps.Marker({
      position: {
        lat: 18.410119,
        lng: -93.214154
      },
      title: '13205 Villa Paraiso',
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
      title: '12432 Zumpango',
      map: map,
      icon: icon
    })

    var marker42 = new google.maps.Marker({
      position: {
        lat: 19.413411,
        lng: -98.917903
      },
      title: '12980 San Vicente 2',
      map: map,
      icon: icon
    })

    var marker43 = new google.maps.Marker({
      position: {
        lat: 19.831553,
        lng: -99.214419
      },
      title: '12990 Huehuetoca',
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
      title: '12433 Tula Jalpa',
      map: map,
      icon: icon
    })

    var marker50 = new google.maps.Marker({
      position: {
        lat: 19.649497,
        lng: -99.077328
      },
      title: '12513 Presidentes',
      map: map,
      icon: icon
    })

    var marker51 = new google.maps.Marker({
      position: {
        lat: 19.692921,
        lng: -99.259075
      },
      title: '12791 Tepotzotlan',
      map: map,
      icon: icon
    })

    var marker52 = new google.maps.Marker({
      position: {
        lat: 19.372179,
        lng: -98.946245
      },
      title: '13135 Los Reyes',
      map: map,
      icon: icon
    })

    var marker53 = new google.maps.Marker({
      position: {
        lat: 19.309121,
        lng: -99.586966
      },
      title: '13193 Tototelpec',
      map: map,
      icon: icon
    })

    var marker54 = new google.maps.Marker({
      position: {
        lat: 19.686475,
        lng: -99.186622
      },
      title: '9517 Xhala',
      map: map,
      icon: icon
    })

    var marker55 = new google.maps.Marker({
      position: {
        lat: 18.145524,
        lng: -94.472091
      },
      title: '8971 Oteapan 2',
      map: map,
      icon: icon
    })

    var marker56 = new google.maps.Marker({
      position: {
        lat: 18.140178,
        lng: -94.518243
      },
      title: '8221 Oteapan 3 (Cereso 1)',
      map: map,
      icon: icon
    })

    var marker57 = new google.maps.Marker({
      position: {
        lat: 18.151662,
        lng: -94.446736
      },
      title: '7967 Calzadas 2 (Malecón)',
      map: map,
      icon: icon
    })

    var marker58 = new google.maps.Marker({
      position: {
        lat: 18.151667,
        lng: -94.395894
      },
      title: '7380 Allende (Trabajadores Mexicanos)',
      map: map,
      icon: icon
    })

    var marker59 = new google.maps.Marker({
      position: {
        lat: 19.155819,
        lng: -96.111081
      },
      title: '6873 Virginia (Walmart-Ver)',
      map: map,
      icon: icon
    })

    var marker60 = new google.maps.Marker({
      position: {
        lat: 17.887961,
        lng: -94.101823
      },
      title: '6693 Calzadas 6 (La Sabana)',
      map: map,
      icon: icon
    })

    var marker61 = new google.maps.Marker({
      position: {
        lat: 18.012075,
        lng: -94.547788
      },
      title: '6139 Paquital 1',
      map: map,
      icon: icon
    })

    var marker62 = new google.maps.Marker({
      position: {
        lat: 18.370942,
        lng: -95.803817
      },
      title: '5852 Calzadas 9',
      map: map,
      icon: icon
    })

    var marker63 = new google.maps.Marker({
      position: {
        lat: 17.990117,
        lng: -94.562601
      },
      title: '5843 Paquital 2',
      map: map,
      icon: icon
    })

    var marker64 = new google.maps.Marker({
      position: {
        lat: 18.125986,
        lng: -94.435250
      },
      title: '5624 Villa-Coatza',
      map: map,
      icon: icon
    })

    var marker65 = new google.maps.Marker({
      position: {
        lat: 19.399767,
        lng: -96.360356
      },
      title: '5402 Calzadas 7 (Ursulo Galván)',
      map: map,
      icon: icon
    })

    var marker66 = new google.maps.Marker({
      position: {
        lat: 18.372281,
        lng: -95.754802
      },
      title: '5291 Calzadas 8',
      map: map,
      icon: icon
    })

    var marker67 = new google.maps.Marker({
      position: {
        lat: 17.921334,
        lng: -94.930870
      },
      title: '4982 Sayula 1',
      map: map,
      icon: icon
    })

    var marker68 = new google.maps.Marker({
      position: {
        lat: 17.992305,
        lng: -94.568003
      },
      title: '4094 Mina',
      map: map,
      icon: icon
    })

    var marker69 = new google.maps.Marker({
      position: {
        lat: 17.960074,
        lng: -94.914393
      },
      title: '4093 Acayucan',
      map: map,
      icon: icon
    })
  }

  var script = document.createElement('script')
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDkAzNwyVOO-eiYaKszYkUuAaQN3Y9ttfA&callback=initMap'
  document.querySelector('body').appendChild(script)

  */

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
      url: 'http://steed.mx:8082/contact',
      data: data,
      success: success,
      error: error,
      dataType: 'json'
    })
  })

  /*
  window.onclick = function(event) {
    if (event.target == rsModal) {
      rsModal.dataset.active = 'false'
    } else if (event.target == qsModal) {
      qsModal.dataset.active = 'false'
    } else if (event.target == limpModal) {
      limpModal.dataset.active = 'false'
    } else if (event.target == valesModal) {
      valesModal.dataset.active = 'false'
    } else if (event.target == mfactModal) {
      mfactModal.dataset.active = 'false'
    } else if (event.target == failureModal) {
      failureModal.dataset.active = 'false'
    } else if (event.target == historyModal) {
      historyModal.dataset.active = 'false'
    } else if (event.target == bolsaModal) {
      bolsaModal.dataset.active = 'false'
    } else if (event.target == mgasModal) {
      mgasModal.dataset.active = 'false'
    } else if (event.target == gasModal) {
      gasModal.dataset.active = 'false'
    } else if (event.target == sprovModal) {
      sprovModal.dataset.active = 'false'
    } else if (event.target == factModal) {
      factModal.dataset.active = 'false'
    } else if (event.target == successModal) {
      successModal.dataset.active = 'false'
    } else if (event.target == misionModal) {
      misionModal.dataset.active = 'false'
    }
  }*/

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

  var paramUs = getParameterByName('paramUs');
  var paramUbi = getParameterByName('paramUbi');
  var paramServ = getParameterByName('paramServ');
  var paramCont = getParameterByName('paramCont');
  var paramSent = getParameterByName('paramSent');

  setTimeout(function(){
    if (paramUs) {
      $('#navbar__nosotros').click();
    } else if (paramUbi) {
      $('#navbar__ubicanos').click();
    } else if (paramServ) {
      $('#navbar__servicios').click();
    } else if (paramCont) {
      $('#navbar__contacto').click();
    }
  }, 1500);

})
