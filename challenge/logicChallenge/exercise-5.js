// Diberikan sebuah function yang menerima satu parameter berupa angka. Function akan me-return true jika angka
// tersebut adalah bilangan prima. Jika tidak, return false

function isPrime(number){
    if (number < 2){
        return false;
    } else {
        for (let i = 2; i < number; i++){
            if (number % i === 0){
                return false;
            }
        }
        return true;
    }
}

console.log(isPrime(3)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false