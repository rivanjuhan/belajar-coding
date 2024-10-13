const jumlahBarang = document.getElementById('inputBarang')//buatan sendiri
const hargaBarang = document.getElementById('masukanHarga')
const divElement = document.getElementById('total')
const btnElement = document.getElementById('hasil')

btnElement.addEventListener('click', function() {
    const masukanBarang = jumlahBarang.value
    console.log("jumlah barang ==>", masukanBarang)
    const beriHarga = hargaBarang.value
    console.log('harga barang ==>', beriHarga)
    const input = parseInt(masukanBarang) * parseInt(beriHarga)

    divElement.textContent=' Jumlah Harga ' +  input
})