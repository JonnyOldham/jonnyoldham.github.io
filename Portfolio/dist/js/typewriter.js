function typeWriterEffect() {
  const words = ["<HTML>", ".CSS", "{JavaScript}", "[SQL]", ":Python"];

  let wordCount = 0;
  let letterCount = 0;

  let currentText = "";
  let currentWord = "";

  let timeOut = 600;

  let isDeleting = false;

  function type() {
    if (wordCount === words.length) {
      wordCount = 0;
    }

    currentWord = words[wordCount];

    if (isDeleting) {
      currentText = currentWord.slice(0, --letterCount);
    } else {
      currentText = currentWord.slice(0, ++letterCount);
    }

    const cursorElement = document.querySelector(".cursor");

    let textClass = "";
    if (currentWord === "<HTML>") {
      textClass = "orange-text";
    } else if (currentWord === ".CSS") {
      textClass = "blue-text";
    } else if (currentWord === "{JavaScript}") {
      textClass = "yellow-text";
    } else if (currentWord === "[SQL]") {
      textClass = "red-text";
    } else if (currentWord === ":Python") {
      textClass = "green-text";
    }
    cursorElement.textContent = currentText;

    cursorElement.classList.remove(
      "orange-text",
      "blue-text",
      "yellow-text",
      "red-text",
      "green-text"
    );
    cursorElement.classList.add(textClass);

    timeOut = isDeleting ? 60 : 120;

    if (!isDeleting && currentText.length === currentWord.length) {
      timeOut = 1500;
      isDeleting = true;
    } else if (isDeleting && currentText.length === 0) {
      timeOut = 750;
      isDeleting = false;
      wordCount++;
    }

    setTimeout(type, timeOut);
  }

  type();
}

typeWriterEffect();
