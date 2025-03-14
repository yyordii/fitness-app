document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;
            try {
                const response = await fetch('http://localhost:5000/users/register', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({username, password})
                });
                const data = await response.json();
                if (response.ok) {
                    alert('User registered successfully');
                    window.location.href = 'login.html';
                } else {
                    alert(data.error);
                }
            } catch (error) {
                console.error('Error registering user:', error);
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const errorMessage = document.getElementById('errorMessage');
            try {
                const response = await fetch('http://localhost:5000/users/login', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({username, password})
                });
                const data = await response.json();
                if (response.ok) {
                    window.location.href = 'home.html';
                } else {
                    errorMessage.textContent = data.error;
                    errorMessage.style.color = 'red';
                }
            } catch (error) {
                console.error('Error logging in:', error);
                errorMessage.textContent = 'An error occurred. Please try again.';
                errorMessage.style.color = 'red';
            }
        });
    }
});