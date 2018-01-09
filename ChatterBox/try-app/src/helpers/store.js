import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../modules';
import logger from 'redux-logger';

export const history = createHistory()

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));

export default store

