"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/module1/kc.js
  var finishElement = document.querySelector('[kc-element="finish"]');
  var successLayout = document.querySelector('[kc-element="success"]');
  var failLayout = document.querySelector('[kc-element="fail"]');
  var NUM_QUESTIONS = 6;
  initPage();
  window.SuperformAPI = window.SuperformAPI || [];
  window.SuperformAPI.push(({ getForm }) => {
    const kc1Form = getForm("kc-1");
    kc1Form.onFormSubmit((params) => {
      console.log("submit");
      console.log(params.data);
      console.log(params.stepCount);
      console.log(params.progress);
      console.log(params.scores);
      handleShowFinish(params.scores);
    });
  });
  function initPage() {
    finishElement.style.display = "none";
    successLayout.style.display = "none";
    failLayout.style.display = "none";
    finishElement.style.position = "fixed";
  }
  function handleShowFinish(scores) {
    console.log({ scores });
    finishElement.style.display = "block";
    document.body.style.overflow = "hidden";
    if (scores.total / NUM_QUESTIONS >= 0.7) {
      console.log("success");
      successLayout.style.display = "flex";
      failLayout.style.display = "none";
    } else {
      console.log("fail");
      successLayout.style.display = "none";
      failLayout.style.display = "flex";
    }
  }
})();
//# sourceMappingURL=kc.js.map
