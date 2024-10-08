// Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut
// akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika dan false jika sebaliknya.
// Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. Contoh, 2, 4,
// 6, 8 adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan 2, 4, 6, 9 bukanlah deret aritmatika karena
// tidak perbedaan selisih antar angka yang tidak konsisten.

function isArithmeticProgression(numbers) {
    let i = 0
    let difference = 0

    const absDifference = numbers[1] - numbers[0]
    for (let i = 1; i < numbers.length - 1; i++){
        difference = numbers[i + 1] - numbers[i]
        if(absDifference !== difference){
            return "false"
        } 
    }
    return "true"
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6]));
// true
console.log(isArithmeticProgression([2, 4, 6, 12, 24]));
// false
console.log(isArithmeticProgression([2, 4, 6, 8]));
// true
console.log(isArithmeticProgression([2, 6, 18, 54]));
// false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9]));
// false