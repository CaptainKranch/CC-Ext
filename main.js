let links = [];
let tags = [];

const inputTag = document.getElementById('input-name')
const inputLink = document.getElementById('input-link')
const newLink = document.getElementById('link-list')
const saveBtn = document.getElementById('save-btn')
const tabBtn = document.getElementById('tab-btn')
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

deleteBtn.addEventListener('dblclick', function() {
  localStorage.clear()
  links = []
  tags = []
  render(links, tags)
})
