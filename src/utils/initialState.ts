export const initialState = {
  content: {
    'module-1-lesson-1': {
      completed: false,
      started: false,
    },
    'module-1-lesson-2': {
      completed: false,
      started: false,
    },
    'module-2-lesson-1': {
      completed: false,
      started: false,
    },
  },
};

export type StateType = typeof initialState;
export type LessonKey = keyof typeof initialState.content;
