import { combineReducers } from 'redux';
import flashReducer from './flashReducer';
import tagReducers from './tagReducers';
import taskReducers from './taskReducers';

const rootReducer = combineReducers({
    tasks: taskReducers,
    tags: tagReducers,
    flash: flashReducer,
});

export default rootReducer;