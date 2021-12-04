import { combineReducers } from 'redux';
import { FETCH_TASK_BY_ID, FETCH_TASK_BY_ID_RESPONSE_SUCCESS, PUT_TASK_BY_ID_RESPONSE_SUCCESS, UPDATE_DATE_TIME_RESPONSE } from '../../utils/constants';
interface taskReducerAction {
  type: "FETCH_TASK_BY_ID" | "FETCH_TASK_BY_ID_RESPONSE_SUCCESS" | "PUT_TASK_BY_ID_RESPONSE_SUCCESS";
  data: {items: Object};
  state: any;
}

export const responseTaskReducer = (state = null, action: taskReducerAction) => {
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


export default combineReducers({
  taskById: responseTaskReducer,
});
