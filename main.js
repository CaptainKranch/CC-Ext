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
            <button  onClick = 'clearBtn()'><i  class= 'fa fa-times'></i></button>
          </li>
        `
  }
  newLink.innerHTML = listItems
}

function updateData(linksFromLocalStorage, tagsFromLocalStorage){
  if (linksFromLocalStorage && tagsFromLocalStorage ) {
    links = linksFromLocalStorage
    tags = tagsFromLocalStorage
    render(links, tags)
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

deleteBtn.addEventListener('dblclick', function() {
  localStorage.clear()
  links = []
  tags = []
  render(links, tags)
})

function clearBtn() {
  let removeTag = inputTag.value
  // console.log(tagsFromLocalStorage)
  // console.log(linksFromLocalStorage)
  console.log(tags)
  console.log(links)
  if (tagsFromLocalStorage.includes(removeTag)){
    const indexTags = tagsFromLocalStorage.indexOf(removeTag)
    tagsFromLocalStorage.splice(indexTags, 1)
    linksFromLocalStorage.splice(indexTags, 1)
    // tags = tags.splice(indexTags, 1)
    // links = links.splice(indexTags, 1)
    // console.log(tagsFromLocalStorage)
    // console.log(linksFromLocalStorage)
    // console.log(tags)
    // console.log(links)
    render(links, tags)
  }
}
