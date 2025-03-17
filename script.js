document.addEventListener('DOMContentLoaded', () => {
  // Mulai efek typewriter
  startTypewriter();
});

// TYPEWRITER
const typewriterText = "The Future of AI & Cyber Tech";
let i = 0;
function startTypewriter() {
  if (i < typewriterText.length) {
    document.querySelector('.typewriter').textContent += typewriterText.charAt(i);
    i++;
    setTimeout(startTypewriter, 100);
  }
}

// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// NAV TOGGLE (MOBILE)
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

// SCROLL TO TOP
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}