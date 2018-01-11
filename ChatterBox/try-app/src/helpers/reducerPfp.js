//types
import pfp from '../img/pfp.png'
const SET_PROFILEPIC_URL = 'SET_PROFILEPIC_URL';
//initial state
const initialState = {
    initialImage: pfp
    }
//fundctions 
 export function setProfilePic (imgUrl){
     return {
        type: SET_PROFILEPIC_URL, 
        imgUrl:imgUrl
     };
 }


//reducer
export function profilePicReducer(state = initialState,action){
   switch(action.type){
       case SET_PROFILEPIC_URL:
        return {...state,initialImage: action.imgUrl}
        default: return state

   }
}