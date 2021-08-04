let links = [];
let names = [];

const inputName = document.getElementById('input-name')
const inputLink = document.getElementById('input-link')
const newJira = document.getElementById('jira-links')
const newOther = document.getElementById('otros-links')
const saveBtn = document.getElementById('save-btn')
const deleteBtn = document.getElementById('delete-btn')
const linksFromLocalStorage = JSON.parse(localStorage.getItem('links'))
const namFromLocalStorage = JSON.parse(localStorage.getItem('names'))

function render(links, names) {
  let listItems = ''
  const verification = ['Jira','jira']
  if (verification.includes(names.slice(-1)[0])) {
    for (let i = 0; i < links.length; i++) {
      listItems += `
          <li>
            <a target="_blank" href = "${links[i]}">
              ${links[i]}
            </a>
          </li>
        `
    }
    newJira.innerHTML = listItems //debo de poner un condicional que verifique en el dicc
  } else {
    for (let i = 0; i < links.length; i++) {
      listItems += `
            <li>
              <a target="_blank" href = "${links[i]}">
                ${links[i]}
              </a>
            </li>
          `
    }
    newOther.innerHTML = listItems
  }
}

if (linksFromLocalStorage) {
    links = linksFromLocalStorage
    render(links, names)
}

saveBtn.addEventListener('click', function() {
  links.push(inputLink.value)
  inputLink.value = ''
  names.push(inputName.value)
  names.value = ''
  render(links, names)
})

deleteBtn.addEventListener('click', function() {
  localStorage.clear()
  links = []
  names = []
  render(links, names)
})
