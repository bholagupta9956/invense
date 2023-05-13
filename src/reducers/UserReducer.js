// here we maintaining user list ;
import {UPDATE_LOGEDIN_USERDETAILS, UPDATE_USERS} from "../actions/1_ActionConstants"

const initialState = {
    allUsers : [],
    logedInUser : {}
}

const UserReducer = (state = initialState , action) =>{
    if(action.type === UPDATE_USERS){
        return { ...state , allUsers : action.payload}
    }
    else if(action.type === UPDATE_LOGEDIN_USERDETAILS){
        return { ...state , logedInUser : action.payload}
    }
    else {
        return state
    }
}

export default UserReducer;