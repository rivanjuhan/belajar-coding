    // const btnElement = document.getElementById('btn')
// btnElement.addEventListener('click',triggerbtn)

// function triggerbtn(){
//     btnElement.innerHTML = "ko berubah"
// }

const countElement = document.getElementById('count')

const btnMengurangi = document.getElementById('kurang-angka')
const btnMenambahi = document.getElementById('tambah-angka')

btnMenambahi.addEventListener('click',function(){
    //ambil data saat ini//
    let currentNumber = countElement.textContent
    //proses kalkulasi data//
    currentNumber = parseInt(currentNumber) +3
    //ubah data yang sudah dikalkulasi//
    countElement.textContent = currentNumber 

    
})
btnMengurangi.addEventListener('click',function(){
    let currentNumber = countElement.textContent

    currentNumber = parseInt(currentNumber) -2

    countElement.textContent = currentNumber
})