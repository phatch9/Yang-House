    // Simple authentication logic (demo only)
    const AUTH_USER = 'user';
    const AUTH_PASS = 'password';

    function login(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    if (username === AUTH_USER && password === AUTH_PASS) {
        localStorage.setItem('yanghouse_logged_in', 'true');
        window.location.reload();
    } else {
        alert('Invalid credentials');
    }
    }

    function logout() {
    localStorage.removeItem('yanghouse_logged_in');
    window.location.reload();
    }

    function checkAuth() {
        return localStorage.getItem('yanghouse_logged_in') === 'true';
    }

    // Call this to protect a page
    function requireAuth() {
    if (!checkAuth()) {
        window.location.href = 'index.html?login=1';
    }
    }
