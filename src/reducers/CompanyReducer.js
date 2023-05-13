// here we handling all the company data ;

import {
  GET_ALL_COMPANY,
  UPDATE_ALL_COMPANY,
  UPDATE_ORGANIZATION_ID,
  UPDATE_SELECTED_ORGANIZATION,
} from "actions/1_ActionConstants";

const initialState = {
  company: [],
  selectedOrganization: {},
  assingedOrganizationId: "",
};

export default function CompanyReducer(state = initialState, action) {
  if (action.type === GET_ALL_COMPANY) {
    return { ...state };
  } else if (action.type === UPDATE_ALL_COMPANY) {
    return { ...state, company: action.payload };
  } else if (action.type === UPDATE_SELECTED_ORGANIZATION) {
    return {
      ...state,
      selectedOrganization: action.payload,
    };
  } else if (action.type === UPDATE_ORGANIZATION_ID) {
    return {
      ...state,
      assingedOrganizationId: action.payload,
    };
  } else {
    return state;
  }
}
