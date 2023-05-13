// export default NewLocation;
import TableCustom from "components/TableCustom/TableCustom";
import React, { useState, useEffect } from "react";
import { Tab } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { routes } from "routes";
import { FaFilter } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import "../../styles/Top5KwhConsumptions.css";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import DeviceFilter from "components/Model/DeviceFilter/DeviceFilter";
import AddDevice from "components/Model/AddDevice/AddDevice";
import EditDevice from "components/Model/EditDevice/EditDevice";
import AddParameterToDevice from "components/Model/AddParameterToDevice/AddParameterToDevice";
import { useSelector } from "react-redux";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";
import { endpoints } from "services/endpoints";
import InputBox from "components/InputBox/InputBox";
import { toast } from "react-toastify";
import { generatePath  } from "react-router-dom";


const Device = () => {

  const [activeBtn, setActiveBtn] = useState("location");
  const [inputValue, setInputValue] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [openAddDeviceModal, setOpenAddDeviceModal] = useState(false);
  const [openEditDeviceModal, setOpenEditDeviceModal] = useState(false);
  const [allDevices, setAllDevices] = useState([]);
  const [deviceList , setDeviceList] = useState([]);
  const [openAddParameterDeviceModal, setOpenAddParameterDeviceModal] = useState(false);
  const [selectedDevice , setSelectedDevice] = useState({});
  const history = useHistory();

  const [projectList, setProjectList] = useState([]);
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [update, setUpdate] = useState(false);

  const selectedOrganization = useSelector((state) => state.CompanyReducer.selectedOrganization);
  const selectedOrganizationId = selectedOrganization._id;
  const selectedOrganizationName = selectedOrganization.name;

  const handleProjectSelection = (e) => {
    const val = e.target.value;
    const filterDta = projectList.find((item, index) => {
      return item.name === val;
    });
    setSelectedProjectId(filterDta._id);
    setSelectedProjectName(filterDta.name);
  };

 

  const headers = {
    "Content-Type": "application/json",
  };

  const getAllProject = () => {
    const url =
      endpoints.location.getProjectByOrganizationId + selectedOrganizationId + "/projects";

    axios
      .get(url, { headers: headers })
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.items;
          setProjectList(val);
          const firstOrg = val[0];
          setSelectedProjectId(firstOrg?._id);
          setSelectedProjectName(firstOrg?.name);
        }
      })
      .catch((err) => {
        console.log(err, "this is the error here");
      });
  };

  const getAllDevices = () => {

    const url = endpoints.device.getDevicesByProjectId + selectedProjectId + "/devices";
    axios
      .get(url, { headers: headers })
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.items;
          setAllDevices(val);
          setDeviceList(val)
        }
      })
      .catch((err) => {
        console.log(err, "this is the error");
      });
  };

  useEffect(() => {
    getAllDevices();
  }, [selectedProjectId]);

  useEffect(() => {
    getAllProject();
  }, [selectedOrganizationId]);

  const handleEditDevice = (dta) =>{
    setSelectedDevice(dta);
    setUpdate(true);
    setOpenAddDeviceModal(true)
  }

  // from here we are writing code for updating the parameter ;
  const handleAddParameter = (dta) => {
    setSelectedDevice(dta)
    setOpenAddParameterDeviceModal(true);
  };

  const handleSearch = (e) =>{
    var val = e.target.value
    setInputValue(e.target.value)
    val = val.toLowerCase();
    const filterDta = deviceList.filter((item,index) =>{
      var itm = item?.meta;
        return itm?.name.toLowerCase().includes(val) || itm?.lat.toString().includes(val) || itm?.lng.toString().includes(val)
    })
    setAllDevices(filterDta);
  }

  const handleEditDeviceParameter = (dta) =>{
    setOpenEditDeviceModal(true)
    setSelectedDevice(dta)
  }   

  var usersData = localStorage.getItem("userData");
  var usersData = JSON.parse(usersData);
  const role = usersData.role;
  
  const handleDelete = (dta) =>{
    const url = endpoints.device.deleteDevice + dta?._id;
    axios
      .delete(url)
      .then((res) => {
        if (res.status === 200) {
          toast("device deleted", { type: "success" });
          getAllDevices();
        }
      })
      .catch((err) => {
        console.log(err, "delete error");
      });
  }

  const handleDeviceSelect = (dta) =>{
    var deviceName = dta?.meta?.name;
    deviceName = deviceName.replaceAll(" " , "-")
     const path = generatePath("/Devices/:deviceName/:deviceId" , { deviceName : deviceName, deviceId : dta?._id});
     history.push(path)
  }
  
  return (
    <>
      <div className="w-full my-4 mx-2 mr-6 p-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold font-roboto text-2xl">ASSETS MANAGEMENT</h1>
          <div className="flex items-center w-64">
            <select
              name=""
              id=""
              value={selectedProjectName}
              onChange={(e) => handleProjectSelection(e)}
              className="px-4 border-2 border-gray-400 rounded-md bg-white flex justify-between items-center h-12 ml-6 w-60"
            >
              {projectList.length != 0 &&
                projectList.map((item, index) => {
                  return (
                    <option value={item.name} key={index}>
                      {" "}
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="px-4 border-2 border-gray-400 rounded-md bg-white flex justify-between items-center h-12 ml-6 ">
            <HiOutlineSearch color="gray" width={24} />
            <input
              type="text"
              placeholder="Seaarch here .."
              className="font-roboto text-gray-600 text-md ml-3 outline-none w-56"
              value={inputValue}
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <div className="flex items-center ">
            <FaFilter
              color="#26a64e"
              size={32}
              onClick={() => setShowFilter(true)}
              className="cursor-pointer"
            />
            <div
              className="flex items-center ml-6 cursor-pointer"
              onClick={() => setOpenAddDeviceModal(true)}
            >
              <BsPlusCircleFill color="#26a64e" size={32} />
              <div className="font-roboto font-bold text-xl ml-2">Add Device</div>
            </div>
          </div>
        </div>

        {/* from here we are designing the table */}
        <table className="w-full top5KwhTable bg-white my-3">
          <thead>
            <tr>
              
              <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">SN</th>
              <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">Device</th>
              <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">Device ID</th>
              <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">Lattitude</th>
              <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">Longitude</th>
              <th className="font-roboto px-6 py-3 font-bold  text-lg text-center" style={{textAlign : "center"}}>
                Add Delete Parameter
              </th>
              <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {allDevices.length != 0 &&
              allDevices.map((device, index) => {
                var dta = device?.meta;
                return (
                  <tr key={index}>
                    <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium capitalize">
                      {index + 1}
                    </td>
                    <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium capitalize" onClick={() => handleDeviceSelect(device)}>
                      {dta.name}
                    </td>
                    <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium">
                      {device._id}
                    </td>
                    <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium">
                      {dta.lat}
                    </td>
                    <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium">
                      {dta.lng}
                    </td>
                    <td className="font-roboot px-6 py-2 text-sm text-center  text-gray-600 font-medium ">
                      <div className="flex justify-center items-center">
                        { role === "superAdmin" && 
                        <BsPlusCircleFill
                          color="#26a64e"
                          size={25}
                          className="mx-3"
                          onClick={() => handleAddParameter(device)}
                        /> }
                        {(role === "admin" || role === "superAdmin") &&   <FiEdit className="mx-3" size={25} color="black" onClick={() => handleEditDeviceParameter(device)}/>}
                        {role === "user" && <AiFillEye className="mx-3" size={23} color="black" />}
                      </div>
                    </td>
                    <td className="font-roboot px-6 py-2 text-sm text-center  text-gray-600 font-medium ">
                      <div className="flex justify-center items-center">
                       {(role === "admin" || role === "superAdmin") &&   <FiEdit className="mx-3" size={23} color="black" onClick={() => handleEditDevice(device)}/> }
                       {role === "superAdmin" &&  <MdDelete color="red" size={25} className="" onClick={() => handleDelete(device)}/> }
                       {role === "user" && <AiFillEye className="mx-3" size={23} color="black" />}
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {/* here we are adding the device filter */}

        <DeviceFilter showFilter={showFilter} setShowFilter={setShowFilter} />

        <EditDevice
          openEditDeviceModal={openEditDeviceModal}
          setOpenEditDeviceModal={setOpenEditDeviceModal}
          selectedDevice={selectedDevice}
          setSelectedDevice={setSelectedDevice}
          update={update}
          setUpdate={setUpdate}
        />

        <AddDevice
          openAddDeviceModal={openAddDeviceModal}
          setOpenAddDeviceModal={setOpenAddDeviceModal}
          getAllDevices={getAllDevices}
          selectedDevice={selectedDevice}
          setSelectedDevice={setSelectedDevice}
          update={update}
          setUpdate={setUpdate}
        />

        <AddParameterToDevice
          openAddParameterDeviceModal={openAddParameterDeviceModal}
          setOpenAddParameterDeviceModal={setOpenAddParameterDeviceModal}
          setOpenAddDeviceModal={setOpenAddDeviceModal}
          selectedDevice={selectedDevice}

        />
      </div>
    </>
  );
};

export default Device;





