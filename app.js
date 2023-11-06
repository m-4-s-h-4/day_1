document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('button');
    var body = document.body;

    function toggleBackgroundColor() {
        if (button.textContent.includes("favourite colour")) {
            body.classList.add("orange-bg");
            button.textContent = 'Reset';
        } else {
            body.classList.remove("orange-bg");
            button.textContent = "What's my favourite colour?";
        }
    }

    button.addEventListener('click', toggleBackgroundColor);
});
