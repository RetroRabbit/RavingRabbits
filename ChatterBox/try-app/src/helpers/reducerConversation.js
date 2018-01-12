const SELECT_CHAT = 'SELECT_CHAT'
const SEND_MESSAGE = 'SEND_MESSAGE';

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
            state.conversations.forEach(element => {
                element.selected = false;
                if (element.conversationID == action.conversationID) {
                    element.selected = true;
                }
            });
            return {
                ...state,
                filteredMessages :filteredMessages,
                currentConvoID: action.conversationID
            }

            case SEND_MESSAGE:
            state.messages.push({msg: action.msg, conversationID: action.conversationID})
            var filteredMessages = state.messages.filter(function (item) {
                if (item.conversationID == action.conversationID) {
                    return item;    
                }
            });
            return {
                ...state,
                filteredMessages :filteredMessages,
            }

        default:
            return state;
    }
}

const initialState = {
    conversations: [
        {
            conversationID: 1,
            user1: "Johan",
            user2: "HD",
            avatar:
                'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png',
            text:
                'I&apos;ll be in your neighborhood doing errands this weekend.',
            selected: false
        },
        {
            conversationID: 2,
            user1: "Johan",
            user2: "Ash",
            avatar:
                'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png',
            text:
                'I&apos;ll be in your neighborhood doing errands this weekend.',
            selected: false
        },
        {
            conversationID: 3,
            user1: "Johan",
            user2: "Lunga",
            avatar:
                'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png',
            text:
                'I&apos;ll be in your neighborhood doing errands this weekend.',
            selected: false
        },
        {
            conversationID: 4,
            user1: "Johan",
            user2: "Nonto",
            avatar:
                'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png',
            text:
                'I&apos;ll be in your neighborhood doing errands this weekend.',
            selected: false
        },
        {
            conversationID: 5,
            user1: "Johan",
            user2: "Law",
            avatar:
                'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png',
            text:
                'I&apos;ll be in your neighborhood doing errands this weekend.',
            selected: false
        }
    ],
    messages: [
        {
            messageID: 1,
            user: "Johan",
            msg: "this is only test messages",
            conversationID: 1
        },
        {
            messageID: 2,
            user: "HD",
            msg: "this is a reply",
            conversationID: 1
        },
        {
            messageID: 3,
            user: "Johan",
            msg: "tasdf",
            conversationID: 2
        },
        {
            messageID: 4,
            user: "HD",
            msg: "adsfasdf fasdfa",
            conversationID: 2
        },
        {
            messageID: 5,
            user: "HD",
            msg: "adsfasdf fasdfa",
            conversationID: 2
        },
        {
            messageID: 6,
            user: "HD",
            msg: "adsfasdf fasdfa",
            conversationID: 2
        }
    ],
    filteredMessages :[],
    currentConvoID: null
}