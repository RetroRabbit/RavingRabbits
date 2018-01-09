import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {loginReducer} from '../helpers/reducerLogin'

const rootReducer = combineReducers({
  loginReducer,
  routerReducer,
})

export default rootReducer;