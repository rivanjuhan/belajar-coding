const inputElement = document.getElementById('input')
const btnInsert = document.getElementById('btn-insert')
const listElemet = document.getElementById('list')

let todos = []


btnInsert.addEventListener('click', function(){
    const inputValue = inputElement.value
    todos.push  (inputValue)
    console.log(todos)

    inputElement.value = ''
    const item = document.createElement('li')
    item.textContent = inputValue

    listElemet.appendChild(item)
})