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
    const section2 = document.getElementById('section2');
    const section2Top = section2.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (section2Top <= viewportHeight / 2) {
        document.body.style.backgroundColor = 'rgb(21, 21, 21)';
    } else {
        document.body.style.backgroundColor = ''; 
    }
});






