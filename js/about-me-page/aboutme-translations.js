import { translations } from './about-me-translations.js';

export function applyTranslations(language) {
        document.querySelector('.text-content h2').textContent = translations[language].aboutTitle;
        document.querySelector('.text-content p').textContent = translations[language].aboutText;
        document.querySelector('.download-button').textContent = translations[language].downloadButtonText;
      }
  