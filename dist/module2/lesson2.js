"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/module2/lesson2.ts
  var startHiddenSection = document.querySelectorAll('[rpa2="start-hidden"]');
  startHiddenSection.forEach((section) => {
    section.style.display = "none";
  });
  var forms = document.querySelectorAll(`[rpa2="question-form"]`);
  forms.forEach((form) => {
    const radioInputs = form.querySelectorAll("input[type=radio]");
    radioInputs.forEach((radioInput) => {
      radioInput.addEventListener("change", (event) => {
        const { target } = event;
        if (!(target instanceof HTMLElement)) {
          console.error("target is not an instance of HTMLElement");
          return;
        }
        const targetParent = target.parentElement;
        if (!targetParent) {
          console.error("target parent is null");
          return;
        }
        const correct = checkAnswer(targetParent);
        updateUi(form, correct);
        const nextSection = document.querySelector(`[rpa2="start-hidden"]`);
        if (correct && nextSection) {
          nextSection.removeAttribute("rpa2");
          nextSection.style.display = "block";
          form.style.pointerEvents = "none";
        }
      });
    });
  });
  function checkAnswer(element) {
    if (!element) {
      console.error("element is null");
      return false;
    }
    const answer = element.getAttribute("rpa2-answer");
    if (!answer) {
      console.error("rpa2-answer attribute is missing");
      return false;
    }
    console.log({ answer });
    if (answer.toLowerCase() === "correct") {
      return true;
    }
    return false;
  }
  function updateUi(form, correct) {
    const feedback = form.querySelector(`[rpa2="message-text"]`);
    if (!feedback) {
      console.error("feedback is null");
      return;
    }
    if (correct) {
      feedback.textContent = "Good job! Scroll down to continue.";
    } else {
      feedback.textContent = "Not quite. Try again!";
    }
    if (feedback.classList.contains("is-hidden")) {
      feedback.classList.remove("is-hidden");
    }
  }
})();
//# sourceMappingURL=lesson2.js.map
