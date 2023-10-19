const dlToggle = document.getElementById('dlToggle');
let isLightTheme = true;

dlToggle.addEventListener('click', () => {
    const body = document.body;

    if (isLightTheme) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        robotFace.src = "./img/robfacefade.png";
        toggleImage.src = "./img/darklight.png";
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        robotFace.src = "./img/robfacefade2.png";
        toggleImage.src = "./img/darklight2.png";
    }

    isLightTheme = !isLightTheme;
});