document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.none');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
});
