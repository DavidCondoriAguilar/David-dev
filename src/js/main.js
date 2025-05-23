// Importar módulos
import { LanguageManager } from './i18n/languageManager.js';
import { ThemeManager } from './modules/themeManager.js';
import { initTyped } from './animations/typedAnimation.js';
import { initNumberCounters } from './animations/numberCounter.js';

// Inicializar AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        once: true
    });
    
    // Inicializar gestores
    window.languageManager = new LanguageManager();
    window.themeManager = new ThemeManager();
    
    // Inicializar animaciones
    initTyped();
    initNumberCounters();
    
    // Configurar el evento de carga
    const loadingOverlay = document.querySelector(".loading-overlay");
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.style.display = "none";
        }, 2000);
    }
    
    // Configurar sonido para los enlaces
    const sound = new Audio("mario-bros tuberia.mp3");
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sound.currentTime = 0;
            sound.play().catch(e => console.log("No se pudo reproducir el sonido:", e));
        });
    });
});
