const pengunjung = [120,200,150,180,220,300,250]
let total = 0

//soal 1 = hitung total pengunjung selama 1 minggu

//cara 1 menggunakan for loop untuk akumulasi array
for(let i=0; i < pengunjung.length; i++){
    const pengunjungHariIni = pengunjung[i];
    total += pengunjungHariIni;
}
console.log(total)
//cara 2 menggunakan reduce untuk akumulasi array
const totalPengunjung = pengunjung.reduce((acc,curr)=> acc + curr, 0)
console.log(totalPengunjung)

//soal 2= hitung rata rata pengunjung harian
const rataRataPengunjung = totalPengunjung / pengunjung.length;
console.log(rataRataPengunjung.toFixed(0))

//soal 3 = hitung hari pengunjung terbanyak
const hariTerbanyak = pengunjung.reduce((acc,curr)=> acc > curr ? acc : curr ,0)
console.log(hariTerbanyak)

//soal 4 = hitung hari pengunjung paling sedikit
const hariSedikit = pengunjung.reduce((acc,curr)=> acc < curr ? acc : curr)
console.log(hariSedikit)

//soal 5 = pengunjung diatas rata rata
const pengunjungDiAtasRataRata = pengunjung.filter(pengunjung => pengunjung > rataRataPengunjung)
console.log(pengunjungDiAtasRataRata)

//soal 6 = diskip dulu

//soal 7 = total pengunjung hari akhir pekan
const pengunjungAkhirPekan = pengunjung.reduce((acc,curr,index)=> {
    if(index === 5 || index === 6){
        return acc + curr;
    } return acc;
},0)
console.log(pengunjungAkhirPekan)