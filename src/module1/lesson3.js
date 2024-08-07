document.addEventListener('DOMContentLoaded', init);

function init() {
  const finishEl = document.querySelector('[rpa1="finish"]');
  finishEl.style.display = 'none';
}

window.SuperformAPI = window.SuperformAPI || [];
// Subscribe to listen when Superform is ready
window.SuperformAPI.push(({ getForm }) => {
  const kc1Form = getForm('rpa1');

  kc1Form.onFormSubmit((params) => {
    console.log('submit');
    const finishEl = document.querySelector('[rpa1="finish"]');

    finishEl.style.display = 'block';
  });
});
