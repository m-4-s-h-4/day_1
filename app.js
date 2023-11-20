document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let lastX, lastY;

    document.addEventListener('mousemove', e => {
        lastX = e.clientX;
        lastY = e.clientY;
        requestAnimationFrame(() => {
            if (cursor) {
                cursor.style.left = lastX + 'px';
                cursor.style.top = lastY + 'px';
            }
        });
    });

    document.querySelectorAll('.thumbnail').forEach(item => {
        item.addEventListener('mouseover', event => {
            const mainImage = document.getElementById('main-image');
            mainImage.style.backgroundImage = `url('${event.target.src}')`;
        });
    });

    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', () => cursor.classList.add('custom-cursor--hover'));
        thumbnail.addEventListener('mouseout', () => cursor.classList.remove('custom-cursor--hover'));
    });
});
