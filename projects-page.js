import { frontendProjects } from './js/projects-page/frontendProjects.js';

function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const image = document.createElement('img');
    image.src = project.imageUrl;
    image.alt = project.title;
    image.classList.add('project-image');

    const content = document.createElement('div');
    content.classList.add('project-content');

    const title = document.createElement('h3');
    title.textContent = project.title;
    title.classList.add('project-title');

    const description = document.createElement('p');
    description.textContent = project.description;
    description.classList.add('project-description');

    const technologies = document.createElement('p');
    technologies.textContent = 'Technologies: ' + project.technologies.join(', ');
    technologies.classList.add('project-technologies');

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(technologies);

    card.appendChild(image);
    card.appendChild(content);

    return card;
}

function displayProjects(projects) {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    projects.forEach(project => {
        grid.appendChild(createProjectCard(project));
    });
}

function createTechButtons() {
    const uniqueTechs = new Set();
    frontendProjects.forEach(p => p.technologies.forEach(t => uniqueTechs.add(t)));

    const techButtons = document.getElementById('techButtons');
    techButtons.innerHTML = ''; 
    uniqueTechs.forEach(tech => {
        const button = document.createElement('button');
        button.textContent = tech;
        button.addEventListener('click', () => filterProjects(tech));
        techButtons.appendChild(button);
    });
}

function filterProjects(tech) {
    const filteredProjects = frontendProjects.filter(p => p.technologies.includes(tech));
    displayProjects(filteredProjects);
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
        filterProjects(techDropdown.value);
    });
}

function setupSearchBar() {
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', () => {
        const searchQuery = searchBar.value.toLowerCase();
        const filteredProjects = frontendProjects.filter(project => 
            project.title.toLowerCase().includes(searchQuery)
        );
        displayProjects(filteredProjects);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createTechButtons();
    createTechDropdown();
    setupSearchBar();
    displayProjects(frontendProjects);
});
