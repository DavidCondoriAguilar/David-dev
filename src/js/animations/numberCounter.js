// Animación de números en estadísticas
export function initNumberCounters() {
    const stats = document.querySelectorAll('.stat-number');
    
    const animate = (stat) => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; 
        const increment = target / (duration / 16);
        let current = 0;

        const updateCount = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target;
            }
        };

        updateCount();
    };

    // Usar Intersection Observer para activar la animación cuando el elemento sea visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observar cada elemento de estadística
    stats.forEach(stat => {
        observer.observe(stat);
    });
}

// Inicializar contadores cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initNumberCounters);
