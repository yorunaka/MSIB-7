async function getUsers() {
    let response = await fetch ("https://jsonplaceholder.typicode.com/users")
    let datas = await response.json()
    let names = datas.map(data => data.name)
    console.log(names)
    // console log shows arrays of object names with key names
    //     {
    //     "name": "Leanne Graham",
    //     }
    // },

    let names2 = datas.map(data => ({name : data.name, username: data.username, address: data.address.street}))
    console.log(names2)
}

getUsers()

// name:
// username:
// address: "kattie turnpike, labsackburry"