import pfp from '../img/pfp.png';

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const REGISTER_USER = 'REGISTER_USER';
const UPDATE_ACCOUNT_DETAILS = 'UPDATE_ACCOUNT_DETAILS';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const SET_PROFILEPIC_URL = 'SET_PROFILEPIC_URL';
const HIDE_PEN = 'HIDE_PEN';
const HIDE_PENN = 'HIDE_PENN';
const SHOW_PENN = 'SHOW_PENN';
const SHOW_PEN = 'SHOW_PEN';


const initialState = {
    userName: 'Raving Rabbits',
    email: 'RavingRabbits@gmail.com',
    password: "12345",
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null,
    profilePicture: pfp,
    penShow:true,
    penShow:true,
    pennShow:true,
    penHide:false,
    penHide:false
}

export function login(email, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        callLoginApi(email, password, error => {
            dispatch(setLoginPending(false));
            if (!error) {
                dispatch(setLoginSuccess(true));
            } else {
                dispatch(setLoginError(error));
            }
        });
    }
}

function callLoginApi(email, password, callback) {
    setTimeout(() => {
        if (email === initialState.email && password === initialState.password) {
            return callback(null);
        } else {
            return callback(new Error('Invalid email and password'));
        }
    }, 1000);
}

export function registerUser(name, email, password) {
    return {
        type: REGISTER_USER,
        name: name,
        email: email,
        password: password
    }
}

export function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

export function setLoginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

export function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    }
}

export function updateAccountDetails(email, userName) {
    return {
        type: UPDATE_ACCOUNT_DETAILS,
        email,
        userName
    };
}
export function hidePen() {
    return {
            type: HIDE_PEN
    };
}
export function setProfilePic(imgUrl) {
    return {
        type: SET_PROFILEPIC_URL,
        imgUrl: imgUrl
    };
}

export function accountReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending
            }

        case SET_LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            }

        case SET_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            }

        case UPDATE_ACCOUNT_DETAILS:
            return {
                ...state,
                userName: action.userName,
                email: action.email
            }

        case REGISTER_USER:
            return {
                ...state,
                userName: action.name,
                email: action.email,
                password: action.password
            }

        case SET_PROFILEPIC_URL:
            return {
                ...state,
                profilePicture: action.imgUrl
            }

        case HIDE_PEN:
            return {
                ...state,
                penShow: false
            }
        case HIDE_PENN:
            return {
                ...state,
                pennShow: false
            }
        case SHOW_PEN:
            return {
                ...state,
                penHide: true
            }
        case SHOW_PENN:
            return {
                ...state,
                pennHide: true
            }

        default: return state
    }
}

