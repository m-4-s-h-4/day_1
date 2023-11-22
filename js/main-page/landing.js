document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let lastX, lastY;
    let isOver=false;

    document.addEventListener('mousemove', e => {
        lastX = e.clientX;
        lastY = e.clientY;
        if(!isOver) {
            requestAnimationFrame(() => {
                if (cursor) {
                    cursor.style.left = lastX + 'px';
                    cursor.style.top = lastY + 'px';
                }
            });
        };
    });

    document.querySelectorAll('.thumbnail').forEach(item => {
        item.addEventListener('mouseover', event => {
            const mainImage = document.getElementById('main-image');
            mainImage.style.backgroundImage = `url('${event.target.src}')`;
        });
    });

    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', (e) => {
            isOver=true;
            cursor.classList.add('custom-cursor--hover');
            let rect = e.target.getBoundingClientRect();
            let circleRect = cursor.getBoundingClientRect();

            let rectX = rect.x + rect.width / 2;
            let rectY = rect.y + rect.height / 2;

            let cursorX = lastX + circleRect.width / 2;
            let cursorY = lastY + circleRect.height / 2;
            
            let circleX = cursorX - rectX;
            let circleY = cursorY - rectY;

            cursor.style.transform=`translate(${-circleX}px, ${-circleY}px)`;
            console.log(circleX, circleY)
        });
        thumbnail.addEventListener('mouseout', () => {
            isOver=false;
            cursor.classList.remove('custom-cursor--hover');
            cursor.style.transform="";
        });
    });

    if (window.innerWidth <= 1060) {
        let currentIndex = 0;
        const images = document.querySelectorAll('.thumbnail');
        const mainImage = document.getElementById('main-image');

        setInterval(() => {
            mainImage.style.backgroundImage = `url('${images[currentIndex].src}')`;
            currentIndex = (currentIndex + 1) % images.length; 
        }, 3000); 
    }
});

document.addEventListener('scroll', () => {
    const section1 = document.getElementById('section1'); 
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');
    const section1Top = section1.getBoundingClientRect().top;
    const section2Top = section2.getBoundingClientRect().top;
    const section3Top = section3.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (section1Top <= viewportHeight && section1Top >= 0) {
        document.body.style.backgroundColor = ''; 
    } else if (section2Top <= viewportHeight && section2Top >= 0) {
        document.body.style.backgroundColor = 'rgb(21, 21, 21)';
    } else if (section3Top <= viewportHeight && section3Top >= 0) {
        document.body.style.backgroundColor = 'rgb(44,4,12)'; 
    }
});
document.getElementById('switchToEnglish').addEventListener('click', () => {
    console.log("English button clicked");
    changeLanguage('en');
});

document.getElementById('switchToSpanish').addEventListener('click', () => {
    changeLanguage('es');
});

function changeLanguage(language) {
    localStorage.setItem('preferredLanguage', language);
    document.querySelectorAll("[data-key]").forEach(elem => {
        let key = elem.getAttribute('data-key');
        let keys = key.split(".");
        let translationObj = translations;
        for (let k of keys) {
            if (translationObj[k]) {
                translationObj = translationObj[k];
            } else {
                return; 
            }
        }
        let translationText = translationObj[language];
        if (elem.tagName === "IMG") {
            elem.alt = translationText;
        } else {
            elem.textContent = translationText;
        }
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const projectButton = document.getElementById('AboutMeButton');
    
    projectButton.addEventListener('click', function() {
        window.location.href = 'about-me.html'; 
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const projectButton = document.getElementById('ProjectButton');
    
    projectButton.addEventListener('click', function() {
        window.location.href = 'projects.html'; 
    });
});








