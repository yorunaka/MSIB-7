let edit = document.getElementById('editButton')
let form = document.getElementById('formPopUp')
let close = document.getElementById('closeButton')
let submit = document.getElementById('submitButton')
let listContent = document.getElementById('listContent')
let formName = document.getElementById('formName')
let formRole = document.getElementById('formRole')

let userData = {
    name : '',
    role : '',
    avaiability : '',
    age : '',
    location : '',
    experience : '',
    email : ''
}

edit.addEventListener('click', () => {
    form.classList.remove('hidden')
    close.classList.remove('hidden')
})

close.addEventListener('click', () => {
    form.classList.add('hidden')
    close.classList.add('hidden')
})

submit.addEventListener('click', () => {
    userData.name = document.getElementById('name').value
    userData.role = document.getElementById('role').value
    userData.avaiability = document.getElementById('avaiability').value
    userData.age = document.getElementById('age').value
    userData.location = document.getElementById('location').value
    userData.experience = document.getElementById('experience').value
    userData.email = document.getElementById('email').value

    console.log(userData)

    formName.innerHTML = userData.name
    formRole.innerHTML = userData.role

    listContent.innerHTML += `
        <div>
            ${userData.avaiability}
            <br/>
            ${userData.age}
            <br/>
            ${userData.location}
            <br/> 
            ${userData.experience}
            <br/>
            ${userData.email}
            <br/>   
        </div>
    `

    form.classList.add('hidden')
})