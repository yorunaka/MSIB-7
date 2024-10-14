console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]))
//expected output [13, 29, 36, 51, 52, 66, 72, 87, 98]

function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let indexMin = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[indexMin]){
                indexMin = j
            }
        }
        if (indexMin !== i){
            let temp = arr[i]
            arr[i] = arr[indexMin]
            arr[indexMin] = temp
        }
    }
    return arr
}