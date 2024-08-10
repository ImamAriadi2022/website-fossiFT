function toggleTeam() {
    var team2023 = document.getElementById("team-2023");
    var team2024 = document.getElementById("team-2024");
    var toggleBtn = document.getElementById("toggle-btn");

    if (team2023.style.display === "none") {
        team2023.style.display = "flex";
        team2024.style.display = "none";
        toggleBtn.textContent = "Tampilkan Pengurus 2024";
    } else {
        team2023.style.display = "none";
        team2024.style.display = "flex";
        toggleBtn.textContent = "Tampilkan Pengurus 2023";
    }
}


// navbar fixed
// Ambil elemen navbar
const navbar = document.querySelector('.navbar');

// Fungsi untuk menambah atau menghapus kelas fixed pada navbar
function fixNavbar() {
    if (window.scrollY > navbar.offsetTop) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
}

// Panggil fungsi fixNavbar setiap kali pengguna menggulir halaman
window.addEventListener('scroll', fixNavbar);
