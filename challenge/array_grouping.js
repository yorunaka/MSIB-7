let items = [
    //key = name, type
    { name: 'coca cola', type: 'drink' },
    { name: 'nasi padang', type: 'food' },
    { name: 'aqua', type: 'drink' },
    { name: 'karedok', type: 'food' },
    { name: 'ayam bakar', type: 'food' },
    { name: 'pocari sweat', type: 'drink' },
]

let output  = {}

for (let i = 0; i < items.length; i++) {
    const {name, type} = items[i]
    if (output[type] === undefined) {
        output[type] = []
    }
    output[type].push(name)
}

console.log(output)