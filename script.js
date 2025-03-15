function showAlert() {
    alert("Selamat datang di dunia futuristik!");
}

function scrollToLayer2() {
    document.getElementById("layer2").scrollIntoView({ behavior: "smooth" });
}

function scrollToLayer2() {
    document.getElementById("layer2").scrollIntoView({ behavior: "smooth" });
}

// Efek fade-in saat scroll
document.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".fade-in");
    let screenHeight = window.innerHeight;

    elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        if (position < screenHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});