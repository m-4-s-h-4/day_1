import { translations } from './about-me-translations.js';

let preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(preferredLanguage);

  document.getElementById('backButton').addEventListener('click', function () {
    window.location.href = 'index.html';
  });

  createBlobs();
  const audio = new Audio('Kill.mp3');

  document.body.addEventListener('click', function (event) {
    if (event.target.classList.contains('blob')) {
      handleBlobClick(event, audio);
    }
  });
});

function applyTranslations(language) {
  document.querySelector('.text-content h2').textContent = translations[language].aboutTitle;
  document.querySelector('.text-content p').textContent = translations[language].aboutText;
  document.querySelector('.download-button').textContent = translations[language].downloadButtonText;
}

function createBlobs() {
  for (let i = 0; i < 4; i++) {
    let blob = document.createElement('div');
    blob.classList.add('blob');
    const size = Math.random() * 200 + 100;
    blob.style.width = `${size}px`;
    blob.style.height = `${size}px`;
    blob.style.left = `${Math.random() * (100 - (size / window.innerWidth) * 100)}%`;
    blob.style.top = `${Math.random() * (100 - (size / window.innerHeight) * 100)}%`;

    document.body.appendChild(blob);
  }
}

function handleBlobClick(event, audio) {
  audio.play();
  event.target.style.background = 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)';
}
