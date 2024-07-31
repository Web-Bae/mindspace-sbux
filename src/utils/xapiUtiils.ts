// utils/xapiUtils.js

import XAPI, { type Statement } from '@xapi/xapi';

let xapi: XAPI;

// Function to initialize xAPI
export const initializeXAPI = () => {
  // get query params from URL
  const urlParams = new URLSearchParams(window.location.search);
  const appId = urlParams.get('appId');
  const secretKey = urlParams.get('key');

  if (!appId || !secretKey) {
    console.error('Missing appId or secretKey query param');
    alert('Missing appId or secretKey query param');
    return;
  }

  const endpoint = `https://cloud.scorm.com/tc/${appId}`;
  const username = appId;
  const password = secretKey;
  const auth = XAPI.toBasicAuth(username, password);

  xapi = new XAPI({
    endpoint: endpoint,
    auth: auth,
  });

  console.log('xapi initialized', xapi);
};

/**
 * Helper function to send statements
 * @param {Statement} statement - The xAPI statement to send
 */
const sendStatement = async (statement: Statement) => {
  try {
    const response = await xapi.sendStatement({ statement });
    console.log('Statement sent successfully:', response);
  } catch (error) {
    console.error('Error sending statement:', error);
  }
};

/**
 * Start a lesson
 * @param {string} moduleId - The ID of the module
 * @param {string} lessonId - The ID of the lesson
 */
export const startLesson = async (moduleId: number, lessonId: number) => {
  const lessonName = `Module ${moduleId}: Lesson ${lessonId}`;
  const statement: Statement = {
    actor: {
      name: 'Test User',
      mbox: 'mailto:anonymous@example.com',
    },
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/initialized',
      display: {
        'en-US': 'initialized',
      },
    },
    object: {
      id: `http://example.com/activities/${moduleId}-${lessonId}`,
      definition: {
        name: {
          'en-US': lessonName,
        },
      },
    },
    timestamp: new Date().toISOString(),
  };

  await sendStatement(statement);
};

/**
 * Complete a lesson
 * @param {string} moduleId - The ID of the module
 * @param {string} lessonId - The ID of the lesson
 */
export const completeLesson = async (moduleId: number, lessonId: number) => {
  const lessonName = `Module ${moduleId}: Lesson ${lessonId}`;
  const statement: Statement = {
    actor: {
      name: 'Test User',
      mbox: 'mailto:anonymous@example.com',
    },
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/completed',
      display: {
        'en-US': 'completed',
      },
    },
    object: {
      id: `http://example.com/activities/${moduleId}-${lessonId}`,
      definition: {
        name: {
          'en-US': lessonName,
        },
      },
    },
    timestamp: new Date().toISOString(),
  };

  await sendStatement(statement);
};
