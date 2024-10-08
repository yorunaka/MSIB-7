/**
 * +++++=========
 * Alay Encyrption
 * ==============
 *
 * Buatlah sebuah fungsi yang akan menerima satu paramter berupa string
 * sebuah string menjadi string alay.
 *
 * Untuk membuat sebuah string menjadi alay ada beberapa
 * - Semua huruf a akan dirubah menjadi angka 4
 * - Semua huruf i akan dirubah menjadi angka 1
 * - Semua huruf o akan dirubah menjadi angka 0
 * - Semua huruf e akan dirubah menjadi angka 3
 *
 * Dan enkripsi character alay ini dengan menggeser setiap huruf ke character sebelumnya
 * contoh  b menjadi a, c menjadi b, huruf a kembali menjadi huruf z
 *
 */

 
function alayEncryption(string) {
  dictionary = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  res = ''
  
  for(let i = 0; i < string.length; i++){
    let char = string[i]
    let found = false
    
    if(char === 'a'){
        res += '4'
        continue
    } else if (char === 'i'){
        res += '1'
        continue
    } else if (char === 'o'){
        res += '0'
        continue
    } else if (char === 'e'){
        res += '3'
        continue
    }

    for(let j = 0; i < dictionary.length; j++){
        if(char === dictionary[j]){
        found = true
            if(j === 0){
                res += dictionary[dictionary.length - 1]
            } else if (j === dictionary.length - 1){
                res += dictionary[0]
            } else {
                res += dictionary[j - 1]
            }
            break
        }
    }
    if (!found){
        res += char
    }
  }
  return res
}

console.log(alayEncryption('alay')) // 4k4x 
console.log(alayEncryption('zebra liar')) // y3aq4 l14q