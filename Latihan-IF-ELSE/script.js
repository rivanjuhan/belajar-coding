const scoreInputElement1 = document.getElementById('score-input1')
const scoreInputElement2 = document.getElementById('score-input2')
const scoreInputElement3 = document.getElementById('score-input3')
const scoreInputElement4 = document.getElementById('score-input4')
const expOrgInputElement = document.getElementById('exp-org-input')
const btnSubmitScore = document.getElementById('btn-submit-score')
const scoreText = document.getElementById('final-score')

/**
 *  && (AND) = dua kondisi harus bernilai TRUE
 *  || (OR) = salah satu kondisi harus bernilai TRUE
 */

btnSubmitScore.addEventListener('click', function(){
    const scoreValue1 = parseInt(scoreInputElement1.value)
    const scoreValue2 = parseInt(scoreInputElement2.value)
    const scoreValue3 = parseInt(scoreInputElement3.value)
    const scoreValue4 = parseInt(scoreInputElement4.value)
   
    const expOrgValue = parseInt(expOrgInputElement.value)
    const averageScore = (scoreValue1 + scoreValue2 + scoreValue3 + scoreValue4) / 4
    console.log ('Rata-rata nilai =',averageScore)

    if( averageScore >= 75){
        console.log('masuk kriteria')
        if(expOrgValue >=2){
            console.log('bisa dapat beasiswa')
        }else if (expOrgValue <=2){
            console.log('tambah pengalaman')
        }else {
            console.log('tidak dapat beasiswa')
        }
    }else{
        scoreText.textContent = "tidak dapat"
    }
  



    // (SOAL SEBELUMNYA)
    // if(scoreValue > 85){
    //     scoreText.textContent = 'A'
    // } else if(scoreValue >=70 && scoreValue<= 85){
    //     scoreText.textContent ='B'
    // } else if(scoreValue >=55 && scoreValue <= 69){
    //     scoreText.textContent ='C'
    // } else if(scoreValue >=40 && scoreValue <= 54){
    //     scoreText.textContent ='D'
    // } else {
    //     scoreText.textContent = 'F'
    // }
    
})