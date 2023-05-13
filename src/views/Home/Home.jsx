import React, { useEffect, useState } from "react";
import { generatePath } from "react-router-dom";
import HomeCard from "components/HomeCard/HomeCard";
import Map from "Map";
import CustomTable from "components/CustomTables/CustomTable";
import CustomDataTables from "components/CustomDataTables/CustomDataTables";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { endpoints } from "services/endpoints";
import axios from "axios";
import { updateAllDevices, updateAllPanels, updateAllUsers, updateProjects } from "actions/ListDemoActions";


const eye = require("../../assets1/InvenseDashboardassets/pngicons/eye.png");
const Location = require("../../assets/icons/location.png");
const assets = require("../../assets1/InvenseDashboardassets/pngicons/Equipments.png");
const warning = require("../../assets/icons/warning.png");
const alert = require("../../assets/icons/alert.png");
const asset = require("../../assets1/InvenseDashboardassets/pngicons/asset.png");
const Search = require("../../assets1/InvenseDashboardassets/pngicons/search.png");
const list3 = require("../../assets1/InvenseDashboardassets/pngicons/list3.png");
const landing = require("../../assets1/InvenseDashboardassets/pngicons/landing.png");


const Home = () => {

  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  const [view, setView] = useState("table");
  const [panelList, setPanelList] = useState([]);
  const [projectData, setProjectData] = useState({ tableHeading: "", heading: [], content: [] });
  const [alertsData, setAlertsData] = useState({ tableHeading: "Alarms", heading: [], conent: [] });
  const [allDevices, setAllDevices] = useState([]);
  const selectedOrganization = useSelector((state) => state.CompanyReducer.selectedOrganization);
  const [totalAlerts , setTotalAlerts] = useState(0);
  const [totalWarnings , setTotalWarnings] = useState(0);

  const history = useHistory();

  const [card, setCard] = useState({
    totalProjects: 0,
    totalAssets: 0,
    totalWarning: 0,
    totalAlerts: 0,
  });

  const maintainceData = {
    tableHeading: "Maintaince",
    heading: [
      {
        id: 1,
        title: "SN",
      },
      {
        id: 2,
        title: "Location",
      },
      {
        id: 3,
        title: "Sub Location",
      },
      {
        id: 4,
        title: "Asset",
      },
      {
        id: 5,
        title: "Maintaince Type",
      },
      {
        id: 6,
        title: "Due Date",
      },
    ],
    content: [
      {
        id: 1,
        location: "Floor 1",
        subLocation: "PCC1",
        assets: "Lathe 1",
        MaintainceType: "Due in 7 days",
        createdBy: "21:58 04-12-2023",
      },
      {
        id: 2,
        location: "Floor 1",
        subLocation: "PCC 2",
        assets: "Lathe 1",
        MaintainceType: "Due in 5 days",
        createdBy: "21:58 04-12-2023",
      },
      {
        id: 1,
        location: "Floor 1",
        subLocation: "PCC 3",
        assets: "Compressor",
        MaintainceType: "Due in 1 days",
        createdBy: "21:58 04-12-2023",
      },
      {
        id: 1,
        location: "Floor 1",
        subLocation: "WM 1",
        assets: "Water Meter",
        MaintainceType: "Past Due 2 days",
        createdBy: "21:58 04-12-2023",
      },
      {
        id: 1,
        location: "Floor 1",
        subLocation: "WM 2",
        assets: "Water Meter",
        MaintainceType: " Past Due 3 days",
        createdBy: "21:58 04-12-2023",
      },
      {
        id: 1,
        location: "Floor 1",
        subLocation: "PCC 3",
        assets: "Water Meter",
        MaintainceType: "Past Due 4 days",
        createdBy: "21:58 04-12-2023",
      },
    ],
  };

  const allProjects = useSelector((state) => state.ProjectReducer.projects);
  var totalProjects = allProjects.length;
  var firstProject = allProjects[0];

  const onProjectDataRowClick = (data) => {
    const path = generatePath("/energy-dashboard/:projectId/:panelName/:panelId", {
      projectId: firstProject?._id,
      panelName: data?.name,
      panelId: data?.id,
    });
    history.push(path);
  };

  const getPanelsAccordingToTable = (val) => {
    const panelArr = val.map((itm, ind) => {

      var noOfAlerts = 0;
      var noOfWarnings = 0;

      var allDevices = itm?.devices;
      for(var i=0; i < allDevices.length; i++){
        var device = allDevices[i];
        var parameters = Object.values(device?.parameters)
        noOfAlerts = noOfAlerts +  parameters.filter((itm) => itm.isAlert).length;
        noOfWarnings = noOfWarnings + parameters.filter((itm) => itm.isWarning).length
      }
      
      const dta = {
        id: itm?._id,
        name: itm?.meta?.name,
        devices: itm?.devices?.length,
        activeDevices: itm?.devices?.length,
        alerts: noOfAlerts,
        warnings: noOfWarnings,
      };
      return dta;
    });
    const data = {
      tableHeading: "",
      heading: [
        {
          id: 1,
          title: "SN",
        },
        {
          id: 3,
          title: "Sub Location",
        },
        {
          id: 4,
          title: "No of Assets",
        },
        {
          id: 5,
          title: "Active Assets",
        },
        {
          id: 6,
          title: "Alerts",
        },
        {
          id: 7,
          title: "Warnings",
        },
      ],
      content: panelArr,
    };
    setProjectData(data);
  };

  const getAllertAccordingToTable = (dta) => {

    if (allDevices.length !== 0) {
      const alarmArray = dta.map((item, index) => {
        var deviceId = item?.device_id;
        var deviceName = allDevices.find((itm) => {
          return itm._id == deviceId;
        });
        deviceName = deviceName?.meta?.name;
        var type = {
          text : "",
          color : "red"
        }
        if (item?.isAlert === true) {
          type = {
            text : "Alert",
            color : "#faca10"
          }

        } else if (item?.isWarning === false) {
          type = {
            text : "Warning",
            color : "#faca10"
          }
        }

        var panelName = ""
       
        for(var i = 0 ; i < panelList.length; i++){
          var devices = panelList[i]?.devices;
          for(var j = 0 ; j < devices.length; j++){
            if(devices[j]?._id === item?.device_id){
              panelName = panelList[j]?.meta?.name;
              break;
            }
          }
        }
      
        const dta = {
          id: item?._id,
          assets: deviceName,
          panelName : panelName ? panelName : "NA",
          type:  <span style={{color : type.color , marginLeft : '5px'}}>{type.text}</span> ,
          value: item?.value,
          creationTime: item?.createdAt,
        };
        return dta;
      });

      const data = {
        tableHeading: "Alarms",
        heading: [
          { id: 1, title: "SN" },
          { id: 2, title: "Assets" },
          { id: 3, title: "Panel" },
          { id: 4, title: "Alarm Type" },
          { id: 5, title: "Value" },
          { id: 6, title: "Created At" },
        ],
        content: alarmArray,
      };
      setAlertsData(data);
    }
  };

  const getAllPanels = () => {
    const url = endpoints.panel.getSublocationByProjectId + firstProject?._id + "/panels";
    axios
      .get(url)
      .then((res) => {
        if(res.status === 200) {
          const val = res.data?.items;
          getPanelsAccordingToTable(val);
          setPanelList(val);
          dispatch(updateAllPanels(val));
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    var date = previous.getDate() < 10 ? `0${previous.getDate()}` : previous.getDate();
    var month =
      previous.getMonth() + 1 < 10 ? `0${previous.getMonth() + 1}` : previous.getMonth() + 1;
    var year = previous.getFullYear();
    var day = year + "-" + month + "-" + date;
    return day;
  }

  const getAllAlerts = async () => {

    const day = new Date();
    var date = day.getDate() < 10 ? `0${day.getDate()}` : day.getDate();
    var month = day.getMonth() + 1 < 10 ? `0${day.getMonth() + 1}` : day.getMonth() + 1;
    var year = day.getFullYear();
    var today = year + "-" + month + "-" + date;
    var previousDay = await getPreviousDay();
    var startTime = `${previousDay}T21:30:00Z`;
    var endTime = `${today}T21:30:00Z`;

    // const url = endpoints.alerts.getAlerts + "start_time=" + startTime + "&end_time=" + endTime + "&project_id=" + firstProject?._id;
    const url =
      "https://api-staging.invense.in/v1/alert?start_time=2023-05-09T21:30:00Z&end_time=2023-05-11T21:30:00Z&project_id=64461dd06e524d4d86adce0b";

    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          const val = res.data?.items;
          console.log(val , "value here");
          var totlAlert = val.filter((item) => item?.isAlert).length;
          var totlWarning = val.filter((item) => item?.isWarning).length;
          setTotalAlerts(totlAlert)
          setTotalWarnings(totlWarning)
          getAllertAccordingToTable(val);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  const getAllDevices = () => {
    const url = endpoints.device.getDevicesByProjectId + firstProject?._id + "/devices";
    axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.items;
          setAllDevices(val);
          dispatch(updateAllDevices(val));
        }
      })
      .catch((err) => {
        console.log(err, "this is the error");
      });
  };

  const getAllProject = () => {
    const url = endpoints.location.getProjectByOrganizationId + selectedOrganization?._id + "/projects";

    axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.items;
          dispatch(updateProjects(val));
        }
      })
      .catch((err) => {
        console.log(err, "this is the error here");
      });
  };

  const getAllUsers = () =>{
    const url = endpoints.authentication.getAllUsers;
    axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.item;
          dispatch(updateAllUsers(val));
        }
      })
      .catch((err) => {
        console.log(err, "this is the error here");
      });
  }

  useEffect(() => {
    setCard((item) => {
      return { ...item, totalProjects: totalProjects };
    });
    getAllPanels();
    getAllDevices();
  }, [allProjects]);

  useEffect(() => {
    getAllAlerts();
  }, [allDevices]);

  useEffect(() => {
    getAllProject();
    getAllUsers();
  }, [selectedOrganization]);

  

  return (
    <>
      <div className="w-full">
        <div className="grid grid-rows-1 grid-cols-4">
          <HomeCard
            title="Sub Location"
            value={panelList.length}
            subtext=" Total Sub Location"
            image={Location}
            imageStyle={{ width: "18px" }}
          />
          <HomeCard
            title="Assets"
            value={allDevices?.length}
            subtext="Total Assets"
            image={assets}
          />
          <HomeCard title="Warning" value={totalWarnings} subtext=" Total Warning" image={warning} />
          <HomeCard title="Alerts" value={totalAlerts} subtext="Total Alerts" image={alert} />
        </div>

        <div className=" w-full grid grid-flow-row gap-x-4 grid-cols-2">
          <div className=" bg-white rounded-lg mt-1  position: relative ">
            <div className="">
              <div className="flex  pt-2 pl-2 absolute inset-2 z-10">
                <button
                  className="w-32 h-9 text-md  text-white shadow hover:shadow-lg font-roboto rounded-sm"
                  style={{
                    background: view === "map" ? "#32AA57" : "white",
                    color: view === "map" ? "white" : "black",
                  }}
                  onClick={() => setView("map")}
                >
                  Map
                </button>
                <button
                  className="w-32 h-9 text-md shadow hover:shadow-lg font-roboto rounded-sm"
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
                <CustomTable
                  datass={projectData}
                  tableClassName="customTableTable"
                  handleRowClick={onProjectDataRowClick}
                />
              )}
              {view === "map" && <Map />}
            </div>
          </div>

          <div className="">
            {/* alarm report */}
            <CustomDataTables datass={alertsData} />
            <div className="mt-3">
              <CustomDataTables
                datass={{ heading: [], content: [], tableHeading: "Maintenance" }}
                headingStyle={{ padding: "4px", border: "2px solid green" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

