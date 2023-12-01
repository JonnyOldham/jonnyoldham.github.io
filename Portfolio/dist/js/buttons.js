document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      button.classList.add("button-clicked");
      setTimeout(function () {
        button.classList.remove("button-clicked");
      }, 300);
    });
  });
});
