const initialState = {
  newMsg: " "
};


export function myMessage (state = initialState, action){

  switch (action.type)
  {
      case new_Message:
          return {
              ...state, 
              newMsg : action.newMsg,
              
          } 

      default:
          return state;
  }
}

export function new_Message(newMsg)
{
    return{
            type:new_Message,
            newMsg : newMsg
    }
}