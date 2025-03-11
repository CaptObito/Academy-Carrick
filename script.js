document.addEventListener("DOMContentLoaded", function () {
    console.log("Academy Carrick Loaded!");

    // Header Color Animation
    const header = document.querySelector('header');
    let colorIndex = 0;
    const colors = ['#ff6a00', '#ee0979', '#ff0077', '#00bcd4', '#8e44ad'];
    setInterval(() => {
        header.style.background = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);

    // Scroll Animation Effect
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.classList.add('animated');
            } else {
                section.classList.remove('animated');
            }
        });
    });

    // Smooth Scroll for Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Button Hover Effect
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        button.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Form Validation (Example for Contact Form)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = document.querySelector('#email');
            const messageInput = document.querySelector('#message');

            if (emailInput.value === '' || messageInput.value === '') {
                alert('Please fill in all the fields!');
            } else {
                alert('Form Submitted Successfully!');
            }
        });
    }

    // Dynamic Content Loader (Example: Load New Articles)
    const loadMoreButton = document.querySelector('#load-more');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function () {
            const newArticle = document.createElement('article');
            newArticle.innerHTML = `
                <h3>New Cryptocurrency Article</h3>
                <p>This is a new article about the latest trends in cryptocurrency...</p>
            `;
            document.querySelector('#blog').appendChild(newArticle);
        });
    }

    // Parallax Scroll Effect
    const parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', function () {
        parallaxElements.forEach(element => {
            const scrollPosition = window.scrollY;
            const speed = element.getAttribute('data-speed');
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    });

    // Modal Window for Alerts or Messages
    const openModalButton = document.querySelector('#open-modal');
    const modal = document.querySelector('#modal');
    const closeModalButton = document.querySelector('#close-modal');
    
    if (openModalButton && modal && closeModalButton) {
        openModalButton.addEventListener('click', function () {
            modal.style.display = 'block';
        });

        closeModalButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = 'Back to Top';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.backgroundColor = '#ff0077';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.border = 'none';
    backToTopButton.style.padding = '10px 20px';
    backToTopButton.style.cursor = 'pointer';
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Tooltip Effect for Cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.textContent = 'Click to Learn More';
            card.appendChild(tooltip);
        });

        card.addEventListener('mouseleave', function () {
            const tooltip = card.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // Parallax Background for Sections
    const parallaxBackgroundSections = document.querySelectorAll('.parallax-background');
    window.addEventListener('scroll', function () {
        parallaxBackgroundSections.forEach(section => {
            const scrollPosition = window.scrollY;
            const speed = section.getAttribute('data-speed');
            section.style.backgroundPosition = `center ${scrollPosition * speed}px`;
        });
    });

    // Lazy Load Images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const loadImages = () => {
        lazyImages.forEach(image => {
            if (image.getBoundingClientRect().top < window.innerHeight) {
                image.src = image.getAttribute('data-src');
                image.removeAttribute('data-src');
            }
        });
    };
    window.addEventListener('scroll', loadImages);
    loadImages(); // Initial load
});