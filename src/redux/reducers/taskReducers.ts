import { combineReducers } from 'redux';
import { FETCH_TASK_BY_ID, FETCH_TASK_BY_ID_RESPONSE_SUCCESS, PUT_TASK_BY_ID, PUT_TASK_BY_ID_RESPONSE_SUCCESS, UPDATE_DATE_TIME_RESPONSE } from '../types';
import { ResponseAction, Tag } from 'interfaces/redux/reducers';
import { DateTimeInterface } from 'interfaces/pages/tasks/Task';

interface TaskAction {
  _id: string;
  contractId: number;
  description: string;
  date: string;
  tags: Tag[];
  time?: number;
  dateTimes: DateTimeInterface[];
}

interface TagAction {
  items: any;
}

export const responseTaskReducer = (state = null, action: any) => {
  switch (action.type) {
    case FETCH_TASK_BY_ID:
    case FETCH_TASK_BY_ID_RESPONSE_SUCCESS:
      return action.data;
    case PUT_TASK_BY_ID_RESPONSE_SUCCESS:
      return {
        ...action.data.items,
      };
    default:
      return state;
  }
};

// export const responseTimeByTaskIdReducer = (state = null, action: ResponseAction<'FETCH_TASK_BY_ID_RESPONSE', TaskAction>) => {
//   switch (action.type) {
//     case FETCH_TASK_BY_ID_RESPONSE:
//       return action.data?.time;
//     default:
//       return state;
//   }
// };

// export const putTaskByIdReducer = (state = null, action: ResponseAction<'PUT_TASK_BY_ID', TaskAction>) => {
//   switch (action.type) {
//     case PUT_TASK_BY_ID:
//       return action.data;
//     default:
//       return state;
//   }
// };

export const putDateTimeReducer = (state = null, action: ResponseAction<'UPDATE_DATE_TIME_RESPONSE', TagAction>) => {
  switch (action.type) {
    case UPDATE_DATE_TIME_RESPONSE:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  // fetchTaskByIdReducer: fetchTaskByIdReducer,
  taskById: responseTaskReducer,
  // time: responseTimeByTaskIdReducer,
});
