document.addEventListener('DOMContentLoaded', () => {
    const aboutMeButton = document.getElementById('AboutMeButton');
    aboutMeButton.addEventListener('click', () => window.location.href = 'about-me.html');

    const projectButton = document.getElementById('ProjectButton');
    projectButton.addEventListener('click', () => window.location.href = 'projects.html');
});