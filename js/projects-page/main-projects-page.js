import { createTechButtons, createTechDropdown, setupSearchBar} from './projectFilters.js';
import { applyTranslations } from './translationsProjects.js';
import { displayProjects } from './displayProjects.js';
import { frontendProjects } from './frontendProjects.js';

let preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    applyTranslations(preferredLanguage);
    createTechButtons(preferredLanguage);
    createTechDropdown();
    setupSearchBar(preferredLanguage);
    displayProjects(frontendProjects, preferredLanguage);

    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    document.querySelector('.sidebar').classList.add('fade-in');
    frontendProjects.forEach(() => {
        document.querySelectorAll('.project-card').forEach(card => card.classList.add('fade-in'));
    });
});

