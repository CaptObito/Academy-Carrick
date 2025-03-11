const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Cek localStorage saat halaman dimuat
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}