import { frontendProjects } from './frontendProjects.js';
import { displayProjects } from './displayProjects.js';

export function createTechButtons(language) {
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

export function filterProjects(tech, language) {
        const filteredProjects = frontendProjects.filter(p => p.technologies.includes(tech));
        displayProjects(filteredProjects, language);
}


export function createTechDropdown() {
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

export function setupSearchBar(language) {
        const searchBar = document.getElementById('searchBar');
        searchBar.addEventListener('input', () => {
            const searchQuery = searchBar.value.toLowerCase();
            const filteredProjects = frontendProjects.filter(project => 
                project.title[language].toLowerCase().includes(searchQuery)
            );
            displayProjects(filteredProjects, language);
        });
    }

