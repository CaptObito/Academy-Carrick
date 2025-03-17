// Pastikan script dijalankan setelah halaman dimuat (dengan defer sudah membantu)
document.addEventListener('DOMContentLoaded', function() {
  // Mulai efek typewriter
  typeWriter();
  // Cek login user, dll.
});

// Fungsi Typewriter (tidak berubah)
const typewriterText = "The Future of AI & Cyber Tech";
let i = 0;
function typeWriter() {
  if (i < typewriterText.length) {
    document.querySelector('.typewriter').textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Fungsi untuk toggle Dark Mode, Mobile Menu, dll.
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi modal, login, chatbot, dll. tetap ada sesuai update sebelumnya
// ...