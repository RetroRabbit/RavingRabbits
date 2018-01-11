import { push } from "react-router-redux";
const initialState = {
  
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null,
    userName: 'Raving Rabbits',
    email: 'RavingRabbits@gmail.com'
  
}

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const UPDATE_NAME = 'UPDATE_NAME';

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));
    dispatch(updateName(null));

    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true,email));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess,email) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess,email
  };
}

export function updateName(email,userName) {
  return {
    type: UPDATE_NAME,
    email, userName
  };
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}

function callLoginApi(email, password, callback) {

  setTimeout(() => {    
    if (email === 'ash@gmail.com' && password === '12345') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess,
        userName: 'Arsalan Ahmed',
        email: action.email
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

      case UPDATE_NAME:
      return Object.assign({}, state, {
        userName: action.userName,
        email: action.email
      });

    default:
      return state;
  }
}