function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Contoh validasi login (sesuaikan dengan logika login Anda)
    if (username === 'admin' && password === 'admin123') {
        // Simpan status login sebagai admin
        localStorage.setItem('isAdmin', 'true');
        
        // Redirect ke halaman admin setelah login berhasil
        window.location.href = '../admin/index.html';
        alert('login berhasil');
    } else {
        alert('Login gagal. Periksa username dan password.');
    }
}