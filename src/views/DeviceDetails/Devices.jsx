import { isEmpty, groupBy, values, map } from "lodash";
import { useEffect, useState, Suspense } from "react";
import ButtonBox from "components/ButtonBox";
import DatePicker from "components/DatePicker";
import LineChart from "components/LineChart";
import Loader from "components/Loader/Loader";
import { routes, routes1 } from "../../routes";
import LiveUpdateCard from "components/LiveUpdateCard";
import React, { Component } from "react";
import {
  RouteComponentProps,
  NavLink,
  useRouteMatch,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import DevicesService from "services/DevicesService";
import EventService from "services/EventService";
import HomeCard from "components/HomeCard/HomeCard";
import BarChart from "../../components/KwhBarGraph/KwhBarGraph";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";



const EventHistory = React.lazy(() => import("../../components/EventHistory/EventHistory"));
const AlertHistory = React.lazy(() => import("components/AlertHistory/AlertHistory"));
const LiveUpdates = React.lazy(() => import("components/LiveUpdates/LiveUpdates"));
const Settings = React.lazy(() => import("components/Settings/Settings"));
const Location = require("../../assets1/InvenseDashboardassets/pngicons/Location.png");
const warning = require("../../assets1/InvenseDashboardassets/pngicons/w.png");
const alert = require("../../assets1/InvenseDashboardassets/pngicons/alert.png");
const asset = require("../../assets1/InvenseDashboardassets/pngicons/asset.png");
const Search = require("../../assets1/InvenseDashboardassets/pngicons/search.png");
const list3 = require("../../assets1/InvenseDashboardassets/pngicons/list3.png");
const landing = require("../../assets1/InvenseDashboardassets/pngicons/landing.png");
const equipments = require("../../assets1/InvenseDashboardassets/pngicons/Equipments.png");

const mergePrameters = (deviceParameters, groupedEvents) => {
  return map(deviceParameters, (parameterDetails, parameterKey) => {
    return {
      key: parameterKey,
      name: parameterDetails?.name,
      unit: parameterDetails?.unit,
      default: parameterDetails?.default,
      events: groupedEvents[parameterKey],
    };
  });
};

const Devices = (props) => {
  const [state, setState] = useState({
    startDate: "",
    endDate: "",
    parameters: "",
    deviceInfo: {
      key: "",
    },
    eventDetails: "",
  });

  const onGetEventHistory = async () => {
    // await getEvents();
  };

  const prepareGraph = () => {
    const { eventDetails } = state;

    if (!Array.isArray(eventDetails)) {
      return <>No data found</>;
    }

    if (isEmpty(eventDetails)) {
      return <>No data found</>;
    }

    return map(eventDetails, (parameter) => {
      return (
        <div className="flex-1">
          <LineChart
            heading={`${parameter?.name} - ${parameter?.key}`}
            name={parameter?.name}
            xvalues={map(parameter.events, "timestamp")}
            yvalues={map(parameter.events, "value")}
          />
        </div>
      );
    });
  };

  const renderLiveUpdate = () => {
    let params = Object.keys(state.parameters);
    const { parameters } = state;
    return (
      <div className="mt-4 h-full">
        <div className="font-bold">Live Updates </div>
        <div className="mt-4 grid grid-cols-5 gap-4">
          {params.map((param, index) => {
            return (
              <div className="" key={index}>
                <LiveUpdateCard
                  color="green"
                  name={parameters[param].name}
                  unit={parameters[param].unit}
                  value={parameters[param].value}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderSettings = () => {
    return <div>Device Settings</div>;
  };

  useEffect(() => {
    // getDevices();
    // getEvents();
  }, []);

  const renderEventHistory = () => {
    return (
      <div className="">
        <div className="inline-block mt-4 p-4 bg-primaryWhite rounded-lg">
          <div className="flex gap-4">
            <div className="flex-0">
              <DatePicker
                label="Start Date"
                value={state.startDate}
                onChange={(e) => {
                  setState({ ...state, startDate: e.target.value ?? undefined });
                }}
              />
            </div>
            <div className="flex-0">
              <DatePicker
                label="End Date"
                value={state.endDate}
                onChange={(e) => {
                  setState({ ...state, endDate: e.target.value ?? undefined });
                }}
              />
            </div>
          </div>
          <div className="mt-4">
            <ButtonBox label="Submit" onClickWithLoader={onGetEventHistory} />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 flex-wrap ">{prepareGraph()}</div>
      </div>
    );
  };

  const { url, pathname } = props.match;

  const { deviceId, deviceName } = useParams();
  const allLocation = useSelector((state) => state.ProjectReducer.projects);
  const allDevices = useSelector((state) => state.DeviceReducer.allDevice);
  const allPanels = useSelector((state) => state.PanelReducer.allPanels);

  var paramsData = localStorage.getItem("paramsDta");
  paramsData = JSON.parse(paramsData);

  useEffect(() => {
    if (deviceId !== undefined) {
      localStorage.setItem(
        "paramsDta",
        JSON.stringify({ deviceId: deviceId, deviceName: deviceName })
      );
    }
  }, [deviceId]);

  // const url = `Devices/${deviceName}/${deviceId}/`
  console.log(deviceName, "deviceName here");

  return (
    <>
      <div className="w-12/12 h-18 rounded-md m-2 bg-white  ">
        <h2 className="text-2xl p-5 uppercase font-bold	text-gray-800"> {deviceName}</h2>
      </div>

      <div className="grid grid-rows-1 grid-cols-4">
        <HomeCard
          title="Effeciency"
          value={0}
          subtext="Percentage"
          image={Location}
          imageStyle={{ width: "18px" }}
        />
        <HomeCard
          title="Daily Power Consumption"
          value={0}
          subtext="kWh"
          image={equipments}
        />
        <HomeCard title="Weekly Power Consumption" value={0} subtext="kWh" image={warning} />
        <HomeCard title="Alerts & Warnings" value={0} subtext="Total" image={alert} />
      </div>

      <div className="w-full text-left text-black">
        {/* <div className="font-semibold text-base	text-slate-700">Company Name</div> */}
        <div className="mt-2 font-bold text-3xl	text-slate-800">{state.deviceInfo?.name}</div>

        <div className="mt-2 w-full ml-2">
          <div className="flex gap-x-5 ml-1 my-3">
            <NavLink
              exact
              to={`/Devices/${paramsData?.deviceName}/${paramsData?.deviceId}/`}
              activeClassName="bg-primaryColor text-white"
              className="px-4 py-2 border-2  font-roboto shadow-primaryLogin text-base text-black bg-primaryWhite rounded-md  border-primaryLogin shadow-md hover:bg-primaryWhite hover:text-black "
            >
              Live Updates
            </NavLink>
            <NavLink
              exact
              to={`/Devices/${paramsData?.deviceName}/${paramsData?.deviceId}/history`}
              activeClassName="bg-primaryColor text-white"
              className="px-4 py-2 border-2 border-b-gray-800 shadow-primaryLogin text-base text-black bg-primaryWhite rounded-md  border-primaryLogin shadow-md hover:bg-primaryWhite hover:text-black hover:border-primaryLogin  border-3 font-roboto"
            >
              Events History
            </NavLink>
            <NavLink
              exact
              to={`/Devices/${paramsData?.deviceName}/${paramsData?.deviceId}/alerts`}
              activeClassName="bg-primaryColor text-white"
              className="px-4 py-2 border-2 border-b-gray-800 shadow-primaryLogin text-base text-black bg-primaryWhite rounded-md  border-primaryLogin shadow-md hover:bg-primaryWhite hover:text-black hover:border-primaryLogin  border-3 font-roboto"
            >
              Alerts History
            </NavLink>

            {/* <NavLink
              exact
              to={`${url}/settings`}
              activeClassName="bg-primaryColor text-white "
              className="px-12 py-2 border-2 border-b-gray-800 shadow-primaryLogin text-base text-black bg-primaryWhite rounded-md b border-primaryLogin shadow-md hover:bg-primaryWhite hover:text-black hover:border-primaryLogin  border-3 font-roboto"
            >
              Project
            </NavLink> */}
          </div>
          <div className="mt-4 ">
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route
                  path={`/Devices/:deviceName/:deviceId`}
                  exact
                  render={(props) => (
                    <LiveUpdates {...props} deviceId={deviceId} deviceName={deviceName} />
                  )}
                />
                <Route
                  path={`/Devices/:deviceName/:deviceId/history`}
                  exact
                  render={(props) => (
                    <EventHistory {...props} deviceId={paramsData?.deviceId} deviceName={deviceName} />
                  )}
                />

                <Route path={`/Devices/:deviceName/:deviceId/alerts`}>
                  <AlertHistory {...props} deviceId={paramsData?.deviceId} deviceName={deviceName} />
                </Route>
                <Route path={`/Devices/:deviceName/:deviceId/settings`}>
                  <Settings />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default Devices;
