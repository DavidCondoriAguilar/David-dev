import { initLoader } from './modules/loader.js';
import { initTheme } from './modules/theme.js';
import { initLanguage } from './modules/language.js';
import { initSlider } from './modules/slider.js';
import { initAnimations } from './modules/animations.js';
import { initNavbar } from './modules/navbar.js';
import { initAudio } from './modules/audio.js';

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initTheme();
    initLanguage();
    initSlider();
    initAnimations();
    initNavbar();
    initAudio();
});
