import { isEmpty, groupBy, values, map } from "lodash";

import ButtonBox from "components/ButtonBox";
import DatePicker from "components/DatePicker";
import LineChart from "components/LineChart";
import LiveUpdateCard from "components/LiveUpdateCard";
import React, { Component } from "react";
import { RouteComponentProps, NavLink, Route, Switch } from "react-router-dom";
import DevicesService from "services/DevicesService";
import EventService from "services/EventService";
import HomeCard from "components/HomeCard/HomeCard";
import BarChart from '../../components/KwhBarGraph/KwhBarGraph';

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

interface IProps extends RouteComponentProps {}

interface IState {
  startDate: any;
  endDate: any;
  parameters: any;
  deviceInfo?: {
    [key: string]: string;
  };
  eventDetails?: any;
}

class Devices extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    let endDate = new Date();
    let date = new Date();
    let startDateNumber = date.setMonth(date.getMonth() - 1);
    this.state = {
      startDate: new Date(startDateNumber),
      endDate,
      parameters: {},
    };
  }

  componentDidMount(): void {
    this.init();
  }

  init = () => {
    this.getDevices();
    this.getEvents();
  };

  getDevices = () => {
    const pathNameArrays = this.props.location.pathname.split("/");
    
    DevicesService.getDevice(pathNameArrays[pathNameArrays.length - 1])
      .then((res) => {
        console.log(res );
        if (res.status === 200) {
          this.setState({
            deviceInfo: res.data?.item?.meta,
            parameters: res.data?.item?.parameters,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getEvents = async () => {
    return EventService.getEvents(
      `start_time=${this.state.startDate.toISOString()}&end_time=${this.state.endDate.toISOString()}&device_id=6340416926e5112f6d0bcbfc`
    )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const data = res.data.items ?? [];
          const groupedEvents = groupBy(data, "key");

          const processedEvents = mergePrameters(this.state.parameters, groupedEvents);

          this.setState({
            eventDetails: processedEvents,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onGetEventHistory = async () => {
    await this.getEvents();
  };

  prepareGraph = () => {
    const { eventDetails } = this.state;

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

  renderLiveUpdate = () => {
    let params = Object.keys(this.state.parameters);
    const { parameters } = this.state;
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

  renderSettings = () => {
    return <div>Device Settings</div>;
  };

  renderEventHistory = () => {
    return (
      <div className="">
        <div className="inline-block mt-4 p-4 bg-primaryWhite rounded-lg">
          <div className="flex gap-4">
            <div className="flex-0">
              <DatePicker
                label="Start Date"
                value={this.state.startDate}
                onChange={(e) => {
                  this.setState({
                    startDate: e.target.value ?? undefined,
                  });
                }}
              />
            </div>
            <div className="flex-0">
              <DatePicker
                label="End Date"
                value={this.state.endDate}
                onChange={(e) => {
                  this.setState({
                    endDate: e.target.value ?? undefined,
                  });
                }}
              />
            </div>
          </div>
          <div className="mt-4">
            <ButtonBox label="Submit" onClickWithLoader={this.onGetEventHistory} />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 flex-wrap ">{this.prepareGraph()}</div>
      </div>
    );
  };

  render() {
    const { url } = this.props.match;

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
          <div className="mt-2 font-bold text-3xl	text-slate-800">{this.state.deviceInfo?.name}</div>

          <div className="mt-2 w-full">
            <div className="flex gap-x-2 ml-2">
              <NavLink
                exact
                to={`${url}`}
                activeClassName="bg-primaryColor text-white"
                className="px-4 py-2 border-2  shadow-primaryLogin text-base text-black bg-primaryWhite rounded-md  border-primaryLogin shadow-md hover:bg-primaryWhite hover:text-black "
              >
                Live Update
              </NavLink>
              <NavLink
                exact
                to={`${url}`}
                activeClassName="bg-primaryColor text-white"
                className="px-4 py-2 border-2 border-b-gray-800 shadow-primaryLogin text-base text-black  rounded-md bg-primaryWhite border-primaryLogin shadow-md hover:bg-primaryWhite hover:text-black hover:border-primaryLogin  border-3"
              >
               Location History 
              </NavLink>
              <NavLink
                exact
                to={`${url}`}
                activeClassName="bg-primaryColor text-white"
                className="px-4 py-2 border-2 border-b-gray-800 shadow-primaryLogin text-base text-black  rounded-md bg-primaryWhite border-primaryLogin shadow-md hover:bg-primaryWhite hover:text-black hover:border-primaryLogin  border-3"
              >
              Event History
              </NavLink>

              <NavLink
                exact
                to={`${url}`}
                activeClassName="bg-primaryColor text-white "
                className="px-12 py-2 border-2 border-b-gray-800 shadow-primaryLogin text-base text-black  rounded-md bg-primaryWhite border-primaryLogin shadow-md hover:bg-primaryWhite hover:text-black hover:border-primaryLogin  border-3"
              >
              Project
              </NavLink>
            </div>

            <div className="mt-4 ">
              <Switch>
                <Route path={`${url}`} exact component={this.renderLiveUpdate} />
                <Route path={`${url}/history`} component={this.renderEventHistory} />
                <Route path={`${url}/settings`} component={this.renderSettings} />
              </Switch>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Devices;
