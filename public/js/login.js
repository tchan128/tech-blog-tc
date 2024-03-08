const loginFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (name && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
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
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
  .querySelector('.login-container')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-container')
  .addEventListener('submit', signupFormHandler);