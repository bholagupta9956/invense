import {UPDATE_PANELS} from "../actions/1_ActionConstants"

const initialState = {
    allPanels : []
}

const PanelReducer = (state = initialState , action) => {
    if(action.type === UPDATE_PANELS){
        return {...state , allPanels : action.payload}
    }
    else {
        return state ;
    }
}

export default PanelReducer;