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
var bolsaModal = document.querySelector('#bolsa-modal')

bolsaLink.addEventListener('click', function (event) {
  console.log('click')
  event.preventDefault()
  bolsaModal.dataset.active = 'true'
})

bolsaModal.addEventListener('click', function () {
  bolsaModal.dataset.active = 'false'
})
