const btnCalculate = document.getElementById('btn-calculate')
const inputDate = document.getElementById('input-date')
const inputQuantity = document.getElementById('input-quantity')
const inputPrice = document.getElementById('input-price')
const resultElement = document.getElementById('result')

btnCalculate.addEventListener('click',() => {
    const date = inputDate.value
    const currentDate = new Date(date).getDate()
    console.log(currentDate)
    const price = inputPrice.value
    let discount = 0;
    let total = price;
    let quantity = inputQuantity.value

    if(currentDate % 2 === 0){
         discount = price * 0.3
        console.log('Genap')
    } else {
        discount = price * 0.2
        console.log('Ganjil')
    }

    if(quantity >= 20 && quantity % 20 === 0){
        discount += total * 0.15
    } else if (quantity >= 10 && quantity % 10 === 0){
        discount += total * 0.10
    } else if (quantity >= 5 && quantity % 5 === 0){
        discount += total * 0.05
    }
    total = price - discount
    // resultElement.textContent = `Total: ${total}`
    resultElement.innerHTML = `
        <p>Harga Awal: Rp ${price}</p>
        <p>Diskon Tanggal: Rp ${date}</p>
        <p>Total Kuantitas: Rp ${quantity}</p>
        <p>Total Diskon: Rp ${discount}</p>
        <p>Total Pembayaran: Rp ${total}</p>
    `
    
})
