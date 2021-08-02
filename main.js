let links = [];
const dictonary = {Confluence:0, Jira:1, Tools:2, Drive:3}
const inputName = document.getElementById('input-name')
const inputLink = document.getElementById('input-link')
const saveBtn = document.getElementById('save-btn')
const deleteBtn = document.getElementById('delete-btn')
const linkssFromLocalStorage = JSON.parse(localStorage.getItem('links'))
function render(links) {
  let listItems = ''
  for (let i = 0; i < links.length; i++) {
    listItems += `
      <li>
        <a target="_blank" href = "${links[i]}">
          ${links[i]}
        </a>
      </li>
    `
  }
  ulEl.innerHTML = listItems //debo de poner un condicional que verifique en el dicc
}

if (leadsFromLocalStorage) {
    links = leadsFromLocalStorage
    render(links)
}
