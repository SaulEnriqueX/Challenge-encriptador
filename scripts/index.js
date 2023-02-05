const d = document
const $outputBox = d.getElementById('output-box')
const $inputBox = d.getElementById('to-encrypt')
const $encBtn = d.getElementById('enc-btn')
const $decBtn = d.getElementById('dec-btn')
const $copyBtn = d.createElement('BUTTON')

$copyBtn.setAttribute('type', 'button')
$copyBtn.classList.add('btn', 'btn-copiar')
$copyBtn.textContent = 'Copiar'

const ENC_KEYS = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat',
}

const DEC_KEYS = {
  ai: 'a',
  enter: 'e',
  imes: 'i',
  ober: 'o',
  ufat: 'u',
}

$encBtn.addEventListener('click', () => {
  const DECRYPTED_MESSAGE = encMessage($inputBox.value)
  const $p = d.createElement('P')
  $p.textContent = DECRYPTED_MESSAGE
  $p.classList.add('output')
  $p.id = 'output'
  $outputBox.classList.add('processed')
  $outputBox.innerHTML = ''
  $outputBox.appendChild($p)
  $outputBox.appendChild($copyBtn)
})

$decBtn.addEventListener('click', () => {
  const ENCRYPTED_MESSAGE = decMessage($inputBox.value)
  const $p = d.createElement('P')
  $p.textContent = ENCRYPTED_MESSAGE
  $p.classList.add('output')
  $p.id = 'output'
  $outputBox.classList.add('processed')
  $outputBox.innerHTML = ''
  $outputBox.appendChild($p)
  $outputBox.appendChild($copyBtn)
})

$copyBtn.addEventListener('click', () => copyResult())

function copyResult() {
  const $output = d.getElementById('output')
  navigator.clipboard.writeText($output.textContent)
}

function encMessage (message) {
  let newMessage = message.replace(/[aeiou]/g,(match) => ENC_KEYS[match])
  return newMessage
}

function decMessage (message) {
  let newMessage = message.replace(/(ai|enter|imes|ober|ufat)/g,(match) => DEC_KEYS[match])
  return newMessage
}
