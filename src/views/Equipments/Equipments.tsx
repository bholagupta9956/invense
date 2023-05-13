import React, { useEffect, useState } from "react";
import { Component } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillAccountBook } from "react-icons/ai";
import { size, map } from "lodash";
import { IoIosWarning } from "react-icons/io";
import { MdAddAlert } from "react-icons/md";
import CardComponent from "components/CardComponent";
import TableCustom, { IColumnObj } from "components/TableCustom/TableCustom";
import Tab from "components/Tab/Tab";
import IconButton from "components/IconButton/IconButton";
import HomeCard from "components/HomeCard/HomeCard";
import Map from "Map";
// import DataTableFilterDemo from "components/DataTableFilterDemo/DataTableFilterDemo";
const eye = require("../../assets1/InvenseDashboardassets/pngicons/eye.png");
const Location = require("../../assets1/InvenseDashboardassets/pngicons/Location.png");
const warning = require("../../assets1/InvenseDashboardassets/pngicons/w.png");
const alert = require("../../assets1/InvenseDashboardassets/pngicons/alert.png");
const asset = require("../../assets1/InvenseDashboardassets/pngicons/asset.png");
const Search = require("../../assets1/InvenseDashboardassets/pngicons/search.png");
const list3 = require("../../assets1/InvenseDashboardassets/pngicons/list3.png");
const landing = require("../../assets1/InvenseDashboardassets/pngicons/landing.png");
const equipments = require("../../assets1/InvenseDashboardassets/pngicons/Equipments.png");
const active =require("../../assets1/InvenseDashboardassets/pngicons/active.png");
const inactive=require("../../assets1/InvenseDashboardassets/pngicons/inactive.png")
interface IProps extends RouteComponentProps {
  match: any;
}

