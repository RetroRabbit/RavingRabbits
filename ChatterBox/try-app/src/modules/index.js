import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {loginReducer} from '../helpers/reducerLogin'
import {screenRes} from '../helpers/reducerScreen'
import {profilePicReducer} from '../helpers/reducerPfp'
import {myRegister} from '../helpers/reducerRegister'

const rootReducer = combineReducers({
  loginReducer,
  screenRes,
    myRegister,
  routerReducer,
  profilePicReducer
})

export default rootReducer;