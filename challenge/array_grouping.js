let items = [
    //key = name, type
    { name: 'coca cola', type: 'drink' },
    { name: 'nasi padang', type: 'food' },
    { name: 'aqua', type: 'drink' },
    { name: 'karedok', type: 'food' },
    { name: 'ayam bakar', type: 'food' },
    { name: 'pocari sweat', type: 'drink' },
]

let output  = {

}
for (let i = 0; i < items.length; i++) {
    if (output[items[i].type] === undefined) {
        output[items[i].type] = []
    }
    output[items[i].type].push(items[i].name)
}
console.log(output)