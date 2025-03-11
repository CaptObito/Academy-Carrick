document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mousemove", function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        this.style.setProperty("--x", x + "px");
        this.style.setProperty("--y", y + "px");
    });
});