function typewriterEffect() {
    const lines = [
      "Welcome to Grangewood Manor",
      "Feel free to look around.",
      "Stay a while, if you would.",
    ];
  
    const lineDelays = [0, 2000, 5000];
    const typingSpeed = 40;
  
    lines.forEach((line, index) => {
      setTimeout(() => {
        let letterCount = 0;
        let currentText = "";
  
        function type() {
          if (letterCount <= line.length) {
            currentText = line.slice(0, letterCount);
            const elementId = `text${index + 1}`;
            const textElement = document.getElementById(elementId);
            if (textElement) {
              textElement.textContent = currentText;
              letterCount++;
              setTimeout(type, typingSpeed);
            }
          }
        }
  
        type();
      }, lineDelays[index]);
    });
  }
  
  document.addEventListener("DOMContentLoaded", typewriterEffect);
  