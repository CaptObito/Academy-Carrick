// TOGGLE MOBILE MENU
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// SCROLL TO TOP BUTTON
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// MODAL POPUP
function openModal() {
  document.getElementById('infoModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('infoModal').style.display = 'none';
}

// TYPEWRITER EFFECT
const typewriterText = "The Future of AI & Cyber Tech";
let i = 0;
function typeWriter() {
  if (i < typewriterText.length) {
    document.querySelector('.typewriter').textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// FADE-IN SCROLL EFFECT
document.addEventListener('scroll', function() {
  const fadeElements = document.querySelectorAll('.fade-in');
  const screenHeight = window.innerHeight;
  
  fadeElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < screenHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = '1s ease-out';
    }
  });
});