import { translations } from './projects-page-translation.js';

export function applyTranslations(language) {
        document.querySelector('.sidebar h2').textContent = translations[language]['projectsTitle'];
        document.getElementById('searchBar').placeholder = translations[language]['searchPlaceholder'];
    }
