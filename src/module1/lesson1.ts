import { completeLesson, initializeXAPI, startLesson } from '$utils/xapiUtiils';

document.addEventListener('DOMContentLoaded', init);

async function init() {
  const MODULE = 1;
  const LESSON = 1;

  initializeXAPI();
  await startLesson(MODULE, LESSON);
  const xapiActionItems = document.querySelectorAll<HTMLElement>('[xapi-action]');

  xapiActionItems.forEach((item) => {
    item.addEventListener('click', async (event: Event) => {
      event.preventDefault();
      const action = item.getAttribute('xapi-action');
      switch (action) {
        case 'lesson-completed':
          await completeLesson(MODULE, LESSON);
          // navigate to the next lesson
          const href = event.target instanceof HTMLAnchorElement ? event.target.href : '';
          window.location.href = href;
          break;
        default:
          console.error('Unknown action:', action);
      }
    });
  });
}
