// Subarray dapat diartikan sebagai bagian dari sebuah array yang bersambung.
// Subarray merupakan subset dari array asli yang mencakup elemen-elemen yang berurutan dari sebuah
// indeks awal hingga indeks akhir.
// Sebagai contoh, misalkan kita memiliki sebuah array berikut
// arr = [1, 2, 3, 4, 5, 6, 7]
// [1, 2, 3] adalah subarray yang dimulai dari indeks 0 dan berakhir pada indeks 2.
// [4, 5] adalah subarray yang dimulai dari indeks 3 dan berakhir pada indeks 4.
// [1,2,4,5] bukan subarray karena tidak bersambung
// Diberikan satu buah input a.
// Dari semua kemungkinan subarray yang berasal dari a,
// subarray manakah yang akan memberikan sum terbesar apabila semua anggota subarray tersebut dijumlahkan.
// Input:
// a = [-2, -3, 4, -1, -2, 1, 5, -3]
// Expected Output:
// [[ 4, -1, -2, 1, 5] , 7]
// Explanation:
// [ 4, -1, -2, 1, 5] : Subarray yang akan memberikan jumlah terbesar
// 7 : Sum dari subarray

function arrSum(arr){
    let maxSum = 0
    let currentSum = 0
    let maxArr = []
    let currentArr = []
    for (let i = 0; i < arr.length; i++){
        currentSum = 0
        currentArr = []
        for (let j = i; j < arr.length; j++){
            currentSum += arr[j]
            currentArr.push(arr[j])
            if (currentSum > maxSum){
                maxSum = currentSum
                maxArr = currentArr
            }
        }
    }
    return [maxArr, maxSum]
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]))
//Output [[ 4, -1, -2, 1, 5] , 7]