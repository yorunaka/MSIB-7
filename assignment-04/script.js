let edit = document.getElementById('editButton')
let form = document.getElementById('formPopUp')
let close = document.getElementById('closeButton')
let submit = document.getElementById('submitButton')
let listContent = document.getElementById('listContent')
let formName = document.getElementById('formName')
let formRole = document.getElementById('formRole')

function generateUserDataCard(name, role, avaiability, age, location, experience, email) {
    formName.innerHTML = name
    formRole.innerHTML = role
    return `
        <div>
            ${avaiability}
            <br/>
            ${age}
            <br/>
            ${location}
            <br/> 
            ${experience}
            <br/>
            ${email}
            <br/>
        </div>
    `;
}

function handleReadUserData() {
    try {
        let userDataArray = []
        const userDataString = localStorage.getItem('userData');

        if (userDataString) {
            const initialUserData = JSON.parse(userDataString);

            if (Array.isArray(initialUserData)) {
                userDataArray = initialUserData;
                let userDataHTML = "";

                initialUserData.forEach((userData) => {
                    userDataHTML += generateUserDataCard(
                        userData.name,
                        userData.role,
                        userData.avaiability,
                        userData.age,
                        userData.location,
                        userData.experience,
                        userData.email
                    );
                });

                listContent.innerHTML = userDataHTML;  // Update the list content with the stored data
            }
        }
    } catch (error) {
        console.error('[handleReadUserData]:', error);
    }
}

function addDataToLocalStorage(){
    let userDataArray = []

    let userData = {
        name : document.getElementById('name').value,
        role : document.getElementById('role').value,
        avaiability : document.getElementById('avaiability').value,
        age : document.getElementById('age').value,
        location : document.getElementById('location').value,
        experience : document.getElementById('experience').value,
        email : document.getElementById('email').value
    }

    userDataArray.push(userData)

    localStorage.setItem('userData', JSON.stringify(userDataArray))
    console.log('Data added to local storage')
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
    addDataToLocalStorage()
    form.classList.add('hidden')
})