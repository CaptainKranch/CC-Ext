let links = [];
let names = [];

const inputTag = document.getElementById('input-name')
const inputLink = document.getElementById('input-link')
const newLink = document.getElementById('link-list')
const saveBtn = document.getElementById('save-btn')
const deleteBtn = document.getElementById('delete-btn')
const linksFromLocalStorage = JSON.parse(localStorage.getItem('links'))
const namFromLocalStorage = JSON.parse(localStorage.getItem('names'))


function render(links, names) {
  let listItems = ''
  for (let i = 0; i < links.length; i++) {
    listItems += `
          <li>
            <a target="_blank" href = "${links[i]}">
              ${names[i]}
            </a>
          </li>
        `
  }
  newLink.innerHTML = listItems
}

if (linksFromLocalStorage) {
  links = linksFromLocalStorage
  render(links)
}

if (namFromLocalStorage) {
  names = namFromLocalStorage
  render(names)
}

saveBtn.addEventListener('click', function() {
  links.push(inputLink.value)
  inputLink.value = ''
  names.push(inputTag.value)
  names.value = ''
  render(links, names)
})

deleteBtn.addEventListener('dblclick', function() {
  localStorage.clear()
  links = []
  names = []
  render(links, names)
})
