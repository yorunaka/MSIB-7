/**
 *
 * =================
 * calculate string
 * =================
 *
 * Buatlah sebuah fungsi yang akan menerima sebuah string berupa string perhitungan matematika ( 1 + 2 + 3 + 4)
 * Fungsi ini hanya dapat menerima aritmatika dengan kombinasi + dan - atau kombinasi * dan -
 *
 *
 * Berikanlah output hasil perhitungan aritmatika yang sudah dibuat
 */

function giveMeResult(string) {
    res = Number(string[0])
    for(let i = 0; i < string.length - 1; i++){
        if(string[i] === '+'){
            res += Number(string[i + 1])
        }
        if(string[i] === '-'){
            res -= Number(string[i + 1])
        }
        if(string[i] === '*'){
            res *= Number(string[i + 1])
        }
        if(string[i] === '/'){
            res /= Number(string[i + 1])
        }
    }
    return res
}

console.log(giveMeResult('1+1+1-1+1')) // 3
console.log(giveMeResult('1*2*3/2')) // 3