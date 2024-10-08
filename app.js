const burger = document.querySelector('.burger');
const sidebar = document.querySelector('#sidebar');
const links = document.querySelectorAll('#sidebar ul li a');
const sections = document.querySelectorAll('section'); // Assuming each section has a <section> tag

// Animation for Burger Menu
burger.addEventListener('click', () => {
    sidebar.classList.toggle('is-active');
    burger.classList.toggle('is-active');
});

// Hide Sidebar When Clicked a Link
links.forEach(link => link.addEventListener('click', () => {
    links.forEach(link => link.classList.remove('is-active'));
    link.classList.add('is-active');

    sidebar.classList.remove('is-active');
    burger.classList.remove('is-active');
}));

// Add Active Class While Scrolling
window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if section is in viewport
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('is-active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('is-active');
        }
    });
});

// Initialize AOS
document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the timeline element
    const timeline = document.querySelector('.timeline');

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to trigger animation
                timeline.classList.add('animate-line');
            } else {
                // Optionally remove class to reset animation
                timeline.classList.remove('animate-line');
            }
        });
    }, {
        threshold: 0.5 // Adjust this threshold based on when you want the animation to trigger
    });

    // Observe the timeline element
    observer.observe(timeline);
});


