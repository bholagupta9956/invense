import React, { useState } from "react";
import Modal from "react-modal";
import "../../../styles/modal.css";
import { IoMdClose } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "services/endpoints";
import axios from "axios";
import Button from "components/Button/Button";
import SelectBox from "components/SelectBox/SelectBox";
import MenuItem from "@mui/material/MenuItem";
import InputBox from "components/InputBox/InputBox";

const AddParameterToDevice = (props) => {
  const { openAddParameterDeviceModal, setOpenAddParameterDeviceModal, selectedDevice, update } =
    props;

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

  const [loading, setLoading] = useState(false);
  const [installationDate, setInstallationDate] = useState("");
  const [errors, setErrors] = useState({});

  const clearFields = () => {
    setParameter({
      name: "",
      key: "",
      value: "",
      type: "",
      min: "",
      max: "",
      unit: "",
    });
  };

  const submit = () => {
    if (!parameter.name) {
      setErrors({ name: "Please enter parameter name" });
    } else if (!parameter.key) {
      setErrors({ Key: "Please enter key" });
    } else if (!parameter.value) {
      setErrors({ value: "Please enter value" });
    } else {
      setErrors({});
      const url = endpoints.parameters.createParams + selectedDevice?._id + "/parameter";

      var val;

      if (parameter.type === "Gauge") {
        val = {
          name: parameter.name,
          key: parameter.key,
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
          key: parameter.key,
          default: parameter.value,
          type: parameter.type,
          min: parameter.min,
          max: parameter.max,
          unit: parameter.unit,
        };
      }

      setLoading(true);
      axios
        .post(url, val)
        .then((res) => {
          setLoading(false);
          if (res.status === 201) {
            setOpenAddParameterDeviceModal();
            clearFields();
            toast("parameter added successfully", { type: "success" });
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "this is the error");
        });
    }
  };

  const updateDevice = () => {};

  const [jsonData, setJsonData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const data = JSON.parse(reader.result);
      setJsonData(data);
    };
    reader.readAsText(file);
  };

  const uploadData = (dta , ind) =>{
    const url = endpoints.parameters.createParams + selectedDevice?._id + "/parameter";
    axios
        .post(url, dta)
        .then((res) => {
          if (res.status === 201) {
            clearFields();
            console.log(res , "res")
            
            return true;
          }
        })
        .catch((err) => {
          console.log(err, "this is the error");
          return false
        });
  }

  const submitAllParameter = async() => {
    for(var i = 0 ; i < jsonData.length ; i++){
      const val = jsonData[i]
      const result = await uploadData(val , i);
    }
    toast("all the parameters added" , {type : "success"})
    setOpenAddParameterDeviceModal();
    setJsonData(null)
  };

  return (
    <Modal
      isOpen={openAddParameterDeviceModal}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName="Overlay"
    >
      <div className="flex justify-between w-full bg-primaryColor items-center">
        <h1 className=" text-white font-roboto font-bold text-2xl p-4 ml-4">
          ADD PARAMETER TO A DEVICE
        </h1>
        <IoMdClose
          color="white"
          size={26}
          className="mr-6 cursor-pointer"
          onClick={() => setOpenAddParameterDeviceModal(false)}
        />
      </div>
      <div className="px-10 py-3 w-full mt-6">
        <div className="mb-8">
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
              <MenuItem value="Guage">Guage</MenuItem>
              <MenuItem value="Text">Text</MenuItem>
              <MenuItem value="ON-OFF">ON-OFF</MenuItem>
              {/* <MenuItem value="Graph">Graph</MenuItem> */}
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
          <div className="mb-2">
            <InputBox type="file" id="first_name" onChange={(e) => handleFileUpload(e)} />
          </div>
          {jsonData && (
            <div className="flex justify-around items-center  font-roboto">
              <Button title="Submit All Parameter" loading={false} onClick={submitAllParameter} />
            </div>
          )}
        </div>
        <div className="flex justify-around items-center my-10 font-roboto">
          <Button
            title={update ? "Update Parameter" : "Add Parameter"}
            loading={loading}
            onClick={update ? updateDevice : submit}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddParameterToDevice;
