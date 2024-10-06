// Vincent Louis Fernando
// RCJ03S016

// Diberikan sebuah function yang menerima satu parameter berupa string. Function tersebut mengembalikan nilai
// true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
// Jika tidak ditemukan sama sekali, kembalikan nilai false

function threeStepsAB (text){
    let i = 0
    let rangeA = -1
    let rangeB = -1

    for(i = 0; i < text.length; i++){
        let char = text[i]
        if(char === 'a'){
            rangeA = i
        } 
        if (char === 'b'){
            rangeB = i
        }
        if (rangeA !== -1 && rangeB !== -1 && Math.abs(rangeB - rangeA) === 4){
            return true
        }
    }
    
    return false
}

console.log(threeStepsAB('lane borrowed'))
// true
console.log(threeStepsAB('i am sick'))
// false
console.log(threeStepsAB('you are boring'))
// true
console.log(threeStepsAB('barbarian'))
// true
console.log(threeStepsAB('bacon and meat'))
// false