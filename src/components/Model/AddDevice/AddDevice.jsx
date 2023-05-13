import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../../../styles/modal.css";
import { IoMdClose } from "react-icons/io";
import Button from "components/Button/Button";
import { endpoints } from "services/endpoints";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import InputBox from "components/InputBox/InputBox";
import SelectBox from "components/SelectBox/SelectBox";
import MenuItem from "@mui/material/MenuItem";


const AddDevice = (props) => {

  const {
    openAddDeviceModal,
    setOpenAddDeviceModal,
    update,
    setUpdate,
    getAllDevices,
    selectedDevice,
    setSelectedDevice,
  } = props;

  const selectedOrganization = useSelector((state) => state.CompanyReducer.selectedOrganization);
  const selectedOrganizationId = selectedOrganization._id;
  const selectedOrganizationName = selectedOrganization.name;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      padding: "0px",
      minWidth: "1100px",
    },
  };

  const [name, setName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [longitude, setLongitude] = useState("");
  const [lattitude, setLattitude] = useState("");
  const [deviceId , setDeviceId] = useState("")
  const [panelId , setPanelId] = useState("");
  const [imeiNumber , setImeiNumber] = useState("");
  const [installationDate, setInstallationDate] = useState("");
  const [errors, setErrors] = useState({});
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleProjectSelection = (e) => {
    const val = e.target.value;
    const selectdProject = projectList.find((item, index) => {
      return item.name === val;
    });
    setProjectName(val);
    setProjectId(selectdProject?._id);
  };

  const headers = {
    "Content-Type": "application/json",
  };

  const clearField = () => {
    setName("");
    setLongitude("");
    setLattitude("");
    setUpdate(false);
    setProjectId("");
    setProjectName("");
    setSelectedDevice({});
  };

  const submit = () => {
    if (!name) {
      setErrors({ name: "Please enter device name" });
    } else if (!lattitude) {
      setErrors({ latttitude: "Please enter lattitude" });
    } else if (!longitude) {
      setErrors({ longitude: "Please enter longitude" });
    } else {
      const url = endpoints.device.createDevice;
      const data = {
        name: name,
        lat: lattitude,
        lng: longitude,
        project_id: projectId,
      };

      setLoading(true);

      axios
        .post(url, data, { headers: headers })
        .then((res) => {
          setLoading(false);
          if (res.status == 201) {
            toast("Device added successfully", { type: "success" });
            clearField();
            setOpenAddDeviceModal(false);
            getAllDevices();
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "this is the error");
        });
    }
  };

  const updateDevice = () => {
    if (!name) {
      setErrors({ name: "Please enter device name" });
    } else if (!lattitude) {
      setErrors({ latttitude: "Please enter lattitude" });
    } else if (!longitude) {
      setErrors({ longitude: "Please enter longitude" });
    } else {
      const url = endpoints.device.updateDevice + selectedDevice?._id;
      const data = {
        name: name,
        lat: lattitude,
        lng: longitude,
      };

      setLoading(true);

      axios
        .patch(url, data, { headers: headers })
        .then((res) => {
          setLoading(false);
          if (res.status == 200) {
            toast("Device updated successfully", { type: "success" });
            clearField();
            setOpenAddDeviceModal(false);
            getAllDevices();
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "this is the error");
        });
    }
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
        }
      })
      .catch((err) => {
        console.log(err, "this is the error here");
      });
  };

  const handleCancelBtn = () => {
    setOpenAddDeviceModal(false);
    clearField();
  };

  useEffect(() => {
    getAllProject();
  }, [selectedOrganizationId]);

  useEffect(() => {
    if (update) {
      const projeceId = selectedDevice?.project_id;
      setProjectId(projeceId);
      var projectName = projectList.find((itm) => itm._id === projeceId);
      setProjectName(projectName.name);

      var dta = selectedDevice?.meta;
      setName(dta?.name);
      setLattitude(dta?.lat);
      setLongitude(dta?.lng);
    }
  }, [selectedDevice]);

  return (
    <>
      <Modal
        isOpen={openAddDeviceModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <div className="flex justify-between w-full bg-primaryColor items-center">
          <h1 className=" text-white font-roboto font-bold text-2xl p-4 ml-4">ADD DEVICE</h1>
          <IoMdClose
            color="white"
            size={26}
            className="mr-6 cursor-pointer"
            onClick={handleCancelBtn}
          />
        </div>
        <div className="px-10 py-3 w-full">
          <div className="px-6 py-6 pt-4 pd-4">
            <div className="mb-8 flex-1">
              <SelectBox
                label="Enter Project Name"
                value={projectName}
                onChange={handleProjectSelection}
                // disabled={update}
              >
                <MenuItem value="">Choose</MenuItem>

                {projectList.map((project, index) => {
                  return (
                    <MenuItem value={project.name} key={index}>
                      {project.name}
                    </MenuItem>
                  );
                })}
              </SelectBox>
            </div>
            <div className="mb-8">
              <InputBox
                type="text"
                label="Device Name"
                value={name}
                error={errors?.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="mb-2">
                <InputBox
                  type="text"
                  id="first_name"
                  label="Lattitude"
                  value={lattitude}
                  onChange={(e) => setLattitude(e.target.value)}
                  error={errors?.lattitude}
                />
              </div>
              <div className="mb-2">
                <InputBox
                  type="text"
                  id="first_name"
                  className="h-12 border-2 font-roboto rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                  label="Longitude"
                  error={errors?.longitude}
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <InputBox
                  type="text"
                  id="first_name"
                  className="h-12 border-2 font-roboto rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                  label="Device ID"
                  value={deviceId}
                  onChange={(e) => setDeviceId(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <InputBox
                  type="text"
                  id="first_name"
                  className="h-12 border-2 font-roboto rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                  label="IMEI Number"
                  value={imeiNumber}
                  onChange={(e) => setImeiNumber(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <InputBox
                  type="text"
                  id="first_name"
                  className="h-12 border-2 font-roboto rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                  label="Panel ID"
                  value={panelId}
                  onChange={(e) => setPanelId(e.target.value)}
                />
              </div>
             
            </div>

            <div className="px-6 py-6 pt-4 pd-4 font-roboto flex justify-center gap-20 mt-8">
              <button
                onClick={handleCancelBtn}
                className="h-12 border-2 w-48 rounded font-roboto  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
              >
                Cancel
              </button>
              <Button
                title={update ? "Update" : "Save"}
                loading={loading}
                onClick={update ? updateDevice : submit}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddDevice;
