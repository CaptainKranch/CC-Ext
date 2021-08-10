let links = [];
let tags = [];

const inputTag = document.getElementById('input-name')
const inputLink = document.getElementById('input-link')
const newLink = document.getElementById('link-list')
const saveBtn = document.getElementById('save-btn')
const tabBtn = document.getElementById('tab-btn')
const deleteOneBtn = document.getElementById('delete-one-element-btn')
const deleteBtn = document.getElementById('delete-btn')
const linksFromLocalStorage = JSON.parse(localStorage.getItem('links'))
const tagsFromLocalStorage = JSON.parse(localStorage.getItem('tags'))


function render(links, tags) {
  let listItems = ''
  for (let i = 0; i < links.length; i++) {
    listItems += `
          <li>
            <a target="_blank" href = "${links[i]}">
              ${tags[i]}
            </a>
          </li>
        `
  }
  newLink.innerHTML = listItems
}

function updateData(linksFromLocalStorage, tagsFromLocalStorage){
    localStorage.setItem('tags', JSON.stringify(tagsFromLocalStorage))
    localStorage.setItem('links', JSON.stringify(linksFromLocalStorage))
    render(links, tags)
}

function clearBtn() {
  let removeTag = inputTag.value
  if (tagsFromLocalStorage.includes(removeTag)){
    const index = tagsFromLocalStorage.indexOf(removeTag)
    usu = tagsFromLocalStorage.splice(index, 1)
    uwu = linksFromLocalStorage.splice(index, 1)
    inputTag.value = ''
    updateData(linksFromLocalStorage, tagsFromLocalStorage)
  }
}

if (linksFromLocalStorage && tagsFromLocalStorage ) {
  links = linksFromLocalStorage
  tags = tagsFromLocalStorage
  render(links, tags)
}

saveBtn.addEventListener('click', function() {
  links.push(inputLink.value)
  inputLink.value = ''
  localStorage.setItem('links', JSON.stringify(links))
  tags.push(inputTag.value)
  inputTag.value = ''
  localStorage.setItem('tags', JSON.stringify(tags))
  render(links, tags)
})

deleteOneBtn.addEventListener('click', function clearBtn() {
  let removeTag = inputTag.value
  if (tagsFromLocalStorage.includes(removeTag)){
    const index = tagsFromLocalStorage.indexOf(removeTag)
    usu = tagsFromLocalStorage.splice(index, 1)
    uwu = linksFromLocalStorage.splice(index, 1)
    inputTag.value = ''
    updateData(linksFromLocalStorage, tagsFromLocalStorage)
  }
})

deleteBtn.addEventListener('dblclick', function() {
  localStorage.clear()
  links = []
  tags = []
  render(links, tags)
})
