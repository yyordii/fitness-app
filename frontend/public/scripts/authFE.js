document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;
            try {
                const response = await fetch('http://localhost:5000/api/users/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();
                if (response.ok) {
                    alert('User registered successfully');
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
            console.log('Login form submitted', { username, password }); // Add this line
            try {
                const response = await fetch('http://localhost:5000/api/users/login', { // Updated line
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();
                console.log('Response from server', data); // Add this line
                if (response.ok) {
                    alert('Login successful');
                } else {
                    alert(data.error);
                }
            } catch (error) {
                console.error('Error logging in:', error);
            }
        });
    }
});