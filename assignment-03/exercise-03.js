// Vincent Louis Fernando
// RCJ03S016

// Diberikan function yang menerima 2 parameter, yaitu array of integer (unsorted) dan integer. Function tersebut
// akan mengembalikan sebuah array di mana di dalam array tersebut mengandung array yang terdiri dari 2 angka
// yang jika dijumlahkan sama dengan integer

function sumArray(arr, int) {
    let output = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === int) {
                output.push([arr[i], arr[j]])
            }
        }
    }

    return output
}


console.log(sumArray([2, 1, 4, 3], 5))
// output = ([2, 3], [1, 4])
console.log(sumArray([1, 8, 10, 3], 11))
// output = ([1, 10], [3, 8])
