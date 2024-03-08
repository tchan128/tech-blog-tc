const loginFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#username-login').value.trim();
    console.log(name)
    const password = document.querySelector('#password-login').value.trim();

    if (name && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
            console.log("You're good")
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if ( name && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

if (document.querySelector('.login-container')) {
    document
        .querySelector('.login-container')
        .addEventListener('submit', loginFormHandler);
} else if (document.querySelector('.signup-container')) {
    document
        .querySelector('.signup-container')
        .addEventListener('submit', signupFormHandler);
}