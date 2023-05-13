import { isEmpty, groupBy, values, map } from "lodash";
import { useEffect, useState, Suspense } from "react";
import ButtonBox from "components/ButtonBox";
import DatePicker from "components/DatePicker";
import LineChart from "components/LineChart";
import Loader from "components/Loader/Loader";
import LiveUpdateCard from "components/LiveUpdateCard";
import React, { Component } from "react";
import {
  RouteComponentProps,
  NavLink,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import DevicesService from "services/DevicesService";
import EventService from "services/EventService";
import HomeCard from "components/HomeCard/HomeCard";
import BarChart from "../../components/KwhBarGraph/KwhBarGraph";

const Location = require("../../assets1/InvenseDashboardassets/pngicons/Location.png");
const warning = require("../../assets1/InvenseDashboardassets/pngicons/w.png");
const alert = require("../../assets1/InvenseDashboardassets/pngicons/alert.png");
const asset = require("../../assets1/InvenseDashboardassets/pngicons/asset.png");
const Search = require("../../assets1/InvenseDashboardassets/pngicons/search.png");
const list3 = require("../../assets1/InvenseDashboardassets/pngicons/list3.png");
const landing = require("../../assets1/InvenseDashboardassets/pngicons/landing.png");
const equipments = require("../../assets1/InvenseDashboardassets/pngicons/Equipments.png");

const mergePrameters = (deviceParameters: any, groupedEvents: any) => {
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

interface IProps extends RouteComponentProps {
  name: string;
  component: any;
}

interface RouteProps {
  name: string;
}

interface IState {
  startDate: any;
  endDate: any;
  parameters: any;
  deviceInfo?: {
    [key: string]: string;
  };
  eventDetails?: any;
}

const Devices = (props: IProps) => {
  const [state, setState] = useState<IState>({
    startDate: "",
    endDate: "",
    parameters: "",
    deviceInfo: {
      key: "",
    },
    eventDetails: "",
  });

  const getDevices = () => {
    const pathNameArrays = props.location.pathname.split("/");
    DevicesService.getDevice(pathNameArrays[pathNameArrays.length - 1])
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setState({
            ...state,
            deviceInfo: res.data?.item?.meta,
            parameters: res.data?.item?.parameters,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getEvents = async () => {
    return EventService.getEvents(
      `start_time=${state.startDate.toISOString()}&end_time=${state.endDate.toISOString()}&device_id=6340416926e5112f6d0bcbfc`
    )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const data = res.data.items ?? [];
          const groupedEvents = groupBy(data, "key");

          const processedEvents = mergePrameters(state.parameters, groupedEvents);

          setState({ ...state, eventDetails: processedEvents });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onGetEventHistory = async () => {
    await getEvents();
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
          {params.map((param: any, index) => {
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
    getDevices();
    getEvents();
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

  const { url } = props.match;

  return (
    <>
      <div className="w-12/12 h-20 rounded-md m-2 bg-white  ">
        <h2 className="text-2xl p-5 "> Valve Assat Machine</h2>
      </div>
      <div className="grid grid-rows-1 grid-cols-4">
        <HomeCard title="Location" value={45} subtext=" Total Location" image={Location} />
        <HomeCard title="Assets" value={46} subtext="Total Assets" image={equipments} />
        <HomeCard title="Warning" value={47} subtext=" Total Warning" image={warning} />
        <HomeCard title="Alets" value={43} subtext="Total Alerts" image={alert} />
      </div>

      <div className="w-full text-left text-black">
        {/* <div className="font-semibold text-base	text-slate-700">Company Name</div> */}
        <div className="mt-2 font-bold text-3xl	text-slate-800">{state.deviceInfo?.name}</div>

        <div className="mt-2 w-full">
          <div className="flex gap-x-2 ml-2">
            <NavLink
              exact
              to={`${url}`}
              activeClassName="bg-primaryColor text-white"
              className="px-4 py-2 border-2  shadow-primaryLogin text-base text-black bg-primaryWhite rounded-md bg-primaryWhite border-primaryLogin shadow-md hover:bg-primaryWhite hover:text-black "
            >
              Live Updates
            </NavLink>
            <NavLink
              exact
              to={`${url}/history`}
              activeClassName="bg-primaryColor text-white"
              className="px-4 py-2 border-2 border-b-gray-800 shadow-primaryLogin text-base text-black bg-primaryWhite rounded-md bg-primaryWhite border-primaryLogin shadow-md hover:bg-primaryWhite hover:text-black hover:border-primaryLogin  border-3"
            >
              Events History
            </NavLink>
            <NavLink
              exact
              to={`${url}/alerts`}
              activeClassName="bg-primaryColor text-white"
              className="px-4 py-2 border-2 border-b-gray-800 shadow-primaryLogin text-base text-black bg-primaryWhite rounded-md bg-primaryWhite border-primaryLogin shadow-md hover:bg-primaryWhite hover:text-black hover:border-primaryLogin  border-3"
            >
              Alerts History
            </NavLink>

            <NavLink
              exact
              to={`${url}/settings`}
              activeClassName="bg-primaryColor text-white "
              className="px-12 py-2 border-2 border-b-gray-800 shadow-primaryLogin text-base text-black bg-primaryWhite rounded-md bg-primaryWhite border-primaryLogin shadow-md hover:bg-primaryWhite hover:text-black hover:border-primaryLogin  border-3"
            >
              Project
            </NavLink>
            <div className="mt-4 ">
              {/* <Suspense fallback={<Loader />}>
                <Switch>
                  <Route path={`${url}`} exact>
                    <LiveUpdates />
                  </Route>
                  <Route path={`${url}/history`} component={EventHistory} />
                  <Route path={`${url}/alerts`}>
                    <AlertHistory />
                  </Route>
                  <Route path={`${url}/settings`}>
                    <Settings />
                  </Route>
                </Switch>
              </Suspense> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Devices;
