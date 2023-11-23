import { createProjectCard } from './projectCard.js';

export function displayProjects(projects, language) {
        const grid = document.getElementById('projectsGrid');
        grid.innerHTML = '';
        projects.forEach(project => {
            grid.appendChild(createProjectCard(project, language));
        });
}
