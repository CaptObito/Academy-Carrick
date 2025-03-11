const glitchText = document.querySelector(".glitch");
glitchText.innerHTML = glitchText.textContent.split("").map(letter => 
    `<span>${letter}</span>`).join("");

setInterval(() => {
    let letters = document.querySelectorAll(".glitch span");
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.transform = `translate(${Math.random() * 5}px, ${Math.random() * 5}px)`;
            letter.style.opacity = Math.random() > 0.5 ? "0.7" : "1";
        }, index * 50);
    });
}, 500);