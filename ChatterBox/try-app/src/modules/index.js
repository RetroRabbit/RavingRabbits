import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {screenRes} from '../helpers/reducerScreen'

 const rootReducer = combineReducers({
  routing: routerReducer,
  screenRes
});

export default rootReducer;