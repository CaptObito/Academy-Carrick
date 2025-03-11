window.addEventListener("scroll", function () {
    let scrolled = window.scrollY;
    document.querySelector(".hero h2").style.transform = `translateY(${scrolled * 0.3}px)`;
    document.querySelector(".hero p").style.transform = `translateY(${scrolled * 0.5}px)`;
});