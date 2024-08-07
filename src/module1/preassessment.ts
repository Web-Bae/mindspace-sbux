document.addEventListener('DOMContentLoaded', init);

function init() {
  const finishSection = document.querySelector<HTMLElement>(`[assessment="finish"]`);
  const form = document.querySelector<HTMLFormElement>(`[data-form="multistep"]`);
  const submitButton = document.querySelector<HTMLButtonElement>(`[data-form="submit-btn"]`);

  if (!finishSection) {
    console.error('Finish section not found');
    return;
  }

  if (!form) {
    console.error('Form not found');
    return;
  }

  if (!submitButton) {
    console.error('Submit button not found');
    return;
  }

  finishSection.style.display = 'none';

  submitButton.addEventListener('click', (event) => {
    console.log('Form submitted');
    event.preventDefault();
    event.stopImmediatePropagation();
    finishSection.style.display = 'block';
  });
}
