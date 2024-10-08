// Buatlah function yang bisa mengurutkan huruf yang ada pada sebuah text, dari A-Z (Ascending).
// Note: Jika sudah berhasil menyelesaikan masalah ini menggunakan built-in function .sort(), coba juga
// menggunakan algoritma sortingmu sendiri

function urutHuruf(text){
    return (text.split('').sort().join(''));
}

// // algoritma sorting sendiri
function urutHuruf2(text){
    let temp = ''
    text = text.split('')
    let result = ''
    let indexnow = 0
    let indexnext = 0

    for (let z = 0; z < text.length - 1; z++){
        for (let i = 0; i < text.length - 1; i++){
            for (let j = 0; j < text.length - i - 1; j++){
                indexnow = text[j]
                indexnext = text[j + 1]
                if (indexnow > indexnext){
                    temp = text[j]
                    text[i] = text[j + 1]
                    text[j + 1] = temp
                    result += text[i]
                }
            }
        }

    }
    return result;
    
}

console.log(urutHuruf('halo')); // 'ehllo'
console.log(urutHuruf('qwerty')); // 'eqrtw'
console.log(urutHuruf('qwertyuiopasdfghjklzxcvbnm')); // 'abcdefghijklmnopqrstuvwxyz'
console.log('\n')
console.log(urutHuruf2('halo')); // 'ehllo'
console.log(urutHuruf2('qwerty')); // 'eqrtw'
console.log(urutHuruf2('qwertyuiopasdfghjklzxcvbnm')); // 'abcdefghijklmnopqrstuvwxyz'