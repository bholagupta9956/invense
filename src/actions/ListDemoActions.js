// import DemoService from "../services/DemoService";

import {
  FETCH_LISTDEMO_BEGIN,
  FETCH_LISTDEMO_FAILURE,
  FETCH_LISTDEMO_SUCCESS,
  UPDATE_ALL_COMPANY ,
  GET_ALL_COMPANY ,
  UPDATE_SELECTED_ORGANIZATION ,
  UPDATE_PROJECTS ,
  UPDATE_DEVICES ,
  UPDATE_PANELS,
  UPDATE_USERS,
  UPDATE_ORGANIZATION_ID,
  UPDATE_LOGEDIN_USERDETAILS
} from "./1_ActionConstants";


export const fetchListBegin = () => ({
  type: FETCH_LISTDEMO_BEGIN,
});


export const fetchListSuccess = (list) => ({
  type: FETCH_LISTDEMO_SUCCESS,
  payload: { list },
});


export const fetchListFailure = (error) => ({
  type: FETCH_LISTDEMO_FAILURE,
  payload: { error },
});

// export function fetchList() {
//   return (dispatch, getState) => {
//     //redux passes dispatch & getState as args into thunk functions
//     dispatch(fetchListBegin());
//     return DemoService.fetchUsers()
//       .then(handleErrors)
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch(fetchListSuccess(json.List));
//         return json.List;
//       })
//       .catch((error) => dispatch(fetchListFailure(error)));
//   };
// }

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// Writing code for getting the company;

export const  getAllCompany = () => ({
  type : GET_ALL_COMPANY
})

export const updateAllCompany = (data) =>({
  type : UPDATE_ALL_COMPANY , 
  payload : data
})

export const updateSelectedOrganization = (data) =>({
  type : UPDATE_SELECTED_ORGANIZATION ,
  payload : data
})

export const updateProjects = (data) =>({
  type : UPDATE_PROJECTS ,
  payload : data
})

export const updateAllPanels = (data) =>({
  type : UPDATE_PANELS ,
  payload : data
})


export const updateAllDevices = (data) =>({
  type : UPDATE_DEVICES ,
  payload : data
})

export const updateAllUsers = (data) => ({
  type : UPDATE_USERS ,
  payload : data
})

export const updateOrganizationId = (data) =>({
  type : UPDATE_ORGANIZATION_ID ,
  payload :  data
})

export const updateLogedInUserDetails = (data) =>({
  type : UPDATE_LOGEDIN_USERDETAILS ,
  payload : data 
})