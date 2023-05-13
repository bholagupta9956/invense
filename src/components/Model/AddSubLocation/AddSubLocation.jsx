import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../../../styles/modal.css";
import { IoMdClose } from "react-icons/io";
import Button from "components/Button/Button";
import { endpoints } from "services/endpoints";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { BsPlusCircleFill } from "react-icons/bs";
import { MultiSelect } from "react-multi-select-component";
import { IoMdCloseCircleOutline } from "react-icons/io";
import InputBox from "components/InputBox/InputBox.jsx";


const AddSubLocation = (props) => {
  
  const {
    handleCancelBtn,
    update,
    setUpdate,
    selectedProjectName,
    getAllSubLocation,
    setSelectedSubLocation,
    selectedSubLocation,
  } = props;

  const [loading, setLoading] = useState(false);
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
      minWidth: "1000px",
    },
  };

  const [name, setName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [longitude, setLongitude] = useState("");
  const [lattitude, setLattitude] = useState("");
  const [installationDate, setInstallationDate] = useState("");
  const [errors, setErrors] = useState({});
  const [projectList, setProjectList] = useState([]);
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [allDevices, setAllDevices] = useState([{ label: "", value: "" }]);
  const [panelType, setPanelType] = useState("");
  const [incomerDevice, setIncomerDevice] = useState({
    id: "",
    name: "",
  });

  const [params, setParams] = useState({
    name: "",
    key: "",
    default: "",
  });

  const [allParams, setAllParams] = useState([]);
  const [intervals, setIntervals] = useState("");

  const clearField = () => {
    setName("");
    setLongitude("");
    setLattitude("");
  };

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

  const addParameters = () => {
    if (allParams.length === 4) {
      toast("maximum 4 params can be added", { type: "warning" });
    } else {
      setAllParams((item) => {
        return [...item, params];
      });
      setParams({ name: "", key: "", default: "" });
    }
  };

  const handleRemoveParams = (ind) => {
    const filterData = allParams.filter((item, index) => {
      return index !== ind;
    });
    setAllParams(filterData);
  };

  const submit = () => {
    if (!name) {
      setErrors({ name: "Please enter panel name" });
    } else if (!lattitude) {
      setErrors({ lattitude: "Please enter lattitude" });
    } else if (!longitude) {
      setErrors({ longitude: "Please enter longitude" });
    } else if (!intervals) {
      setErrors({ intervals: "Please enter intervals" });
    } else {
      const url = endpoints.panel.createPanel;

      var devicesId = selectedDevices.map((item) => {
        return item.id;
      });
      var prams = {};

      allParams.map((item, index) => {
        var key = item.key;
        prams[key] = item;
      });

      const data = {
        name: name,
        lat: lattitude,
        lng: longitude,
        project_id: projectId,
        energyMeta: {
          incomer_id: incomerDevice?.id,
        },
        panelType: panelType,
        devices: devicesId,
        updateInterval: intervals,
        defaultParametersType: panelType,
        parameters: prams,
      };

      setLoading(true);

      axios
        .post(url, data, { headers: headers })
        .then((res) => {
          setLoading(false);
          if (res.status == 201) {
            toast("Panel added successfully", { type: "success" });
            clearField();
            handleCancelBtn();
            getAllSubLocation();
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "this is the error");
        });
    }
  };

  const updateSubPanel = () => {
    if (!name) {
      setErrors({ name: "Please enter panel name" });
    } else if (!lattitude) {
      setErrors({ latttitude: "Please enter lattitude" });
    } else if (!longitude) {
      setErrors({ longitude: "Please enter longitude" });
    } else {
      const url = endpoints.panel.updatePanel + selectedSubLocation?.panelId;
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
            toast("Panel updated successfully", { type: "success" });
            clearField();
            handleCancelBtn();
            getAllSubLocation();
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

  const getAllDevices = () => {
    const url = endpoints.device.getDevicesByProjectId + projectId + "/devices";
    axios
      .get(url, { headers: headers })
      .then((res) => {
        if (res.status == 200) {
          var val = res.data?.items;
          val = val.map((item, index) => {
            var dta = {
              value: item?.meta?.name,
              id: item?._id,
              label: item?.meta?.name,
            };
            return dta;
          });

          setAllDevices(val);
        }
      })
      .catch((err) => {
        console.log(err, "this is the error");
      });
  };

  useEffect(() => {
    getAllProject();
  }, [selectedOrganizationId]);

  useEffect(() => {
    getAllDevices();
  }, [projectId]);

  useEffect(() => {
    if (update) {
      setName(selectedSubLocation?.panel);
      setLattitude(selectedSubLocation?.lattitude);
      setLongitude(selectedSubLocation?.longitude);
      setProjectName(selectedProjectName);
    }
  }, []);

  const handleIncomerDevice = (e) => {
    const val = e.target.value;
    const filterd = allDevices.find((item, index) => {
      return item.value === val;
    });
    console.log(filterd, "Dd");
    setIncomerDevice({
      id: filterd?.id,
      name: filterd?.value,
    });
  };

  return (
    <Modal
      isOpen={true}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName="Overlay"
    >
      <div className="rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="px-0">
          <div className="flex justify-between font-bold font-roboto text-xl mb-2 bg-primaryColor text-white px-6 py-4">
            <div>ADD NEW SUB LOCATION</div>
            <IoMdClose
              color="white"
              size={26}
              className="mr-6 cursor-pointer"
              onClick={handleCancelBtn}
            />
          </div>
        </div>
        <div className="px-6 py-6 pt-4 pd-4">
          <div className="mb-4 flex-1">
            <select
              type="text"
              id="first_name"
              className="h-12 border-2 font-roboto rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
              placeholder="Enter Project Name"
              required
              value={projectName}
              disabled={update}
              onChange={handleProjectSelection}
            >
              <option value="">Choose</option>
              {projectList.map((project, index) => {
                return (
                  <option value={project.name} key={index}>
                    {project.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-4">
            <InputBox
              type="text"
              placeholder="Panel Name"
              value={name}
              label="Panel Name"
              onChange={(e) => setName(e.target.value)}
              required
              error={errors.name}
            />
          </div>
          <div className="mb-4">
            <MultiSelect
              options={allDevices}
              tagInputProps={{ placeholder: "Select Devices to be included in panel" }}
              value={selectedDevices}
              onChange={setSelectedDevices}
              hasSelectAll={false}
              labelledBy="Select Devices to be included in panel"
            />
          </div>
          <div className="grid grid-cols-3 gap-8 mb-4">
            <div className="mb-2">
              <InputBox
                type="text"
                placeholder="Lattitude"
                value={lattitude}
                label="Lattitude"
                onChange={(e) => setLattitude(e.target.value)}
                required
                error={errors.lattitude}
              />
            </div>
            <div className="mb-2">
              <InputBox
                label="Longitude"
                type="text"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                error={errors.longitude}
              />
            </div>
            <div className="mb-2">
              <InputBox
                type="date"
                // label="Installation Date"

                required
                value={installationDate}
                onChange={(e) => setInstallationDate(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-4">
            <div>
              <select
                type="text"
                id="first_name"
                className="h-12 border-2 font-roboto rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                placeholder="Enter Project Name"
                required
                value={panelType}
                onChange={(e) => setPanelType(e.target.value)}
              >
                <option value="">Select Panel Type</option>
                <option value="energy">Energy</option>
                <option value="water">Water</option>
                <option value="automotive">Automotive</option>
              </select>
            </div>
            <div>
              <select
                type="text"
                id="first_name"
                className="h-12 border-2 font-roboto rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                placeholder="Enter Project Name"
                required
                value={incomerDevice?.name}
                onChange={handleIncomerDevice}
              >
                <option value="">Select Incomer device</option>
                {allDevices.map((item, index) => {
                  return <option value={item?.value}>{item?.value}</option>;
                })}
              </select>
            </div>
            <div className="">
              <InputBox
                error={errors?.intervals}
                label="Update Interval"
                value={intervals}
                onChange={(e) => setIntervals(e.target.value)}
                type="number"
              />
            </div>
          </div>

          {/* from here we are adding the parameters part; */}

          <div className="w-full border-2 border-green-600 rounded-sm p-3  mt-6">
            {panelType === "water" && (
              <>
                <div className="flex justify-between items-center">
                  <div className="grid grid-cols-3 gap-8 w-11/12">
                    <div className="">
                      <InputBox
                        type="text"
                        label="Name"
                        value={params.name}
                        onChange={(e) =>
                          setParams((val) => {
                            return { ...val, name: e.target.value };
                          })
                        }
                      />
                    </div>
                    <div className="">
                      <InputBox
                        type="text"
                        label="Key"
                        value={params.key}
                        onChange={(e) =>
                          setParams((val) => {
                            return { ...val, key: e.target.value };
                          })
                        }
                      />
                    </div>
                    <div className="">
                      <InputBox
                        type="text"
                        label="Value"
                        value={params.default}
                        onChange={(e) =>
                          setParams((val) => {
                            return { ...val, default: e.target.value };
                          })
                        }
                      />
                    </div>
                  </div>

                  <BsPlusCircleFill color="var(--primary)" size={23} onClick={addParameters} />
                </div>
              </>
            )}

            {/* here including the table  */}
            {allParams.length != 0 && (
              <table className="w-full top5KwhTable bg-white my-6">
                <thead>
                  <tr>
                    <th className="font-roboto px-6 py-2 text-sm	  text-center">Name</th>
                    <th className="font-roboto px-6 py-2 text-sm	  text-center">Key</th>
                    <th className="font-roboto px-6 py-2 text-sm	  text-center">Value</th>
                    <th className="font-roboto px-6 py-2 text-sm	  text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allParams.map((dta, index) => {
                    return (
                      <tr key={index}>
                        <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium capitalize">
                          {dta.name}
                        </td>
                        <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium">
                          {dta.key}
                        </td>
                        <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium">
                          {dta.default}
                        </td>
                        <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium flex justify-center">
                          <IoMdCloseCircleOutline
                            size={23}
                            color="var(--primary)"
                            onClick={() => handleRemoveParams(index)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
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
              onClick={update ? updateSubPanel : submit}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddSubLocation;
