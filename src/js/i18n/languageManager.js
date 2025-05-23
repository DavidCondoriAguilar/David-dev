import { translations } from './translations.js';

export class LanguageManager {
    constructor() {
        this.currentLang = 'es';
        this.init();
    }

    init() {
        // Cargar preferencia de idioma guardada
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            this.setLanguage(savedLang);
        } else {
            // Detectar idioma del navegador
            const browserLang = navigator.language || navigator.userLanguage;
            const langCode = browserLang.startsWith('es') ? 'es' : 'en';
            this.setLanguage(langCode);
        }

        // Configurar el evento del interruptor de idioma
        const langSwitch = document.getElementById('lang-switch');
        if (langSwitch) {
            langSwitch.checked = this.currentLang === 'en';
            langSwitch.addEventListener('change', () => {
                this.setLanguage(langSwitch.checked ? 'en' : 'es');
            });
        }
    }

    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('language', lang);
            this.updateText();
            document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
        }
    }

    updateText() {
        // Actualizar textos en la página
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[this.currentLang] && translations[this.currentLang][key]) {
                element.textContent = translations[this.currentLang][key];
            }
        });
    }

    getTranslation(key) {
        return translations[this.currentLang]?.[key] || key;
    }
}

// Inicializar el gestor de idiomas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});
