import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import apiMiddleware from './apiMiddleware';
import rootReducer from './reducers/rootReducer'; 
import { composeWithDevTools } from 'redux-devtools-extension';

// declare global {
//     interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
// }

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // So we can use Firefox's Redux devtools

const configureStore = () =>  {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk, apiMiddleware)),
    );
};

export default configureStore;