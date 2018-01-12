const NEW_MESSAGE = 'NEW_MESSAGE';
const initialState = {
  newMsg: []
};


export function myMessage (state = initialState, action){

  switch (action.type)
  {
      case NEW_MESSAGE:
          return [{
              ...state, 
              newMsg : action.newMsg,
              
          }] 

      default:
          return state;
  }
}

export function new_Message(newMsg)
{
    return{
            type:NEW_MESSAGE,
            newMsg : newMsg
    }
}