let preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';

import { frontendProjects } from './frontendProjects.js';
import { translations } from './projects-page-translation.js';

function createProjectCard(project, language) {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const image = document.createElement('img');
    image.src = project.imageUrl;
    image.alt = project.title[language]; 
    image.classList.add('project-image');

    const content = document.createElement('div');
    content.classList.add('project-content');

    const title = document.createElement('h3');
    title.textContent = project.title[language]; 
    title.classList.add('project-title');

    const description = document.createElement('p');
    description.textContent = project.description[language]; 
    description.classList.add('project-description');

    const technologies = document.createElement('p');
    technologies.textContent = 'Technologies: ' + project.technologies.join(', ');
    technologies.classList.add('project-technologies');

    content.appendChild(title);
    content.appendChild(description);
    // content.appendChild(technologies);

    card.appendChild(image);
    card.appendChild(content);

    return card;
}

function applyTranslations(language) {
    document.querySelector('.sidebar h2').textContent = translations[language]['projectsTitle'];
    document.getElementById('searchBar').placeholder = translations[language]['searchPlaceholder'];
    console.log("Applying translations for language:", language);
    console.log("Projects Title:", translations[language]['projectsTitle']);
}

function displayProjects(projects, language) {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    projects.forEach(project => {
        grid.appendChild(createProjectCard(project, language));
    });
}

function createTechButtons(language) {
    const uniqueTechs = new Set();
    frontendProjects.forEach(p => p.technologies.forEach(t => uniqueTechs.add(t)));

    const techButtons = document.getElementById('techButtons');
    techButtons.innerHTML = ''; 
    uniqueTechs.forEach(tech => {
        const button = document.createElement('button');
        button.textContent = tech;
        button.addEventListener('click', () => filterProjects(tech, language));
        techButtons.appendChild(button);
    });
}

function filterProjects(tech, language) {
    const filteredProjects = frontendProjects.filter(p => p.technologies.includes(tech));
    displayProjects(filteredProjects, language);
}

function createTechDropdown() {
    const techDropdown = document.getElementById('techDropdown');
    techDropdown.innerHTML = ''; 
    const uniqueTechs = new Set();
    frontendProjects.forEach(p => p.technologies.forEach(t => uniqueTechs.add(t)));

    uniqueTechs.forEach(tech => {
        const option = document.createElement('option');
        option.value = tech;
        option.textContent = tech;
        techDropdown.appendChild(option);
    });

    techDropdown.addEventListener('change', () => {
        filterProjects(techDropdown.value, preferredLanguage);
    });
}

function setupSearchBar(language) {
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', () => {
        const searchQuery = searchBar.value.toLowerCase();
        const filteredProjects = frontendProjects.filter(project => 
            project.title[language].toLowerCase().includes(searchQuery)
        );
        displayProjects(filteredProjects, language);
    });
}

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
});
