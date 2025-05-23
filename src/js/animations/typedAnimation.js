// Configuración de Typed.js para la animación de escritura
export function initTyped() {
    let typed;
    
    const typeElement = document.querySelector(".type");
    if (!typeElement) return;
    
    // Destruir instancia anterior si existe
    if (window.typedInstance) {
        window.typedInstance.destroy();
    }
    
    // Crear nueva instancia
    window.typedInstance = new Typed(".type", {
        strings: ["Frontend", "Backend", "Fullstack Jr", "Web 🌐", "Móvil 📱"],
        typeSpeed: 90,
        backSpeed: 70,
        backDelay: 300,
        loop: true,
    });
    
    return window.typedInstance;
}

// Inicializar Typed al cargar la página
document.addEventListener('DOMContentLoaded', initTyped);

// Reinicializar Typed cuando cambie el idioma
document.addEventListener('languageChanged', initTyped);
