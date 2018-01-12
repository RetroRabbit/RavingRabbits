import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {loginReducer} from '../helpers/reducerLogin';
import {screenRes} from '../helpers/reducerScreen';
import {profilePicReducer} from '../helpers/reducerPfp';
import {myRegister} from '../helpers/reducerRegister';
import {accountReducer} from '../helpers/reducerAccount';
import {reducerConversation} from '../helpers/reducerConversation';
import {myMessage} from '../helpers/myChat';

const rootReducer = combineReducers({
  loginReducer,
  screenRes,
    myRegister,
  routerReducer,
  profilePicReducer,
  accountReducer,
  reducerConversation,
  myMessage
})

export default rootReducer;