// Toggle menu untuk tampilan mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Animasi Scroll Effect
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".course, .price, .testimonial, .faq-item").forEach(section => {
    observer.observe(section);
});

// Countdown Timer (kalau ada promo countdown)
const countdown = document.getElementById("countdown-timer");
if (countdown) {
    let targetDate = new Date("2025-12-31T23:59:59").getTime();

    setInterval(() => {
        let now = new Date().getTime();
        let timeLeft = targetDate - now;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
        question.nextElementSibling.classList.toggle("active");
    });
});