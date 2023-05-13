import React, { useEffect, useState } from "react";
import { Component } from "react";
import { RouteComponentProps, Link, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { size, map } from "lodash";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillAccountBook } from "react-icons/ai";
import { HiCollection } from "react-icons/hi";
import { BsFillLightningFill } from "react-icons/bs";
import CardComponent from "components/CardComponent";
import TableCustom, { IColumnObj } from "components/TableCustom/TableCustom";
import Tab from "components/Tab/Tab";
import BarChart from "components/KwhBarGraph/KwhBarGraph";
import { useHistory } from "react-router-dom";
import IconButton from "components/IconButton/IconButton";
import HomeCard from "components/HomeCard/HomeCard";
import Map from "Map";
import CustomDataTables from "components/CustomDataTables/CustomDataTables";
import CustomTable from "components/CustomTables/CustomTable";
import Top5KwhConsumptions from "components/Top5KwhConsumptions/Top5KwhConsumptions";
import { useSelector } from "react-redux";
import "../../styles/customDataTable.css";
import { endpoints } from "services/endpoints";
import { generatePath } from "react-router-dom";
import axios from "axios";

const EEquipement = require("../../assets1/InvenseDashboardassets/pngicons/Equipments.png");
const Location = require("../../assets1/InvenseDashboardassets/pngicons/Location.png");
const warning = require("../../assets1/InvenseDashboardassets/pngicons/w.png");
const alert = require("../../assets1/InvenseDashboardassets/pngicons/alert.png");
const current = require("../../assets1/InvenseDashboardassets/pngicons/current.png");
const kw = require("../../assets1/InvenseDashboardassets/pngicons/kw.png");

const EnergyDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [views, setViews] = useState("table");
  const [energyData, setEnergyData] = useState([]);
  const [panelData, setPanelData] = useState([]);
  const allPanels = useSelector((state) => state.PanelReducer.allPanels);
  const allLocation = useSelector((state) => state.ProjectReducer.projects);
  const allDevices = useSelector((state) => state.DeviceReducer.allDevice);
  const [totalCurrent, setTotalCurrent] = useState(0);
  const [totalPower, setTotalPower] = useState(0);
  const [snapShotData, setSnapShotData] = useState([]);

  const { panelName, panelId, projectId } = useParams();
  const history = useHistory();

  const [totalCrnt, setTotalCrnt] = useState(0);
  const [totalPwr, setTotalPwr] = useState(0);

  // HERE WRITING THE CODE TO GET THE DATA FOR THE TABLE ;

  const getSnapshotsDataByPanel = async (panelId) => {
    const url = `https://api-staging.invense.in/v1/snapshot?start_time=2023-05-09T03%3A49%3A30Z&end_time=2023-05-11T03%3A49%3A30Z&panel_id=${panelId}&snapshotType=panelSnapshot`;
    var dta = [];
    try {
      const res = await axios.get(url);
      if (res.status === 200) {
        const val = res.data?.items;
        dta = val;
      }
    } catch (err) {
      console.log(err, "this is the error");
    }
    return dta;
  };

  const getSnapshotsDataByDevice = async (deviceId) => {
    const url = `https://api-staging.invense.in/v1/snapshot?start_time=2023-05-09T03%3A49%3A30Z&end_time=2023-05-11T03%3A49%3A30Z&device_id=${deviceId}&snapshotType=deviceSnapshot`;
    var dta = [];
    try {
      const res = await axios.get(url);
      if (res.status === 200) {
        const val = res.data?.items;
        dta = val;
      }
    } catch (err) {
      console.log(err, "this is the error");
    }
    return dta;
  };

  const getAllPanels = async () => {
    setTotalCrnt(0);
    setTotalPwr(0);

    const data = await Promise.all(
      allPanels.map(async (itm, length) => {
        var parameters = itm?.parameters;
        parameters = Object.values(parameters);

        const panels = await getSnapshotsDataByPanel(itm?._id);
        var dta = panels[0];

        const dailyKwh = Object.values(dta?.parameters)?.find((itm) => {
          return itm.key === "EI0101";
        })?.value;
        const liveKwh = Object.values(dta?.parameters)?.find((itm) => {
          return itm.key === "EI0102";
        })?.value;

        setTotalCrnt((crnt) => {
          return crnt + Number(dailyKwh);
        });
        setTotalPwr((pwr) => {
          return pwr + Number(liveKwh);
        });

        const val = {
          id: itm?._id,
          panel: itm?.meta?.name,
          noOfAssets: itm?.devices?.length,
          dailyKwh: dailyKwh,
          liveKwh: liveKwh,
          liveAmp: 0,
          livePf: 0,
        };

        return val;
      })
    );

    const panelData = {
      tableHeading: "",
      heading: [
        {
          id: 1,
          title: "SN",
        },
        {
          id: 3,
          title: "Panel",
        },
        {
          id: 4,
          title: "No of assets",
        },
        {
          id: 5,
          title: "Daily Kwh",
        },
        {
          id: 6,
          title: "Live kWh",
        },
        {
          id: 7,
          title: "Live Amp",
        },
        {
          id: 8,
          title: "Live PF",
        },
      ],
      content: data,
    };
    setEnergyData(panelData);
  };

  useEffect(() => {
    if (allPanels.length != 0) {
      getAllPanels();
    }
  }, [projectId]);

  const getDevicesBypPanel = async () => {
    const url = endpoints.device.getDevicesByPanel + panelId;
    try {
      const res = await axios.get(url);
      if (res.status === 200) {
        const val = res?.data?.item?.devices;
        const dta = await Promise.all(

          val.map(async (itm, index) => {
           
            const devices = await getSnapshotsDataByDevice(itm?._id);
            const previousDevice = devices.length ? devices?.[0] : []
            const presentDevice = devices.length > 1 ? devices?.[devices.length - 1] : (devices.length ? devices?.[0] : [])
            const parameters = previousDevice.length != 0 ?  Object.values(previousDevice?.parameters) : [{value : 0 , key : "E101"}]
            var previousKwh = parameters?.find((itm) => { return itm.key === "E101" })?.value;
            var presentKwh = presentDevice.length != 0 ? Object.values(presentDevice?.parameters)?.find((itm) => { return itm.key === "E101" })?.value : 0
            const  dailyKwh = Number(presentKwh) - Number(previousKwh)
            const val = {
              id: itm?._id,
              name: itm?.meta?.name,
              dailyKwh: dailyKwh,
              liveKw: parameters?.find((itm) => {return itm.key === "E121"})?.value,
              liveAmp: parameters?.find((itm) => {return itm.key === "E119"})?.value,
              livePf: parameters?.find((itm) => {return itm.key === "E120"})?.value,
            };

            return val;
          })
        );

        const data = {
          tableHeading: panelName,
          heading: [
            {
              id: 1,
              title: "SN",
            },
            {
              id: 2,
              title: "Asset",
            },
            {
              id: 3,
              title: "Daily Kwh",
            },
            {
              id: 4,
              title: "Live Kw",
            },
            {
              id: 5,
              title: "Live Amp",
            },
            {
              id: 6,
              title: "Live PF",
            },
          ],
          content: dta,
        };
        setPanelData(data);
      }
    } catch (err) {
      console.log(err, "this is the error");
    }
  };

  useEffect(() => {
    if (panelId) {
      getDevicesBypPanel();
      getSnapshotsDataByPanel();
    }
  }, [panelId]);

  const handlePanelSelect = (data) => {
    const path = generatePath("/energy-dashboard/:projectId/:panelName/:panelId", {
      projectId: projectId,
      panelName: data?.panel,
      panelId: data?.id,
    });
    history.push(path);
  };

  const handleDeviceSelect = (dta) => {
    var deviceName = dta?.name;
    deviceName = deviceName.replaceAll(" ", "-");
    const path = generatePath("/Devices/:deviceName/:deviceId", {
      deviceName: deviceName,
      deviceId: dta?.id,
    });
    history.push(path);
  };

  return (
    <div className="w-full">
      <div className="grid grid-rows-1 grid-cols-4">
        <HomeCard
          title="Sub Location"
          value={allPanels?.length}
          subtext=" Total Sub Location"
          image={Location}
          imageStyle={{ width: "18px" }}
        />
        <HomeCard
          title="Assets"
          value={allDevices?.length}
          subtext="Total Assets"
          image={EEquipement}
        />
        <HomeCard
          title="Current"
          value={Math.round(totalCrnt / 1000)}
          subtext=" Total kwh"
          image={current}
          imageStyle={{ width: "18px" }}
        />
        <HomeCard
          title="Power"
          value={Math.round(totalPwr / 1000)}
          subtext="kW"
          image={kw}
          imageStyle={{ width: "18px" }}
        />
      </div>

      <div className=" w-full h-3/5 grid grid-flow-row gap-4 grid-cols-2 ">
        <div className=" bg-white rounded-lg mt-1 position: relative 	overflowCont overflow-y-scroll">
          <div className="">
            <div className="flex  pt-2 pl-2 absolute  z-10">
              <button
                className="w-32 h-9 text-md  text-white shadow hover:shadow-lg font-roboto rounded-sm"
                style={{
                  background: views === "map" ? "#32AA57" : "white",
                  color: views === "map" ? "white" : "black",
                }}
                onClick={() => setViews("map")}
              >
                Map
              </button>
              <button
                className="w-32 h-9 text-md shadow hover:shadow-lg font-roboto rounded-sm"
                onClick={() => setViews("table")}
                style={{
                  background: views === "table" ? "#32AA57" : "white",
                  color: views === "table" ? "white" : "black",
                }}
              >
                Table
              </button>
            </div>
            {views === "table" && (
              <CustomTable datass={energyData} handleRowClick={handlePanelSelect} />
            )}
            {views === "table" && (
              <CustomTable
                datass={panelData}
                handleRowClick={handleDeviceSelect}
                tableClassName="customTableTabl"
              />
            )}
            {views === "map" && <Map />}
          </div>
        </div>

        <div className="">
          <div className="mt-1  ">
            <BarChart
              name="Daily Kwh"
              xvalues={["2022-12-01", "2022-12-02", "2022-12-03", "2022-12-04", "2022-12-05"]}
              yvalues={[2500, 300, 1300, 2400, 2358]}
            />
          </div>

          <div className="">
            <Top5KwhConsumptions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyDashboard;
