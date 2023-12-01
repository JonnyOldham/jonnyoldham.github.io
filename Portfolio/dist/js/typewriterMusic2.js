setTimeout(() => {
  function typewriterLine2() {
    const sentence = "The following are scenes from my imagination.";
    let letterCount = 0;
    let currentText = "";
    let timeOut = 60;

    function type() {
      if (letterCount <= sentence.length) {
        currentText = sentence.slice(0, letterCount);
        const textElement = document.getElementById("text2");
        const cursorElement = document.getElementById("cursor3");
        textElement.textContent = currentText;
        cursorElement.textContent = "";
        cursorElement.style.visibility = "visible";
        letterCount++;
        setTimeout(type, timeOut);
      } else {
        const cursorElement = document.getElementById("cursor3");
        cursorElement.style.visibility = "hidden";
      }
    }

    type();
  }

  typewriterLine2();
}, 8000);
