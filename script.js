// Toggle Navigation Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});
// لتشغيل الشريط المتحرك للصور
const carousel = document.querySelector('.carousel-container');
carousel.addEventListener('mouseover', () => {
    carousel.style.animationPlayState = 'paused';
});
carousel.addEventListener('mouseout', () => {
    carousel.style.animationPlayState = 'running';
});
// التمرير السلس إلى الأقسام عند الضغط
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
        });
    });
});
