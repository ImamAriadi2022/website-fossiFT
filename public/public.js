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




// Navbar toggle untuk tablet dan handphone
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Carousel functionality for Dewan Syuro untuk tablet dan handphone
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => {
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        carousel.scrollLeft = scrollLeft - walk;
    });
});

// Team member hover for social media
const teamCards = document.querySelectorAll('.team-card');
teamCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const socialMedia = card.querySelector('.social-media');
        socialMedia.style.display = 'block';
    });
    card.addEventListener('mouseleave', () => {
        const socialMedia = card.querySelector('.social-media');
        socialMedia.style.display = 'none';
    });
});

// Navbar fixed
// Mendapatkan elemen header dan navbar
const header = document.querySelector('header');
const navbar = document.querySelector('.fix-js');

function fixNavbar() {
    // Menambahkan class fixed jika scroll telah melewati header
    if (window.scrollY > header.offsetHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
}

// Memanggil fungsi fixNavbar setiap kali pengguna scroll
window.addEventListener('scroll', fixNavbar);



// Footer alert
document.getElementById("footer-link").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Programmer: Imam Ariadi\nEmail: imamariadi775@gmail.com\nIG: @Imam_Ariadi33");
});





