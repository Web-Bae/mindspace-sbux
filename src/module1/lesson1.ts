import { initializeXAPI, setupxapiActions, startLesson } from '$utils/xapiUtiils';

document.addEventListener('DOMContentLoaded', init);

async function init() {
  await initializeXAPI();
  await setupxapiActions();
  await startLesson();
}
