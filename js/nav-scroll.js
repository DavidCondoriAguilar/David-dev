document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('nav');
    const secondSection = document.querySelector('.second-section');

    window.addEventListener('scroll', function() {
        if (secondSection) {
            const secondSectionTop = secondSection.offsetTop;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= secondSectionTop - nav.offsetHeight) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    });
}); 