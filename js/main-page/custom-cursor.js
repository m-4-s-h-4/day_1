//custom cursor
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let lastX, lastY;
    let isOver = false;

    document.addEventListener('mousemove', e => {
        lastX = e.clientX;
        lastY = e.clientY;
        if (!isOver) {
            requestAnimationFrame(() => {
                cursor.style.left = `${lastX}px`;
                cursor.style.top = `${lastY}px`;
            });
        }
    });

    // thumnail hoover
    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', e => {
            isOver = true;
            cursor.classList.add('custom-cursor--hover');
            const rect = e.target.getBoundingClientRect();
            const circleRect = cursor.getBoundingClientRect();

            const rectX = rect.x + rect.width / 2;
            const rectY = rect.y + rect.height / 2;

            const cursorX = lastX + circleRect.width / 2;
            const cursorY = lastY + circleRect.height / 2;

            const circleX = cursorX - rectX;
            const circleY = cursorY - rectY;

            // position cursor at the center of thumbnail
            cursor.style.transform = `translate(${-circleX}px, ${-circleY}px)`;
        });

        thumbnail.addEventListener('mouseout', () => {
            isOver = false;
            cursor.classList.remove('custom-cursor--hover');
            cursor.style.transform = "";
        });
    });

    //automatic image switch for smaller screens that dont have mouse
    if (window.innerWidth <= 1060) {
        let currentIndex = 0;
        const images = document.querySelectorAll('.thumbnail');
        const mainImage = document.getElementById('main-image');

        //rotate images every 3 seconds
        setInterval(() => {
            mainImage.style.backgroundImage = `url('${images[currentIndex].src}')`;
            currentIndex = (currentIndex + 1) % images.length;
        }, 3000);
    }
});





