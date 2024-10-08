// Diberikan sebuah function yang menerima dua parameter angka. Function akan me-return nilai true jika
// secondNumber lebih besar dari firstNumber, dan false jika sebaliknya. Jika kedua angka bernilai sama, function
// akan me-return -1.

function compareNumbers (firstNumber, secondNumber){
    if (firstNumber < secondNumber){
        return true;
    } else if (firstNumber > secondNumber){
        return false;
    } else {
        return -1;
    }
}

function compareNumbers2 (firstNumber, secondNumber){
    return firstNumber < secondNumber ? true : firstNumber > secondNumber ? false : -1;
}

console.log(compareNumbers(5, 8)); // true 
console.log(compareNumbers(5, 3)); // false
console.log(compareNumbers(4, 4)); // -1
console.log(compareNumbers(3, 3)); // -1
console.log(compareNumbers(17, 2)); // false