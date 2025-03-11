const text = "Selamat Datang di Academy Carrick!";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typingText").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;