// JavaScript for the portfolio

// You can add any interactive elements or functionality here
// For example, smooth scrolling, form validation, or dynamic content loading

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('projectCarousel');
    const carouselInner = carousel.querySelector('.flex');
    const prevButton = document.querySelector('[data-carousel-prev]');
    const nextButton = document.querySelector('[data-carousel-next]');
    let currentIndex = 0;
    const totalSlides = carouselInner.children.length;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    // Initialize the carousel
    updateCarousel();
});

// You can add more JavaScript functionality as needed

// JavaScript for the portfolio

document.addEventListener('DOMContentLoaded', () => {
    // ... (existing code) ...

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
    }

    // Sticky navigation
    const nav = document.querySelector('.sticky-nav');
    const navTop = nav.offsetTop;

    function stickyNavigation() {
        if (window.scrollY >= navTop) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', stickyNavigation);

    // Back to Top button
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (existing code) ...

    // Auto-hide navigation
    const nav = document.querySelector('.sticky-nav');
    let lastScrollTop = 0;
    const navHeight = nav.offsetHeight;

    function handleNavigation() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > navHeight) {
            // Scrolling down & past the navbar
            nav.classList.add('nav-hidden');
        } else {
            // Scrolling up
            nav.classList.remove('nav-hidden');
        }
        
        lastScrollTop = scrollTop;
    }

    window.addEventListener('scroll', handleNavigation);

    // ... (rest of the existing code) ...
});