import type { LessonKey } from './initialState';

export const getModuleLessonKey = () => {
  const url = new URL(window.location.href);
  const pathname = url.pathname.substring(1) as LessonKey;
  return pathname;
};
