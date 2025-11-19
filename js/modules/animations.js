export function initAnimations() {
    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Section (Carga inicial suave)
    const tlHero = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Estado inicial explícito para evitar problemas de visibilidad
    gsap.set(".brand-logo, .nav-link, .first-section h1, .type, .social a, .first-button", { opacity: 0, y: 20 });
    gsap.set(".first-button", { scale: 0.9 });

    tlHero.to(".brand-logo", { y: 0, opacity: 1, duration: 0.8 })
        .to(".nav-link", { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.4")
        .to(".first-section h1", { y: 0, opacity: 1, duration: 1 }, "-=0.2")
        .to(".type", { opacity: 1, duration: 0.8 }, "-=0.5")
        .to(".social a", { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.3")
        .to(".first-button", { scale: 1, opacity: 1, y: 0, duration: 0.5 }, "-=0.2");

    // 2. Secciones Generales (Títulos y Contenido)
    const sections = document.querySelectorAll("section, article");

    sections.forEach(section => {
        if (section.id === 'homer') return;

        const headings = section.querySelectorAll("h2, h3");
        if (headings.length > 0) {
            gsap.from(headings, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            });
        }
    });

    // 3. Tarjetas de Proyectos (Stagger Effect)
    // IMPORTANTE: Usamos 'autoAlpha' en lugar de 'opacity' para mejor manejo de visibilidad
    // y nos aseguramos de que el trigger sea el contenedor padre o las mismas tarjetas
    const workCards = document.querySelectorAll(".work-card");
    if (workCards.length > 0) {
        gsap.set(workCards, { opacity: 0, y: 50 }); // Estado inicial explícito

        ScrollTrigger.batch(".work-card", {
            start: "top 85%",
            onEnter: batch => gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "back.out(1.7)",
                overwrite: true
            }),
            onLeaveBack: batch => gsap.to(batch, {
                opacity: 0,
                y: 50,
                overwrite: true
            })
        });
    }

    // 4. Stats Removed

    // 5. Timeline Items
    const timelineItems = document.querySelectorAll(".timeline-item");
    if (timelineItems.length > 0) {
        gsap.set(timelineItems, { opacity: 0, x: -30 });

        ScrollTrigger.batch(".timeline-item", {
            start: "top 80%",
            onEnter: batch => gsap.to(batch, {
                opacity: 1,
                x: 0,
                stagger: 0.3,
                duration: 0.8,
                ease: "power2.out",
                overwrite: true
            })
        });
    }

    // 6. Skills / Tecnologías
    // Aseguramos que las imágenes del slider sean visibles si la animación falla o tarda
    const techImages = document.querySelectorAll(".tecnologi");
    if (techImages.length > 0) {
        gsap.set(techImages, { opacity: 0, scale: 0.5 });

        gsap.to(".tecnologi", {
            scrollTrigger: {
                trigger: ".slider-container",
                start: "top 85%",
            },
            scale: 1,
            opacity: 1, // Opacidad final 1
            duration: 0.5,
            stagger: {
                amount: 1,
                from: "random"
            },
            ease: "back.out(1.7)"
        });
    }

    // 7. About Me Profile
    const profileImg = document.querySelector(".img-circle");
    if (profileImg) {
        gsap.set(profileImg, { opacity: 0, scale: 0, rotation: -180 });

        gsap.to(profileImg, {
            scrollTrigger: {
                trigger: ".about-me",
                start: "top 70%",
            },
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "elastic.out(1, 0.75)"
        });
    }

    // 8. Services Section
    const serviceCards = document.querySelectorAll(".service-card");
    if (serviceCards.length > 0) {
        gsap.set(serviceCards, { opacity: 0, y: 30 });

        ScrollTrigger.batch(".service-card", {
            start: "top 85%",
            onEnter: batch => gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out",
                overwrite: true
            })
        });
    }

    initTyped();
    document.addEventListener('languageChanged', initTyped);
}

let typed;

function initTyped() {
    if (typed) {
        typed.destroy();
    }

    const element = document.querySelector(".type");
    if (!element) return;

    const currentLang = localStorage.getItem('language') || 'es';
    const strings = currentLang === 'es'
        ? ["Desarrollador Full Stack", "Desarrollador Móvil", "Diseñador UI/UX", "Desarrollador Cloud"]
        : ["Full Stack Developer", "Mobile Developer", "UI/UX Designer", "Cloud Developer"];

    typed = new Typed(".type", {
        strings: strings,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
    });
}
