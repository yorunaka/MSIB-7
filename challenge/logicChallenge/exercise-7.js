/*
=========
AYO JOGET
=========

Terdapat permainan ayo joget , dimana user memasukan input berupa arah sesuai dengan exercise yang ada,
untuk setiap arah pada userInput yang sesuai dengan exercise, maka score akan bertambah 10. Program juga akan menampilkan kategori berdasarkan persentase:
100 % - Perfect
80 % - 99% - Great
60 % - 79 % - Good
0 - 59 % - Bad
notes: Persentase didapat dari poin dibagi total poin yang bisa didapat dikali 100, pembulatan kebawah 

EXAMPLE:
var exercise = '<>^v>>>'
var userInput = '<>^^>><'

terdapat 2 output yang tidak sesuai, dan 5 output yang sesuai
maka program akan menampilkan:

Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good

RULES:
- DILARANG MENGGUNAKAN BUILT IN FUNCTION
- Math.floor diperbolehkan
*/

function ayoJoget(exercise, userInput){
    if (exercise.length != userInput.length){
        return 'Input yang anda masukkan tidak lengkap!'
    }

    total = 0

    for(let i = 0; i < userInput.length; i++){
        if(exercise[i] === userInput[i]){
            total++
        }
    }

    const percentage = Math.floor(total / exercise.length * 100)

    if(percentage === 100){
        return `Anda mendapatkan score ${total*10} / ${exercise.length*10}. Persentase: ${percentage}, Kategori : Perfect`
    } else if(percentage >= 80 && percentage <= 99){
        return `Anda mendapatkan score ${total*10} / ${exercise.length*10}. Persentase: ${percentage}, Kategori : Great`
    } else if(percentage >= 60 && percentage <= 79){
        return `Anda mendapatkan score ${total*10} / ${exercise.length*10}. Persentase: ${percentage}, Kategori : Good`
    } else {
        return `Anda mendapatkan score ${total*10} / ${exercise.length*10}. Persentase: ${percentage}, Kategori : Bad`
    }

}

console.log(ayoJoget('<>^v>>>','<>^^>><'))
// var exercise = '<>^v>>>'
// var userInput = '<>^^>><'

// Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good


console.log(ayoJoget('<>^v','<>^v'))
// var exercise = '<>^v'
// var userInput = '<>^v'

// Anda mendapatkan score 40 / 40. Persentase: 100%, Kategori : Perfect

console.log(ayoJoget('<>^v','<'))

// var exercise = '<>^v'
// var userInput = '<'

// Input yang anda masukkan tidak lengkap!