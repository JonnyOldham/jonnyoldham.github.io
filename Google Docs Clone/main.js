
// Prior to beginning this bootcamp I've been doing code-alongs on YouTube, so I've managed to pick up some basic JavaScript concepts. I thought I'd implement a couple of bits here to make the surface-level UI of my clone function as close to the original Google Docs UI as possible.



// Sticky Navbar & footer functions

// Happily, as alluded to in the HTML I was able to use one function to operate both my sticky navbar and my sticky footer. I learned about event listeners in a weather-app code-along which is what gave me the idea of implementing them here!

// The offsetting is what really puzzled me here. Trying to figure out if the nesting of my elements in the HTML was interfering was also quite time-consuming. That '-65' at the end of the navPos declaration line took me two hours to figure out.

window.addEventListener("load", function () {
    let navbar = document.querySelector(".recentDocsHeader");
    let navPos = navbar.getBoundingClientRect().top + window.scrollY - 65;
    let recentDocsSection = document.querySelector(".recentDocs");
    let navbarHeight = navbar.offsetHeight;
    let footer = document.querySelector(".sticky-footer");

    window.addEventListener("scroll", function () {
        let scrollPos = window.scrollY;
        if (scrollPos >= navPos) {
            navbar.classList.add('sticky');
            recentDocsSection.style.paddingTop = navbarHeight + 'px';
            footer.style.display = 'flex';
        } else {
            navbar.classList.remove('sticky');
            recentDocsSection.style.paddingTop = '0px';
            footer.style.display = 'none';
        }
    });
});

// Search bar styling functionality (because 'click' apparently isn't a pseudo class :( )

// I couldn't find a way to do this purely with CSS. If a way exists I'm sure I'll come across it, but for now I could only think to do it with event listeners controlling my CSS classes.

// I did this also because the text input box that triggers the change is nested inside the element to which the change is being applied.

const input = document.getElementById('input');
const headCenter = document.querySelector('.headCenter');

input.addEventListener('click', (event) => {
    event.stopPropagation();
    headCenter.classList.add('active-headCenter');
});

document.addEventListener('click', (event) => {
    if (event.target !== input) {
        headCenter.classList.remove('active-headCenter');
    }
});