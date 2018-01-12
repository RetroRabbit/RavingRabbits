import {REQUEST_TYPE} from '../container/side-menu/sidemenu'

const INITIAL_STATE ={all: [], person:null,page:1};

export default function(state = INITIAL_STATE,action){
    switch(action.type){
        case REQUEST_TYPE.PEOPLE.FETCH_PEOPLE:
            return {...state,all:_.uniqBy(state.all.concat(action.payload.data),'id'),page:state.page + 1};
            default:
                return state;
    }
}