const btnCreate = document.getElementById("btn-create")
const btnRemove = document.getElementById("btn-remove")
const containerBtn = document.getElementById('container-btn')

btnCreate.addEventListener('click', () => {
    const dinamisButton = document.createElement('button')
    dinamisButton.textContent = "Dinamis Button"
    dinamisButton.classList.add('btn-dinamis')

    containerBtn.appendChild(dinamisButton)
})

btnRemove.addEventListener('click', () => {
    const buttons = containerBtn.querySelectorAll('button')
    console.log(buttons )
    buttons.forEach((button)=>{
        button.remove()
    })
})