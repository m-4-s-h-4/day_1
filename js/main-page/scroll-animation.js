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
        document.body.style.backgroundColor = 'rgb(95, 0, 0)';
    }
});
