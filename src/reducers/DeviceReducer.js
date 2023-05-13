// here we are going to store the device according to the location.

import { UPDATE_DEVICES } from "../actions/1_ActionConstants";

const initialState = {
  allDevice: [],
};

const DeviceReducer = (state = initialState , action) => {
  if (action.type === UPDATE_DEVICES) {
    return { ...state, allDevice : action.payload };
  } else {
    return state;
  }
};

export default DeviceReducer;
