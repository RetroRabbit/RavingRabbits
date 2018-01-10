import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {loginReducer} from '../helpers/reducerLogin'
import {screenRes} from '../helpers/reducerScreen'
import {profilePicReducer} from '../helpers/reducerPfp'


const rootReducer = combineReducers({
  loginReducer,
  screenRes,
  routerReducer,
  profilePicReducer
})

export default rootReducer;