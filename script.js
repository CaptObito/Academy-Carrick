function showAlert() {
    alert("Selamat datang di dunia futuristik!");
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
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Orbitron', sans-serif;
}

body {
    background: #0a0a0a;
    color: white;
    text-align: center;
    scroll-behavior: smooth;
}

.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

h1.glitch {
    font-size: 3rem;
    text-transform: uppercase;
    color: cyan;
    text-shadow: 0 0 10px cyan, 0 0 20px cyan, 0 0 40px cyan;
    animation: glitch 1s infinite alternate;
}

@keyframes glitch {
    0% { transform: skewX(-10deg); }
    100% { transform: skewX(10deg); }
}

.subtitle {
    font-size: 1.2rem;
    margin: 10px 0;
}

.glow-btn {
    background: none;
    border: 2px solid cyan;
    padding: 10px 20px;
    font-size: 1rem;
    color: cyan;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.3s;
}

.glow-btn:hover {
    background: cyan;
    color: black;
    box-shadow: 0 0 20px cyan;
}

/* LAYER 2 */
.layer2 {
    background: url('https://source.unsplash.com/1600x900/?cyberpunk,technology') no-repeat center center/cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.layer2 h2 {
    font-size: 2.5rem;
    color: cyan;
    text-shadow: 0 0 15px cyan;
    margin-bottom: 20px;
}

.card-container {
    display: flex;
    gap: 20px;
}

.card {
    background: rgba(0, 255, 255, 0.1);
    border: 2px solid cyan;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 250px;
    box-shadow: 0 0 10px cyan;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px cyan;
}

.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}