import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import apiMiddleware from './apiMiddleware';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// declare global {
//     interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
// }

const configureStore = () => {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk, apiMiddleware)),
    );
};

export default configureStore;