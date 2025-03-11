const elements = document.querySelectorAll(".scroll-reveal");

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + window.innerHeight;
    
    elements.forEach(element => {
        if (scrollPosition > element.offsetTop + 100) {
            element.classList.add("visible");
        }
    });
});