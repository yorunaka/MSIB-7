const submitButton = document.getElementById('submitButton');

function redirect() {
    window.location.assign("https://www.google.com/");
}

submitButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // example of conditional statement
    // if username is admin and password is onepiece, alert 'Login Success'
    // else alert 'Login Failed' and redirect to google.com
    //idk why redirect is not working ffs
    if (username === 'admin' && password === 'onepiece'){
        alert('Login Success');
    } else {
        alert('Login Failed');
        redirect();
    }
    });