export function createProjectCard(project, language) {
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
    card.appendChild(image);
    card.appendChild(content);

    return card;
}