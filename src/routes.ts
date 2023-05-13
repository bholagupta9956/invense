import React from "react";
import { IRoute } from "interface/routes";

//links

export const linkPathLogin = "/";
export const linkPathHome = "/home";
export const linkPathProject = "/project/:projectId";
export const linkPathEnergyDashboard = "/energy-dashboard/:projectId/:panelName/:panelId";
export const linkPathWaterDashboard = "/water-dashboard";
export const linkPathAlerts = "/alerts";
export const linkPathAnalyze = "/analyze";
export const linkPathReports = "/reports";
export const linkPathSetting = "/setting";
export const linkPathSignup = "/Signup";
export const linkPathNewLocation = "/NewLocation";
export const linkPathCompany = "/Company";
export const linkPathRole = "/user-roles";
export const linkPathBasic = "/Basic";
export const linkPathDevices = "/Devices/:deviceName/:deviceId";
export const linkPathEquipments = "/Equipments";
export const linkPathHomeCard2 = "/HomeCard2";
export const linkPathEventHistory = "/Devices";
export const linkPathPopupBox = "/PopupBox";
export const linkPathSign = "/Sign";
export const linkPathLoginn = "/Loginn";
export const linkPathDevice = "/Device";
export const linkPathLocation = "/Location";
export const linkPathCompanyC = "/CompanyC";
export const linkPathAdd = "/Add";
export const linkPathSubLocation = "/SubLocation";


const Home = React.lazy(() => import("views/Home"));
const Project = React.lazy(() => import("views/Project"));
const EnergyDashboard = React.lazy(() => import("views/EnergyDashboard/EnergyDashboard"));
const WaterDashboard = React.lazy(() => import("views/WaterDashboard"));
const Alerts = React.lazy(() => import("views/Alerts"));
const Analyze = React.lazy(() => import("views/Analyze"));
const Reports = React.lazy(() => import("views/Reports"));
const Setting = React.lazy(() => import("views/Setting"));
const Signup = React.lazy(() => import("views/Signup/Signup"));
const NewLocation = React.lazy(() => import("views/Device/Device"));
const Company = React.lazy(() => import("views/Company/Company"));
const Role = React.lazy(() => import("views/Role/Role"));
const Basic = React.lazy(() => import("views/Basic/Basic"));
const Devices = React.lazy(() => import("views/DeviceDetails/Devices"));
const Equipments = React.lazy(() => import("views/Equipments/Equipments"));
const HomeCard2 = React.lazy(() => import("components/Homecard2/HomeCard2"));
const EventHistory = React.lazy(() => import("components/EventHistory/EventHistory"));
// const Sign = React.lazy(() => import("views/Sign/Sign"));
const Loginn = React.lazy(() => import("views/Loginn/Loginn"));
const Device = React.lazy(() => import("views/Device/Device"));
const Location = React.lazy(() => import("views/Location/Location"));
const Add = React.lazy(() => import("views/Add/Add"));
const SubLocation = React.lazy(() => import("views/SubLocation/SubLocation"));


const routes: IRoute[] = [
  {
    path: linkPathHome,
    exact: true,
    component: Home,
    role : [ "user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathHome,
    exact: true,
    component: Home,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathAdd,
    exact: true,
    component: Add,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathLocation,
    exact: true,
    component: Location,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathDevice,
    exact: true,
    component: Device,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathLoginn,
    exact: true,
    component: Loginn,
    role : ["user" , "admin" , "superAdmin"]
  },
  // {
  //   path: linkPathSign,
  //   exact: true,
  //   component: Sign,
  // },
  {
    path: linkPathEquipments,
    exact: true,
    component: Equipments,
    role : ["user" , "admin" , "superAdmin"]
  },

  {
    path: linkPathHomeCard2,
    exact: true,
    component: HomeCard2,
    role : ["user" , "admin" , "superAdmin"]
  },

  {
    path: linkPathBasic,
    exact: true,
    component: Basic,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathNewLocation,
    exact: true,
    component: NewLocation,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathRole,
    exact: true,
    component: Role,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathCompany,
    exact: true,
    component: Company,
    role : [ "superAdmin"]
  },
  {
    path: linkPathSignup,
    exact: true,
    component: Signup,
    role : ["user" , "admin" , "superAdmin"]
  },

  {
    path: linkPathDevices,
    exact: true,
    component: Devices,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathProject,
    exact: true,
    component: Project,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathEnergyDashboard,
    exact: true,
    component: EnergyDashboard,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathWaterDashboard,
    exact: true,
    component: WaterDashboard,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathAlerts,
    exact: true,
    component: Alerts,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathAnalyze,
    exact: true,
    component: Analyze,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathReports,
    exact: true,
    component: Reports,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathSetting,
    exact: true,
    component: Setting,
    role : ["user" , "admin" , "superAdmin"]
  },
  {
    path: linkPathSubLocation,
    exact: true,
    component: SubLocation,
    role : ["user" , "admin" , "superAdmin"]
  },
];



export { routes };
