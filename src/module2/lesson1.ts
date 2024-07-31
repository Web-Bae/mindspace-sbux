import { initializeXAPI, startLesson } from '$utils/xapiUtiils';

document.addEventListener('DOMContentLoaded', init);

async function init() {
  initializeXAPI();
  await startLesson(2, 1);
}
