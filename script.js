// Pastikan script berjalan setelah DOM terload (defer sudah dipakai di HTML)
document.addEventListener('DOMContentLoaded', function() {
  typeWriter(); // Mulai efek typewriter
  // Periksa apakah user sudah login, tampilkan dashboard jika iya
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    document.getElementById('usernameDisplay').textContent = loggedInUser;
    document.getElementById('dashboard').style.display = 'block';
  }
});

// Typewriter Effect
const typewriterText = "The Future of AI, Blockchain & Cyber Security";
let i = 0;
function typeWriter() {
  if (i < typewriterText.length) {
    document.querySelector('.typewriter').textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Navigation & Dark Mode
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal Functions
function openModal() {
  document.getElementById('infoModal').style.display = 'block';
}
function closeModal() {
  document.getElementById('infoModal').style.display = 'none';
}
function openLoginModal() {
  document.getElementById('loginModal').style.display = 'block';
}
function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}

// Login & Dashboard
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  if (username && password) {
    localStorage.setItem('loggedInUser', username);
    document.getElementById('usernameDisplay').textContent = username;
    document.getElementById('dashboard').style.display = 'block';
    closeLoginModal();
  } else {
    alert("Please enter valid credentials.");
  }
});
function logout() {
  localStorage.removeItem('loggedInUser');
  document.getElementById('dashboard').style.display = 'none';
}

// Fade-in on Scroll
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

// Chatbot Functions
function sendChat() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  if (message !== "") {
    appendChatMessage("User", message);
    // Simulasikan respons bot yang lebih kontekstual
    setTimeout(() => {
      appendChatMessage("Bot", "Thanks for your question! Our AI is learning and will respond even better next time.");
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

// Voice Input via Web Speech API
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

// Blockchain & Security Functions
async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const walletAddress = accounts[0];
      document.getElementById('walletAddress').textContent = walletAddress;
      document.getElementById('walletBalance').textContent = "2500"; // Simulasi saldo token
      document.getElementById('walletInfo').style.display = 'block';
    } catch (error) {
      alert("Error connecting wallet: " + error.message);
    }
  } else {
    alert("MetaMask is not available. Please install it to connect your wallet.");
  }
}
function initiate2FA() {
  const code = prompt("Enter your 2FA code (simulated):");
  if (code === "123456") {
    alert("2FA enabled successfully!");
  } else {
    alert("Invalid 2FA code. Please try again.");
  }
}