const dlToggle = document.getElementById("dlToggle");
let isLightTheme;

const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  isLightTheme = savedTheme === "light";
} else {
  isLightTheme = prefersDarkMode ? false : true;
}

function setTheme() {
  const body = document.body;

  if (isLightTheme) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    updateImages(
      "./img/robotfacefade2.png",
      "./img/darklight2.png",
      "./img/Python-Dark.svg",
      "./img/Flask-Dark.svg"
    );
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    updateImages(
      "./img/robotfacefade.png",
      "./img/darklight.png",
      "./img/Python-Light.svg",
      "./img/Flask-Light.svg"
    );
  }

  body.classList.add("fade-transition");

  setTimeout(() => {
    body.classList.remove("fade-transition");
  }, 2000);
}

function fadeOutIn(element, newSrc) {
  element.style.transition = "opacity 2s ease";
  element.style.opacity = 0;

  setTimeout(() => {
    element.src = newSrc;
    element.style.opacity = 1;
  }, 1);
}

function appear(element, newSrc) {
  element.style.transition = "opacity 1s ease";
  element.style.opacity = 0;

  setTimeout(() => {
    element.src = newSrc;
    element.style.opacity = 1;
  }, 1);
}

function updateImages(robotFaceSrc, toggleImageSrc, pythonImgSrc, flaskImgSrc) {
  const robotFace = document.getElementById("robotFace");
  const toggleImage = document.getElementById("toggleImage");
  const pythonImg = document.getElementById("pythonImg");
  const flaskImg = document.getElementById("flaskImg");

  if (robotFace) {
    fadeOutIn(robotFace, robotFaceSrc);
  }

  if (toggleImage) {
    fadeOutIn(toggleImage, toggleImageSrc);
  }

  if (pythonImg) {
    appear(pythonImg, pythonImgSrc);
  }

  if (flaskImg) {
    appear(flaskImg, flaskImgSrc);
  }
}

setTheme();

dlToggle.addEventListener("click", () => {
  isLightTheme = !isLightTheme;

  localStorage.setItem("theme", isLightTheme ? "light" : "dark");

  setTheme();
});
