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

// You can add more JavaScript functionality as needed