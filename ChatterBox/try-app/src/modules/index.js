import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {loginReducer} from '../helpers/reducerLogin'
import {screenRes} from '../helpers/reducerScreen'

const rootReducer = combineReducers({
  loginReducer,
  screenRes,
  routerReducer,
})

export default rootReducer;