import axios from 'axios';
const SELECT_CHAT = 'SELECT_CHAT'
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_CONVERSATIONS = 'UPDATE_CONVERSATIONS';
const UPDATE_MESSAGES = 'UPDATE_MESSAGES';


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;// the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

 

export function selectChat(conversationID) {
    return {
        type: SELECT_CHAT,
        conversationID: conversationID
    }
}
export function updateConversations(conversations) {
    return {
        type: UPDATE_CONVERSATIONS,
        conversations: conversations
    }
}

export function updateMessages(messages) {
    return {
        type: UPDATE_MESSAGES,
        messages: messages
    }
}

export function sendMessage(conversationID, message) {
    return {
        type: SEND_MESSAGE,
        conversationID: conversationID,
        msg: message
    }
}

export function reducerConversation(state = initialState, action) {
    switch (action.type) {
        case SELECT_CHAT:
            var filteredMessages = state.messages.filter(function (item) {
                if (item.conversationID == action.conversationID) {
                    return item;    
                }
            });
            
            return {
                ...state,
                filteredMessages :filteredMessages,
                currentConvoID: action.conversationID
            }

            case SEND_MESSAGE:
            axios.post(`http://localhost:60387/api/Messages`,{messageId: state.messages[state.messages.length-1].messageId + 1, msg:action.message,userSent:"Johan", conversationId: action.conversationID, })
            .then(function(response){
                console.log('saved successfully')
              }); 
            state.messages.push({msg: action.msg, conversationID: action.conversationID, messageId: state.messages[state.messages.length-1].messageId + 1})
            var filteredMessages = state.messages.filter(function (item) {
                if (item.conversationID == action.conversationID) {
                    return item;    
                }
            });
            return {
                ...state,
                filteredMessages: filteredMessages
            }

            case UPDATE_CONVERSATIONS:
            return {
                ...state,
                conversations: action.conversations,
            }

            case UPDATE_MESSAGES:
            return {
                ...state,
                messages: action.messages,
            }

        default:
            return state;
    }
}

const initialState = {
    conversations: [
      
    ],
    messages: [
        
    ],
    filteredMessages :[],
    currentConvoID: null
}