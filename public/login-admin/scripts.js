document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
        // Redirect to admin dashboard or another page
        window.location.href = '../admin/index.html';
    } else {
        errorMessage.textContent = 'Username atau password salah';
        errorMessage.style.display = 'block';
    }
});
