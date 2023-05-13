const BASE_URL = "https://api-staging.invense.in/v1/";


export const endpoints = {
  company: {
    createCompany: BASE_URL + "organization" ,
    getCompany : BASE_URL + "organization" ,
    updateCompany : BASE_URL + "organization/",
    deleteCompany : BASE_URL + "organization/"
  },

  location : {
    createProject : BASE_URL + "project" ,
    getProjectByOrganizationId : BASE_URL + "organization/",
    updateProject : BASE_URL + "project/" ,
    deleteProject : BASE_URL + "project/"
  } ,
  panel : {
    createPanel : BASE_URL + "panel" ,
    getPanel : BASE_URL + "panel/" ,
    getSublocationByProjectId : BASE_URL + "project/" ,
    updatePanel : BASE_URL + "panel/" ,
    deletePanel : BASE_URL + "panel/"
  } ,
  device : {
    createDevice : BASE_URL + "device" ,
    getDevicesByProjectId : BASE_URL + "project/" ,
    updateDevice : BASE_URL + "device/",
    deleteDevice : BASE_URL + "device/" ,
    getDevicesByPanel : BASE_URL + "panel/"
  } ,
  parameters : {
    createParams : BASE_URL + "device/" ,
    updateParams : BASE_URL + "device/" ,
    deleteParams : BASE_URL + "device/",
    getParametersByDeviceId : BASE_URL + "device/"
  } ,
  authentication : {
    signup : BASE_URL + "user/signup" ,
    login : BASE_URL + "user/login" ,
    getAllUsers : BASE_URL + "user"
  } ,
  alerts : {
    getAlerts : BASE_URL + "alert?"
  } ,
  events : {
    getEvents : BASE_URL + "event?",
    getSnapShots : BASE_URL + "snapshot?"
  },
  roles : {
    assignUserToOrganization : BASE_URL + "organization/"
  }
};

