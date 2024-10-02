const countWord = (string) => {
 let letterCount = {}

 for (let i = 0; i < string.length; i++) {
    let char = string[i]
    if (char !== " ") {
        if (letterCount[char] === undefined) {
            letterCount[char] = 1
        } else {
            letterCount[char]++
        }
    }
 }
 return letterCount
}

console.log(countWord("I HAVE A DREAM"))