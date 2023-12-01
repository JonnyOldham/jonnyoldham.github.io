function typewriterLine1() {
  const sentence =
    "All of this music is original composition. All images are AI interpretations of my description.";
  let letterCount = 0;
  let currentText = "";
  let timeOut = 60;
  let pauseDuration = 1000;
  let blinkCount = 1;
  let blinkInterval = 500;

  function type() {
    if (letterCount <= sentence.length) {
      currentText = sentence.slice(0, letterCount);
      const textElement = document.getElementById("text1");
      const cursorElement = document.getElementById("cursor2");
      textElement.textContent = currentText;
      cursorElement.textContent = "";

      if (sentence[letterCount - 1] === ".") {
        setTimeout(() => {
          letterCount++;
          type();
        }, pauseDuration);
      } else {
        letterCount++;
        setTimeout(type, timeOut);
      }
    } else {
      function blinkCursor(count) {
        const cursorElement = document.getElementById("cursor2");
        if (count > 0) {
          cursorElement.style.visibility = "visible";
          setTimeout(() => {
            cursorElement.style.visibility = "hidden";
            setTimeout(() => blinkCursor(count - 1), blinkInterval);
          }, blinkInterval);
        } else {
          cursorElement.style.visibility = "hidden";
        }
      }

      blinkCursor(blinkCount);
    }
  }

  type();
}

typewriterLine1();
