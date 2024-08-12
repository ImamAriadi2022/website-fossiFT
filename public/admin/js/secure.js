// Cek apakah user sudah login sebagai admin
function checkAdminAccess() {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
        // Jika tidak ada, redirect ke halaman login
        window.location.href = '../login-admin/index.html';
    }
}

// Panggil fungsi untuk cek akses admin saat halaman dimuat
checkAdminAccess();