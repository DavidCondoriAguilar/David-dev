export function initNavbar() {
    const nav = document.getElementById('nav');
    const secondSection = document.querySelector('.second-section');

    if (!nav || !secondSection) return;

    window.addEventListener('scroll', function () {
        const secondSectionTop = secondSection.offsetTop;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= secondSectionTop - nav.offsetHeight) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}
