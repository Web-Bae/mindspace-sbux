const finishElement = document.querySelector('[kc-element="finish"]');
const successLayout = document.querySelector('[kc-element="success"]');
const failLayout = document.querySelector('[kc-element="fail"]');
const steps = document.querySelectorAll('[sf-step]');

const NUM_QUESTIONS = steps.length;

console.log({ NUM_QUESTIONS });

initPage();

window.SuperformAPI = window.SuperformAPI || [];
// Subscribe to listen when Superform is ready
window.SuperformAPI.push(({ getForm }) => {
  const kc1Form = getForm('kc-1');

  kc1Form.onFormSubmit((params) => {
    console.log('submit');
    console.log(params.data); // Returns form data
    console.log(params.stepCount); // Returns current step index
    console.log(params.progress); // Returns current progress percentage
    console.log(params.scores); // Returns scores object
    handleShowFinish(params.scores);
  });

  // kc1Form.onStepChange((params) => {
  //   console.log(params.data); // Returns form data
  //   console.log(params.stepCount); // Returns current step index
  //   console.log(params.progress); // Returns current progress percentage
  //   console.log(params.scores); // Returns scores object
  // });
});

function initPage() {
  finishElement.style.display = 'none';
  successLayout.style.display = 'none';
  failLayout.style.display = 'none';

  finishElement.style.position = 'fixed';
}

function handleShowFinish(scores) {
  console.log({ scores });

  finishElement.style.display = 'block';
  document.body.style.overflow = 'hidden';

  if (scores.total / NUM_QUESTIONS >= 0.7) {
    console.log('success');
    successLayout.style.display = 'flex';
    failLayout.style.display = 'none';
  } else {
    console.log('fail');
    successLayout.style.display = 'none';
    failLayout.style.display = 'flex';
  }
}
