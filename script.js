// Toggle Navigation on Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Smooth Scrolling
const links = document.querySelectorAll('.nav-links a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop - 70;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Active Link Highlight on Scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});

// Form Submission (Basic Alert)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
});
