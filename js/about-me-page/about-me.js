import { applyTranslations } from './aboutme-translations.js';
import { createBlobs, handleBlobClick } from './blobs.js';

let preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(preferredLanguage);

  document.getElementById('backButton').addEventListener('click', function () {
    window.location.href = 'index.html';
  });

  createBlobs();
  const audio = new Audio('Kill.mp3'); 

  const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 100}ms`;
    });

  document.body.addEventListener('click', function (event) {
    if (event.target.classList.contains('blob')) {
      handleBlobClick(event, audio);
    }
  });
});
