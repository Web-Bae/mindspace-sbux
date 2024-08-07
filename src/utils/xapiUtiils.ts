import XAPI, { type Agent, type Statement } from '@xapi/xapi';

import { ATTRIBUTES } from './attributes';
import { getModuleLessonKey } from './getModuleLessonKey';
import { initialState, type StateType } from './initialState';

type ExtendedActor = {
  objectType: 'Agent';
  name: string;
  account: {
    homePage: string;
    name: string;
  };
};

let xapi: XAPI;
let agent: Agent;
// let state: StateType | null = null;

const BASE_URL = `https://starbucks.com/starbucks-brand-training/`;
let stateId = `${BASE_URL}/states/`;

// Function to initialize xAPI
export const initializeXAPI = async () => {
  const tinCanLaunchData = XAPI.getTinCanLaunchData();

  const endpoint = tinCanLaunchData?.endpoint;
  const auth = tinCanLaunchData?.auth;

  console.log({ tinCanLaunchData });

  if (!endpoint || !auth) {
    console.error('Missing endpoint or auth');
    alert('Missing endpoint or auth');
    return;
  }

  xapi = new XAPI({
    endpoint,
    auth,
  });

  const actor = tinCanLaunchData.actor as ExtendedActor;

  if (!actor) {
    console.error('Missing actor');
    alert('Missing actor');
    return;
  }

  stateId += actor.account.name.split('|')[1];

  await initializeState(actor);
};

/**
 * Function to initialize the state
 * If the state already exists, it will not be re-initialized
 * If the state does not exist, it will be created
 */
const initializeState = async (actor: ExtendedActor) => {
  console.log('initializeState');
  agent = {
    objectType: 'Agent',
    name: actor.name,
    mbox: `mailto:${actor.account.name.split('|')[1]}`,
  };

  const activityId = `${BASE_URL}/activities/${getModuleLessonKey()}`;

  try {
    const retrievedState = (await xapi.getState({
      agent,
      activityId,
      stateId,
    })) as unknown as { data: StateType }; // Cast to match the expected type

    if (retrievedState.data) {
      console.log('state already exists');
      console.log({ retrievedState });
      return;
    }
  } catch (error) {
    console.log('Error retrieving state:', error);
    const err = error as { response: { status: number } }; // Cast to expected AxiosError type
    if (err.response && err.response.status === 404) {
      console.log('State not found, proceeding to create a new state');
    } else {
      console.error('Error retrieving state:', error);
      return;
    }
  }

  try {
    const createdState = (await xapi.createState({
      agent: agent,
      activityId,
      stateId,
      state: { ...initialState },
    })) as unknown as { data: StateType }; // Cast to match the expected type
    console.log('state initialized');
    console.log({ createdState });
  } catch (error) {
    console.error('Error creating state:', error);
  }
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
 */
export const startLesson = async () => {
  console.log('startLesson');
  const lessonKey = getModuleLessonKey();
  console.log({ lessonKey });

  if (!lessonKey) {
    console.error('Lesson key not found');
    return;
  }

  const activityId = `${BASE_URL}/activities/${lessonKey}`;

  const retrievedState = (await xapi.getState({
    agent: agent,
    activityId,
    stateId,
  })) as unknown as { data: StateType };

  console.log({ retrievedState });

  const started = retrievedState.data.content[lessonKey]?.started;

  console.log({ started });

  if (started) {
    console.log('Lesson already started');
    return;
  }

  retrievedState.data.content[lessonKey].started = true;

  try {
    await xapi.setState({
      agent: agent,
      activityId,
      stateId,
      state: { ...retrievedState.data },
    });
    console.log('State updated successfully');
  } catch (error) {
    console.error('Error updating state:', error);
    return;
  }

  const statement: Statement = {
    actor: agent,
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/launched',
      display: {
        'en-US': 'launched',
      },
    },
    object: {
      id: activityId,
      definition: {
        name: {
          'en-US': lessonKey,
        },
      },
    },
    timestamp: new Date().toISOString(),
  };

  await sendStatement(statement);

  const newState = await xapi.getState({
    agent: agent,
    activityId,
    stateId,
  });
  console.log({ newState });
};

/**
 * Complete a lesson
 */
export const completeLesson = async () => {
  console.log('completeLesson');
  const lessonKey = getModuleLessonKey();

  if (!lessonKey) {
    console.error('Lesson key not found');
    return;
  }

  const activityId = `${BASE_URL}/activities/${lessonKey}`;

  const retrievedState = (await xapi.getState({
    agent: agent,
    activityId,
    stateId,
  })) as unknown as { data: StateType };

  console.log({ retrievedState });

  const completed = retrievedState.data.content[lessonKey]?.completed;

  console.log({ completed });

  if (completed) {
    console.log('Lesson already completed');
    return;
  }

  retrievedState.data.content[lessonKey].completed = true;

  try {
    await xapi.setState({
      agent: agent,
      activityId,
      stateId,
      state: { ...retrievedState.data },
    });
    console.log('State updated successfully');
  } catch (error) {
    console.error('Error updating state:', error);
    return;
  }

  const statement: Statement = {
    actor: agent,
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/completed',
      display: {
        'en-US': 'completed',
      },
    },
    object: {
      id: activityId,
      definition: {
        name: {
          'en-US': lessonKey,
        },
      },
    },
    timestamp: new Date().toISOString(),
  };

  await sendStatement(statement);

  const newState = await xapi.getState({
    agent: agent,
    activityId,
    stateId,
  });
  console.log({ newState });
};

// Function to setup xAPI actions
export const setupxapiActions = async () => {
  const xapiActionItems = document.querySelectorAll<HTMLElement>(`[${ATTRIBUTES.ACTIONS.NAME}]`);

  xapiActionItems.forEach((item) => {
    item.addEventListener('click', async (event: Event) => {
      event.preventDefault();
      const action = item.getAttribute(ATTRIBUTES.ACTIONS.NAME);
      switch (action) {
        case ATTRIBUTES.ACTIONS.VALUES.LESSON_COMPLETE:
          await completeLesson();
          // navigate to the next lesson
          const href = event.target instanceof HTMLAnchorElement ? event.target.href : '';
          window.location.href = href;
          break;
        default:
          console.error('Unknown action:', action);
      }
    });
  });
};
