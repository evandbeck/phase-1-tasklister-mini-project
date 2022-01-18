document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    handleToDo(e.target["new-task-description"].value)
  })
})

function handleToDo(todo) {
  let p = document.createElement('p')
  p.innerText = todo
  let tasks = document.querySelector('#tasks')
  tasks.appendChild(p)
}