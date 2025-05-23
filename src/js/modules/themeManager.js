export class ThemeManager {
    constructor() {
        this.themeSwitch = document.getElementById('theme-switch');
        this.init();
    }

    init() {
        // Cargar preferencia de tema guardada
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Establecer tema inicial
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            this.setTheme('dark');
            if (this.themeSwitch) this.themeSwitch.checked = true;
        } else {
            this.setTheme('light');
            if (this.themeSwitch) this.themeSwitch.checked = false;
        }

        // Configurar evento del interruptor de tema
        if (this.themeSwitch) {
            this.themeSwitch.addEventListener('change', () => {
                this.setTheme(this.themeSwitch.checked ? 'dark' : 'light');
            });
        }
    }

    setTheme(theme) {
        const htmlElement = document.documentElement;
        
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }
}

// Inicializar el gestor de temas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});
