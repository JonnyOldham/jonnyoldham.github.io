window.addEventListener("load", function () {
  let navbar = document.querySelector(".recentDocsHeader");
  let navPos = navbar.getBoundingClientRect().top + window.scrollY - 65;
  let recentDocsSection = document.querySelector(".recentDocs");
  let navbarHeight = navbar.offsetHeight;
  let footer = document.querySelector(".sticky-footer");

  window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    if (scrollPos >= navPos) {
      navbar.classList.add("sticky");
      recentDocsSection.style.paddingTop = navbarHeight + "px";
      footer.style.display = "flex";
    } else {
      navbar.classList.remove("sticky");
      recentDocsSection.style.paddingTop = "0px";
      footer.style.display = "none";
    }
  });
});

const input = document.getElementById("input");
const headCenter = document.querySelector(".headCenter");

input.addEventListener("click", (event) => {
  event.stopPropagation();
  headCenter.classList.add("active-headCenter");
});

document.addEventListener("click", (event) => {
  if (event.target !== input) {
    headCenter.classList.remove("active-headCenter");
  }
});
