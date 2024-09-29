const inputElement1 = document.getElementById('input1')
const inputElement2 = document.getElementById('input2')
const divElement = document.getElementById('hasil')
const btnElement = document.getElementById('submit')

btnElement.addEventListener('click',function(){
    
    const angkaPertama =inputElement1.value
    console.log("angkapertama =>",angkaPertama)
    const angkakedua =inputElement2.value
    console.log("angkakedua =>",angkakedua)
    const input = parseInt(angkaPertama) + parseInt(angkakedua)

    divElement.textContent=input
    
    
})

