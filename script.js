// Toggle Mobile Menu
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Modal Popup for Info
function openModal() {
  document.getElementById('infoModal').style.display = 'block';
}
function closeModal() {
  document.getElementById('infoModal').style.display = 'none';
}

// Typewriter Effect
const typewriterText = "The Future of AI & Cyber Tech";
let i = 0;
function typeWriter() {
  if (i < typewriterText.length) {
    document.querySelector('.typewriter').textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = function() {
  typeWriter(); // Start typewriter effect on load
  // Check if user is already logged in
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    document.getElementById('usernameDisplay').textContent = loggedInUser;
    document.getElementById('dashboard').style.display = 'block';
  }
};

// Fade-in on Scroll for elements with class 'fade-in'
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

// Chatbot Functionality
function sendChat() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  if (message !== "") {
    appendChatMessage("User", message);
    // Simulate bot response
    setTimeout(() => {
      appendChatMessage("Bot", "Terima kasih atas pesan Anda. Fitur auto-learn sedang dikembangkan!");
    }, 1000);
    input.value = "";
  }
}
function appendChatMessage(sender, message) {
  const chatWindow = document.getElementById('chatWindow');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'chat-message';
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Voice Input (Web Speech API)
function startVoiceInput() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Voice recognition not supported in your browser.");
    return;
  }
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "id-ID";
  recognition.start();
  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('chatInput').value = transcript;
  };
}

// Login Modal Functionality
function openLoginModal() {
  document.getElementById('loginModal').style.display = 'block';
}
function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  // Simulate login (in real case, validate via backend)
  if (username && password) {
    localStorage.setItem('loggedInUser', username);
    document.getElementById('usernameDisplay').textContent = username;
    document.getElementById('dashboard').style.display = 'block';
    closeLoginModal();
  } else {
    alert("Please enter valid credentials.");
  }
});

// Logout Functionality
function logout() {
  localStorage.removeItem('loggedInUser');
  document.getElementById('dashboard').style.display = 'none';
}