const changeLanguage = language => {
    localStorage.setItem('preferredLanguage', language);
    document.querySelectorAll("[data-key]").forEach(elem => {
        const key = elem.getAttribute('data-key');
        const keys = key.split(".");
        let translationObj = translations;
        for (const k of keys) {
            if (translationObj[k]) {
                translationObj = translationObj[k];
            } else {
                return;
            }
        }
        const translationText = translationObj[language];
        if (elem.tagName === "IMG") {
            elem.alt = translationText;
        } else {
            elem.textContent = translationText;
        }
    });
};

document.getElementById('switchToEnglish').addEventListener('click', () => {
    console.log("English button clicked");
    changeLanguage('en');
});

document.getElementById('switchToSpanish').addEventListener('click', () => {
    changeLanguage('es');
});
