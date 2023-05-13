import React, { useState } from "react";
import Modal from "react-modal";
import "../../../styles/modal.css";
import { IoMdClose } from "react-icons/io";
import "./editDevice.css";
import { FiEdit } from "react-icons/fi";
import "../../../styles/Top5KwhConsumptions.css";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { endpoints } from "services/endpoints";
import axios from "axios";
import { useEffect } from "react";
import Button from "components/Button/Button";
import { toast } from "react-toastify";
import InputBox from "components/InputBox/InputBox";
import SelectBox from "components/SelectBox/SelectBox";
import MenuItem from "@mui/material/MenuItem";

const EditDevice = (props) => {

  const {
    openEditDeviceModal,
    setOpenEditDeviceModal,
    selectedDevice,
    setSelectedDevice,
    tableClassName,
  } = props;


  var usersData = localStorage.getItem("userData");
  var usersData = JSON.parse(usersData);
  const role = usersData.role;

  const selectedOrganization = useSelector((state) => state.CompanyReducer.selectedOrganization);
  const selectedOrganizationId = selectedOrganization._id;
  const selectedOrganizationName = selectedOrganization.name;

  const deviceId = selectedDevice?._id;

  const data = [1, 2, 3, 4, 5, 6];
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [errors, setErrors] = useState({});

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
      margin : "120px 0px"
    },
  };

  const [parameter, setParameter] = useState({
    name: "",
    key: "",
    value: "",
    type: "",
    min: "",
    max: "",
    unit: "",
    gaugeMin: "",
    gaugeMax: "",
  });

  const [parameterList, setParameterList] = useState([]);

  const clearFields = () => {
    setParameter({
      name: "",
      key: "",
      value: "",
      type: "",
      min: "",
      max: "",
      unit: "",
      gaugeMin: "",
      gaugeMax: "",
    });
  };

  const getDeviceDetails = () => {
    const url = endpoints.parameters.getParametersByDeviceId + deviceId;
    axios
      .get(url)
      .then((res) => {
        console.log(res, "response");
        if (res.status === 200) {
          var val = res?.data?.item?.parameters;
          val = Object.values(val);
          setParameterList(val);
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  useEffect(() => {
    getDeviceDetails();
  }, [deviceId]);

  const handleEdit = (dta) => {
    setUpdate(true);
    setParameter({
      name: dta.name,
      key: dta.key,
      value: dta.default,
      type: dta.type,
      min: dta?.min,
      max: dta?.max,
      unit: dta?.unit,
      gaugeMin: dta?.guage_min,
      gaugeMax: dta?.guage_max,
    });
  };

  const handleDelete = (dta) => {
    console.log(dta , "dta here");
    const url = endpoints.parameters.deleteParams + deviceId + "/parameter/" + dta?.key;
    axios
      .delete(url)
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          toast("Parameter deleted successfully", { type: "success" });
          getDeviceDetails();
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "error here");
      });
  };

  const submit = () => {
    const url = endpoints.parameters.updateParams + deviceId + "/parameter/" + parameter?.key;
    var val;

    if (parameter.type === "Gauge") {
      val = {
        name: parameter.name,
      
        default: parameter.value,
        type: parameter.type,
        min: parameter.min,
        max: parameter.max,
        unit: parameter.unit,
        guage_min: parameter.gaugeMin,
        guage_max: parameter.gaugeMax,
      };
    } else {
      val = {
        name: parameter.name,
       
        default: parameter.value,
        type: parameter.type,
        min: parameter.min,
        max: parameter.max,
        unit: parameter.unit,
      };
    }
    setLoading(true);
    axios
      .patch(url, val)
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          toast("Parameter updated successfully", { type: "success" });
          clearFields();
          getDeviceDetails();
          setUpdate(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "error here");
      });
  };

  return (
    <Modal
      isOpen={openEditDeviceModal}
      //   isOpen={true}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName="Overlay"
    >
      <div className="flex justify-between w-full bg-primaryColor items-center">
        <h1 className=" text-white font-roboto font-bold text-2xl p-4 ml-4">EDIT PARAMETER</h1>
        <IoMdClose
          color="white"
          size={26}
          className="mr-6 cursor-pointer"
          onClick={() => setOpenEditDeviceModal(false)}
        />
      </div>
      <div className="px-10 py-3 w-full">
        <div className="flex justify-between items-center my-6 w-full">
          <div className="overflow-x-auto   w-full">
            <div className="py-0 inline-block min-w-full sm:px-6 lg:px-8 ">
              <div className={`${tableClassName} w-full editDeviceBody`}>
                <table className="w-full top5KwhTable bg-white editDeviceBody">
                  <thead className="border-b bg-lightGreen customTableHeading">
                    <tr>
                      <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">SN</th>
                      <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">Name</th>
                      <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">Key</th>
                      <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">Min</th>
                      <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">Max</th>
                      <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">
                        Value
                      </th>
                      <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">Type</th>
                      <th className="font-roboto px-6 py-3 font-bold  text-lg text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {parameterList &&
                      parameterList.map((item, index) => {
                        return (
                          <tr className="border-b " key={index}>
                            <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium capitalize">
                              {item.name}
                            </td>
                            <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium capitalize">
                              {item.key}
                            </td>
                            <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium capitalize">
                              {item.min}
                            </td>
                            <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium capitalize">
                              {item.max}
                            </td>
                            <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium capitalize">
                              {item.default}
                            </td>
                            <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium capitalize">
                              {item.type}
                            </td>
                            <td className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium capitalize">
                              <div className="flex justify-center items-center">
                                <FiEdit
                                  className="mx-3"
                                  size={23}
                                  color="black"
                                  onClick={() => handleEdit(item)}
                                />

                                {role === "superAdmin" && 
                                <MdDelete
                                  color="red"
                                  size={25}
                                  className=""
                                  onClick={() => handleDelete(item)}
                                />}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* here we are adding the fields  */}
            <div className="px-10 py-3 w-full mt-8">
              <input
                type="text"
                id="first_name"
                className="h-12 capitalize border-2 rounded w-full font-roboto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                placeholder="Device Name"
                value={selectedDevice?.meta?.name}
                required
                readOnly
              />
            </div>
            <div className="w-full px-10 py-3">
              <div className="grid grid-cols-3 gap-8">
                <div className="mb-2">
                  <InputBox
                    type="text"
                    id="first_name"
                    className="h-12 border-2 font-roboto rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                    label="Parameter Name"
                    value={parameter?.name}
                    onChange={(e) =>
                      setParameter((val) => {
                        return { ...val, name: e.target.value };
                      })
                    }
                    error={errors.name}
                  />
                </div>
                <div className="mb-2">
                  <InputBox
                    type="text"
                    id="first_name"
                    className="h-12 border-2 font-roboto rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                    label="Key"
                    value={parameter?.key}
                    onChange={(e) =>
                      setParameter((val) => {
                        return { ...val, key: e.target.value };
                      })
                    }
                    error={errors.key}
                    disabled={true}
                  />
                </div>
                <div className="mb-2">
                  <InputBox
                    type="number"
                    id="first_name"
                    className="h-12 border-2 font-roboto rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                    label="Value"
                    value={parameter?.value}
                    onChange={(e) =>
                      setParameter((val) => {
                        return { ...val, value: e.target.value };
                      })
                    }
                    error={errors.value}
                  />
                </div>

                <div className="mb-2">
                  <SelectBox
                    label="Device Type"
                    value={parameter?.type}
                    onChange={(e) =>
                      setParameter((val) => {
                        return { ...val, type: e.target.value };
                      })
                    }
                  >
                    <MenuItem value="Gauge">Gauge</MenuItem>
                    <MenuItem value="Text">Text</MenuItem>
                    <MenuItem value="ON-OFF">ON-OFF</MenuItem>
                    <MenuItem value="Graph">Graph</MenuItem>
                  </SelectBox>
                </div>

                <>
                  <div className="mb-2">
                    <InputBox
                      type="text"
                      id="first_name"
                      label="Min Value"
                      value={parameter?.min}
                      onChange={(e) =>
                        setParameter((val) => {
                          return { ...val, min: e.target.value };
                        })
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <InputBox
                      type="text"
                      id="first_name"
                      label="Max Value"
                      value={parameter?.max}
                      onChange={(e) =>
                        setParameter((val) => {
                          return { ...val, max: e.target.value };
                        })
                      }
                    />
                  </div>
                </>

                {parameter.type === "Gauge" && (
                  <>
                    <div className="mb-2">
                      <InputBox
                        type="text"
                        id="first_name"
                        label="Gauge Min Value"
                        value={parameter?.gaugeMin}
                        onChange={(e) =>
                          setParameter((val) => {
                            return { ...val, gaugeMin: e.target.value };
                          })
                        }
                      />
                    </div>
                    <div className="mb-2">
                      <InputBox
                        type="text"
                        id="first_name"
                        label="Gauge Max Value"
                        value={parameter?.gaugeMax}
                        onChange={(e) =>
                          setParameter((val) => {
                            return { ...val, gaugeMax: e.target.value };
                          })
                        }
                      />
                    </div>
                  </>
                )}
                <div className="mb-2">
                  <InputBox
                    type="text"
                    id="first_name"
                    label="Unit"
                    value={parameter?.unit}
                    onChange={(e) =>
                      setParameter((val) => {
                        return { ...val, unit: e.target.value };
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex justify-center items-center w-full mt-3">
                <Button title={"Save"} loading={loading} onClick={submit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditDevice;
