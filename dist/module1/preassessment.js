"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/module1/preassessment.ts
  document.addEventListener("DOMContentLoaded", init);
  function init() {
    const finishSection = document.querySelector(`[assessment="finish"]`);
    const form = document.querySelector(`[data-form="multistep"]`);
    const submitButton = document.querySelector(`[data-form="submit-btn"]`);
    if (!finishSection) {
      console.error("Finish section not found");
      return;
    }
    if (!form) {
      console.error("Form not found");
      return;
    }
    if (!submitButton) {
      console.error("Submit button not found");
      return;
    }
    finishSection.style.display = "none";
    submitButton.addEventListener("click", (event) => {
      console.log("Form submitted");
      event.preventDefault();
      event.stopImmediatePropagation();
      finishSection.style.display = "block";
    });
  }
})();
//# sourceMappingURL=preassessment.js.map
