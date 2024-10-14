function mergeStringAlternately(word1, word2){
    res = ''
    lenA = word1.length
    lenB = word2.length
    max = 0
    if (lenA == lenB){
        max = lenA
    } else if (lenA > lenB){
        max = lenA
    } else {
        max = lenB
    }

    for(let i = 0; i < max; i++){
        if (i < lenA){
            res += word1[i]
        }
        if (i < lenB){
            res += word2[i]
        }
    }
    return res
}

console.log(mergeStringAlternately('abc', 'pqr'))
// apbqcr
console.log(mergeStringAlternately('ab', 'pqrs'))
// apbqcr