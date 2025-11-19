import { translations } from '../data/translations.js';

export function initLanguage() {
    let currentLang = localStorage.getItem('language') || 'es';
    const langSwitch = document.getElementById('lang-switch');

    if (!langSwitch) return;

    // Init state
    if (currentLang === 'en') {
        langSwitch.checked = true;
    }
    updateText(currentLang);

    // Event listener
    langSwitch.addEventListener('change', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('language', currentLang);
        updateText(currentLang);

        // Dispatch event for other components that might need to know (like Typed.js)
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: currentLang } }));
    });
}

function updateText(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const langKey = element.getAttribute('data-lang');
        if (translations[lang][langKey]) {
            if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                element.placeholder = translations[lang][langKey];
            } else if (element.id !== 'typed-text') {
                element.textContent = translations[lang][langKey];
            }
        }
    });
}
