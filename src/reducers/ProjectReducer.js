// here we are creating the project reducer ;
import { UPDATE_PROJECTS } from "actions/1_ActionConstants"

const initialState = {
    projects : []
}

const ProjectReducer = (state = initialState , action) =>{
    if(action.type === UPDATE_PROJECTS){
        return {...state , projects : action.payload}
    }
    else {
        return state 
    }
}

export default ProjectReducer;