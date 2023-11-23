export function createBlobs() {
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
  
  export function handleBlobClick(event, audio) {
    audio.play();
    event.target.style.background = 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)';
  }
  