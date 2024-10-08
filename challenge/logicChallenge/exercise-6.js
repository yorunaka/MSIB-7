// Buatlah function yang me return array berisi angka prima. Function tersebut menerima input angkaPertama dan
// angkaKedua, dan mencari semua angka prima yang ada di antara angkaPertama dan angkaKedua

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

function listPrima(angkaPertama, angkaKedua){
    let result = [];
    for (let i = angkaPertama; i <= angkaKedua; i++){
        if (isPrime(i)){
            result.push(i);
        }
    }
    return result;
}

console.log(listPrima(1, 5)) // [2, 3, 5]
console.log(listPrima(5, 10)) // [5, 7]
console.log(listPrima(10, 20)) // [11, 13, 17, 19]