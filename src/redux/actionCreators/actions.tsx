import {
  PUT,
  FETCH_ALL_TAGS,
  FETCH_TASK_BY_ID,
  PUT_TASK_BY_ID,
  UPDATE_DATE_TIME,
  FETCH_TAG_BY_ID,
  PUT_TAG,
  POST_TAG,
  POST,
  FETCH_ALL_TASKS,
  FLASH_MESSAGE,
  FLASH_MESSAGE_TYPES,
  TOGGLE_DARK_MODE,
} from '../../utils/constants';
import {
  DarkModeAction,
  RequestAction,
  RequestPostPutAction,
  RequestPostPutFlashAction
} from 'interfaces/redux/actions';
import { EditDateTimeInterface } from 'interfaces/pages/tasks/Task';

export const toggleDarkMode = (isDarkMode: boolean): DarkModeAction<'TOGGLE_DARK_MODE'> => {
  return {
    type: TOGGLE_DARK_MODE,
    isDarkMode
  };
};

// Tasks
export const fetchAllTasks = (): RequestAction<'FETCH_ALL_TASKS'> => {
  return {
    type: FETCH_ALL_TASKS,
    url: `tasks`,
    requestApi: true,
  };
};

export const fetchTaskById = (taskId: string): RequestAction<'FETCH_TASK_BY_ID'> => {
  return {
    type: FETCH_TASK_BY_ID,
    url: `task/${taskId}`,
    requestApi: true,
  };
};

interface Body { }

export const putTaskById = (body: Body): RequestPostPutFlashAction<'PUT_TASK_BY_ID'> => {
  return {
    type: PUT_TASK_BY_ID,
    url: `task`,
    method: PUT,
    body,
    requestApi: true,
    isFlash: true,
    flashMessage: 'Saved task',
  };
};

// Date Time
interface Config {
  body: EditDateTimeInterface;
  taskId: String;
  dateTimeId: String;
}

export const putDateTime = (config: Config): RequestPostPutAction<'UPDATE_DATE_TIME'> => {
  const { taskId, dateTimeId, body } = config;

  return {
    type: UPDATE_DATE_TIME,
    url: `task/${taskId}/dateTime/${dateTimeId}`,
    method: PUT,
    body,
    requestApi: true,
  };
};

// Tags
export const fetchAllTags = (): RequestAction<'FETCH_ALL_TAGS'> => {
  return {
    type: FETCH_ALL_TAGS,
    url: `tags`,
    requestApi: true,
  };
};

export const fetchTagById = (tagId: string): RequestAction<'FETCH_TAG_BY_ID'> => {
  return {
    type: FETCH_TAG_BY_ID,
    url: `tag/${tagId}`,
    requestApi: true,
  };
};

export const putTag = (body: Body): RequestPostPutFlashAction<'PUT_TAG'> => {
  return {
    type: PUT_TAG,
    url: 'tag',
    method: PUT,
    isFlash: true,
    flashMessage: 'success',
    body,
    requestApi: true,
  };
};

export const postTag = (body: Body): RequestPostPutAction<'POST_TAG'> => ({
  type: POST_TAG,
  url: 'tag',
  method: POST,
  // isFlash: true,
  body,
  requestApi: true,
});

// Flash Message
export const setFlashMessageAction = (status: FLASH_MESSAGE_TYPES, message: string | null = null) => ({
  type: FLASH_MESSAGE,
  status,
  message: message,
});