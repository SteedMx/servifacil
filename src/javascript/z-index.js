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

