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
      "./img/Python-Dark.svg",
      "./img/Flask-Dark.svg"
    );
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    updateImages(
      "./img/robotfacefade.png",
      "./img/Python-Light.svg",
      "./img/Flask-Light.svg"
    );
  }

  setThemeVisibility();

  body.classList.add("fade-transition");

  setTimeout(() => {
    body.classList.remove("fade-transition");
  }, 2000);
}

function setThemeVisibility() {
  const colorModeLight = document.querySelector(".color-mode-light");
  const colorModeDark = document.querySelector(".color-mode-dark");

  if (isLightTheme) {
    colorModeLight.style.display = "block";
    colorModeDark.style.display = "none";
  } else {
    colorModeLight.style.display = "none";
    colorModeDark.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const lightModeButton = document.getElementById("light-toggle");
  const darkModeButton = document.getElementById("dark-toggle");

  const lightModeContainer = document.getElementById("light-container");
  const darkModeContainer = document.getElementById("dark-container");

  lightModeContainer.addEventListener("mouseover", function () {
    lightModeButton.src = "./img/moon-black-fill.png";
  });

  lightModeContainer.addEventListener("mouseout", function () {
    lightModeButton.src = "./img/moon-black.png";
  });

  darkModeContainer.addEventListener("mouseover", function () {
    darkModeButton.src = "./img/moon-green-fill.png";
  });

  darkModeContainer.addEventListener("mouseout", function () {
    darkModeButton.src = "./img/moon-green.png";
  });
});

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

function updateImages(robotFaceSrc, pythonImgSrc, flaskImgSrc) {
  const robotFace = document.getElementById("robotFace");
  const pythonImg = document.getElementById("pythonImg");
  const flaskImg = document.getElementById("flaskImg");

  if (robotFace) {
    fadeOutIn(robotFace, robotFaceSrc);
  }

  if (pythonImg) {
    appear(pythonImg, pythonImgSrc);
  }

  if (flaskImg) {
    appear(flaskImg, flaskImgSrc);
  }
}

setTheme();

const colorToggleButtons = document.querySelectorAll(".color-toggle-button");

colorToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    isLightTheme = !isLightTheme;
    localStorage.setItem("theme", isLightTheme ? "light" : "dark");
    setTheme();
  });
});