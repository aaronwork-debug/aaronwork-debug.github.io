const form = document.querySelector('#my-form')
const passwordEl = document.querySelector('[name="password"]')
const emailEl = document.querySelector('[name="email"]')

const magicPassword = 'password'
const magicEmail = 'email@email.com'

function addTextToForm(text, indexName) {
  const el = document.createElement('p')
  el.innerText = text
  if (indexName) el.id = indexName
  form.appendChild(el)
}

form.addEventListener('submit', e => {
  e.preventDefault()
  if (passwordEl.value === magicPassword) {
    addTextToForm('パスワードは重複してます')
    return
  }
  if (emailEl.value === magicEmail) {
    addTextToForm('メールアドは重複してます')
    return
  }
  addTextToForm('Success!', 'success')
})