interface IState {
  projects: Array<any>;
}

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [view, setView] = useState("table");

 
  const projectData = [
    {
      name: "Project 1",
      id: "dasd",
      panel: "PCC1",
      devices: 3,
      alarams: 0,
    },
    {
      name: "Project 1",
      id: "dasd",
      panel: "PCC2",
      devices: 5,
      alarams: 0,
    },
    {
      name: "Project 2",
      id: "dasd",
      panel: "PCC1",
      devices: 10,
      alarams: 5,
    },
    {
      name: "Project 2",
      id: "dasd",
      panel: "PCC2",
      devices: 0,
      alarams: 0,
    },
    {
      name: "Project 2",
      id: "dasd",
      panel: "PCC3",
      devices: 15,
      alarams: 10,
    },
    {
      name: "Project 2",
      id: "dasd",
      panel: "PCC5",
      devices: 33,
      alarams: 5,
    },
    {
      name: "Project 3",
      id: "dasd",
      panel: "PCC1",
      devices: 25,
      alarams: 0,
    },
    {
      name: "Project 3",
      id: "dasd",
      panel: "PCC2",
      devices: 20,
      alarams: 0,
    },
  ];

  const alaramsData = [
    {
      time: "2022-12-04T08:08:08",
      originator: "Sensor T1",
      type: "High Performance",
      severity: "Critical",
      status: "Active Unacknowledged",
      actions: "Active",
    },
    {
      time: "2022-12-05T02:28:10",
      originator: "Sensor T2",
      type: "High Performance",
      severity: "Critical",
      status: "Active Unacknowledged",
    },
  ];

  const maintenanceData = [
    {
      time: "2022-12-04T08:08:08",
      asset: "Sensor T1",
      dueDate: "2022-12-31T08:08:08",
      location: "PCC1",
    },
    {
      time: "2022-12-05T10:08:08",
      asset: "Sensor T1",
      dueDate: "2022-12-31T15:08:08",
      location: "PCC2",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-rows-1 grid-cols-4">
        <HomeCard
          title="No of Equipments"
          value={45}
          subtext=" Total Equipments"
          image={inactive}
        />
        <HomeCard title=" Active Equipments" value={46} subtext="Total Active" image={active} />
        <HomeCard title="Warning" value={47} subtext=" Total Warning" image={warning} />
        <HomeCard title="Alets" value={43} subtext="Total Alerts" image={alert} />
      </div>

      <div className=" w-full m-1 ">
        <div className="mt-1 position: relative  bg-white rounded-lg ">
          <div className="flex  pt-2 pl-2 absolute inset-2 z-10">
            <button
              className="w-32 h-7 text-lg  text-white shadow hover:shadow-lg "
              style={{
                background: view === "map" ? "#32AA57" : "white",
                color: view === "map" ? "white" : "black",
              }}
              onClick={() => setView("map")}
            >
              Map
            </button>
            <button
              className="w-32 h-7 text-lg shadow hover:shadow-lg"
              onClick={() => setView("table")}
              style={{
                background: view === "table" ? "#32AA57" : "white",
                color: view === "table" ? "white" : "black",
              }}
            >
              Table
            </button>
          </div>

          {view === "table" && (
            <TableCustom headingText="Projects Details" rows={5} value={projectData}>
              <Tab
                header="Location"
                field="name"
                className="px-1 py-2 text-inputLabelColor"
                body={(rowData: any) => {
                  return <div className="text-inputTextColor">{rowData.name}</div>;
                }}
              />
              <Tab
                header="Panel"
                field="name"
                className="px-1 py-2 text-inputLabelColor"
                body={(rowData: any) => {
                  return <div className="text-inputTextColor">{rowData.panel} </div>;
                }}
              />
              <Tab
                header="Devices"
                field="devices"
                className="p-1 text-inputLabelColor"
                body={(rowData: any) => {
                  return <div className="text-inputTextColor">{rowData.devices}</div>;
                }}
              />
              <Tab
                header="Alarms"
                field="type"
                className="p-1 text-inputLabelColor"
                body={(rowData: any) => {
                  return <div className="text-inputTextColor">{rowData.alarams}</div>;
                }}
              />

              <Tab
                header="Actions"
                field=""
                className="p-1 text-inputLabelColor"
                body={(rowData: any) => {
                  return (
                    <div className="text-inputTextColor flex gap-x-2 justify-between">
                      <div>
                        <IconButton icon="pi pi-arrow-right" className=" text-xl " />
                      </div>
                    </div>
                  );
                }}
              />
            </TableCustom>

            // <DataTableFilterDemo />
          )}
          {view === "map" && <Map />}
        </div>
      </div>

      {/* <div className=""> */}
      {/* <div className="mt-2 grid  grid-rows-1 grid-flow-col bg-white rounded-md">
            <div className="flex flex-col">
              <div className=" sm:-mx-6 lg:-mx-8">.</div>
            </div>
          </div> */}

      {/* <TableCustom headingText="Alarams" rows={5} value={alaramsData}>
            <Tab
              header="Creation Time"
              field="time"
              className="px-1     py-2 text-inputLabelColor"
              body={(rowData: any) => {
                return <div className="text-inputTextColor">{rowData.time}</div>;
              }}
            />
            <Tab
              header="Originator"
              field="originator"
              className="px-1 py-2   text-inputLabelColor"
              body={(rowData: any) => {
                return <div className="text-inputTextColor">{rowData.originator}</div>;
              }}
            />
            <Tab
              header="Type"
              field="type"
              className="px-1 py-2  text-inputLabelColor"
              body={(rowData: any) => {
                return <div className="text-inputTextColor">{rowData.type}</div>;
              }}
            />
            <Tab
              header="Status"
              field="status"
              className="px-1 py-2  text-inputLabelColor"
              body={(rowData: any) => {
                return <div className="text-inputTextColor">{rowData.status}</div>;
              }}
            />

            <Tab
              header="Actions"
              field=""
              className="p-1  text-inputLabelColor"
              body={(rowData: any) => {
                return (
                  <div className="text-inputTextColor flex gap-x-2 justify-between">
                    <IconButton icon="pi pi-ellipsis-h" className=" text-xl " />
                    <IconButton icon="pi pi-check" className=" text-xl " />
                    <IconButton icon="pi pi-times" className=" text-xl " />
                  </div>
                );
              }}
            />
          </TableCustom> */}

      {/* <div className="">
            <div className="mt-2">
              <TableCustom headingText="Maintenance" rows={5} value={maintenanceData}>
                <Tab
                  header="Creation Time"
                  field="time"
                  className="px-1 py-2 text-inputLabelColor"
                  body={(rowData: any) => {
                    return <div className="text-inputTextColor">{rowData.time}</div>;
                  }}
                />
                <Tab
                  header="Asset"
                  field="asset"
                  className="px-1 py-2 text-inputLabelColor"
                  body={(rowData: any) => {
                    return <div className="text-inputTextColor">{rowData.asset}</div>;
                  }}
                />
                <Tab
                  header="Due date"
                  field="dueDate"
                  className="px-1 py-2 text-inputLabelColor"
                  body={(rowData: any) => {
                    return <div className="text-inputTextColor">{rowData.dueDate}</div>;
                  }}
                />
                <Tab
                  header="Location"
                  field="location"
                  className="px-1 py-2 text-inputLabelColor"
                  body={(rowData: any) => {
                    return <div className="text-inputTextColor">{rowData.location}</div>;
                  }}
                />

                <Tab
                  header="Actions"
                  field=""
                  className="p-1 text-inputLabelColor"
                  body={(rowData: any) => {
                    return (
                      <div className="text-inputTextColor flex gap-x-2 justify-between">
                        <IconButton icon="pi pi-ellipsis-h" className=" text-xl " />
                        <IconButton icon="pi pi-check" className=" text-xl " />
                        <IconButton icon="pi pi-times" className=" text-xl " />
                      </div>
                    );
                  }}
                />
              </TableCustom>
            </div>
          </div> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
