import type { LessonKey } from './initialState';

export const getModuleLessonKey = () => {
  const url = new URL(window.location.href);
  const pathname = url.pathname; // Get the full path

  // Split the path by '/' and find the segment that matches 'module-<number>-lesson-<number>'
  const moduleLessonKeyWithHtml = pathname
    .split('/')
    .find((segment) => segment.startsWith('module-') && segment.includes('lesson-'));

  if (!moduleLessonKeyWithHtml) {
    console.error('Module lesson key not found in the URL');
    return null;
  }

  // Remove the .html extension
  const moduleLessonKey = moduleLessonKeyWithHtml.replace('.html', '');

  return moduleLessonKey as LessonKey; // Return the extracted module-lesson key without .html
};
