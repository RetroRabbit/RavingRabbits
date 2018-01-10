const SET_SCREEN_RES_MOBILE = 'SET_SCREEN_RES_MOBILE';
const SET_SCREEN_RES = 'SET_SCREEN_RES';

const initialState = {
    mobile: false,
    desktop: true
}

export function setMobileResolution() {
    return {
      type: SET_SCREEN_RES_MOBILE
    };
  }

  export function setDesktopResolution() {
    return {
      type: SET_SCREEN_RES
    };
  }

  export function screenRes(state = initialState, action){
    switch (action.type) {
        case SET_SCREEN_RES_MOBILE:
          return {...state,mobile: true, desktop: false}

        case SET_SCREEN_RES:
          return {...state,desktop: true, mobile: false}

        default: return state
        }
  }