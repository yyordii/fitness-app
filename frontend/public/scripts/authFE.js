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
                        try {
                            const response = await fetch('http://localhost:5000/users/login', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ username, password })
                            });
                            const responseText = await response.text();
                            if (response.ok) {
                                window.location.href = 'index.html';
                            } else {
                                alert(responseText);
                            }
                        } catch (error) {
                            console.error('Error logging in:', error);
                        }
                    });
                }
            });