let edit = document.getElementById('editButton')
let form = document.getElementById('formPopUp')
let close = document.getElementById('closeButton')
let submit = document.getElementById('submitButton')
let listContent = document.getElementById('listContent')
let formName = document.getElementById('formName')
let formRole = document.getElementById('formRole')
let userDataArray = []

const defaultUserData = {
    name: 'John Doe',
    role: 'Web Developer',
    avaiability: 'Full Time',
    age: '30',
    location: 'New York, USA',
    experience: '5',
    email: 'johndoe@example.com'
};

function displayUserData(userData) {
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
}

function handleReadUserData() {
    try {
        const userDataString = localStorage.getItem('userData')

        if (!userDataString) {
            localStorage.setItem('userData', JSON.stringify([defaultUserData]))
            userDataArray = [defaultUserData]
        } else {
            userDataArray = JSON.parse(userDataString)
        }

        displayUserData(userDataArray[0])

    } catch (error) {
        console.error('[handleReadUserData]:', error)
    }
}

function addUserData() {
    let userData = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        avaiability: document.getElementById('avaiability').value,
        age: document.getElementById('age').value,
        location: document.getElementById('location').value,
        experience: document.getElementById('experience').value,
        email: document.getElementById('email').value,
    }

    console.log(userData)

    userDataArray = [userData]

    localStorage.setItem('userData', JSON.stringify(userDataArray))
    console.log('Data added in local storage')

    displayUserData(userData)

}

edit.addEventListener('click', () => {
    form.classList.remove('hidden')
    close.classList.remove('hidden')
})

close.addEventListener('click', () => {
    form.classList.add('hidden')
    close.classList.add('hidden')
})

submit.addEventListener('click', () =>{
    addUserData()
    form.classList.add('hidden')
})

window.onload = handleReadUserData