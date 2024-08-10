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
