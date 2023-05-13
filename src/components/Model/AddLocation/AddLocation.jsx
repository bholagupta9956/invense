import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../../../styles/modal.css";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import Button from "components/Button/Button";
import { endpoints } from "services/endpoints";
import { toast, ToastContainer } from "react-toastify";


const AddLocation = (props) => {

  const { setView, handleCancelBtn , update , setUpdate  , getAllProject , selectedProject , selectedProjectId , setSelectedProject , setSelectedProjectId , organizationId , setShowLocation } = props;

  const [selectedOrganizationId, setSelectedOrganizationId] = useState("");
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [allCompanyList, setAllCompanyList] = useState([]);
  const [projectName , setProjectName] = useState("")
  const [lattitude , setLattitude] = useState("")
  const [longitude ,setLongitude] = useState("");
  const [installationDate , setInstallationDate] = useState('');
  const [loading , setLoading] = useState(false);
  const [errors , setErrors] = useState({})


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

  const clearFields = () =>{
    setProjectName("")
    setLattitude("")
    setLongitude("")
    setInstallationDate("")
    setLoading(false)
    setErrors({})
    setSelectedOrganization("")
    setSelectedOrganizationId("")
    setSelectedProject({})
    setUpdate(false)
  }

  const headers = {
    "Content-Type": "application/json",
  };

  const getAllCompany = () => {
    const url = endpoints.company.getCompany;
    axios
      .get(url, { headers: headers })
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.items;
          setAllCompanyList(val);
          const firstOrg = val[0];
          setSelectedOrganization(firstOrg.name);
          setSelectedOrganizationId(firstOrg._id);
        }
      })
      .catch((err) => {
        console.log(err, "this is the error here");
      });
  };

  const handleCompanySelection = (e) => {
    const val = e.target.value;
    const selectdComp = allCompanyList.find((item, index) => {
      return item.name === val;
    });
    setSelectedOrganizationId(selectdComp._id);
    setSelectedOrganization(val);
  };

  const updateProject = () =>{

    if(!projectName){
      setErrors({name : "Please enter project name"})
    }
    else if(!lattitude){
      setErrors({lattitude : "Please enter lattitude"})
    }
    else if(!longitude){
      setErrors({longitude : "Please enter longitude"})
    }
    else {
      setErrors({})
      setLoading(true)
      const url = endpoints.location.updateProject + selectedProjectId
      const data = {
        name : projectName ,
        lat : lattitude ,
        lng : longitude ,
        installation_date : installationDate
      }

      axios.patch(url , data , {headers : headers})
      .then((res) =>{
        setLoading(false)
        if(res.status === 200){
          toast("Project updated successfully" , {type : "success"});
          getAllProject();
          clearFields()
          setShowLocation(false)
        }
      })
      .catch((err) =>{
        setLoading(false)
        console.log(err , 'this is the error here')
      })
    }
  }
  const submit = () =>{
    if(!projectName){
      setErrors({name : "Please enter project name"})
    }
    else if(!lattitude){
      setErrors({lattitude : "Please enter lattitude"})
    }
    else if(!longitude){
      setErrors({longitude : "Please enter longitude"})
    }
    else {
      setErrors({})
      setLoading(true)
      const url = endpoints.location.createProject
      const data = {
        name : projectName ,
        lat : lattitude ,
        lng : longitude ,
        organization_id : organizationId
      }

      axios.post(url , data , {headers : headers})
      .then((res) =>{
        setLoading(false)
        if(res.status === 201){
          toast("Project created successfully" , {type : "success"});
          getAllProject();
          clearFields()
          setShowLocation(false)
        }
      })
      .catch((err) =>{
        setLoading(false)
        console.log(err , 'this is the error here')
      })
    }
  }

  useEffect(() =>{
    if(update){
      setProjectName(selectedProject?.location)
      setLattitude(selectedProject?.lattitude)
      setLongitude(selectedProject?.longitude)
      const organization = allCompanyList.find((item) => {return item._id === organizationId});
      setSelectedOrganizationId(organizationId);
      setSelectedOrganization(organization);
    }
  },[selectedProject]);

  useEffect(() => {
    getAllCompany();
  }, []);

  const cancelBtn = () =>{
    handleCancelBtn();
    clearFields();
  }

  

  return (
    <Modal
      isOpen={true}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName="Overlay"
    >
      <div className="rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="px-0">
          <div className="flex justify-between font-bold text-xl mb-2 bg-primaryColor text-white px-6 py-4 font-roboto">
            <div> ADD NEW LOCATION </div>
            <IoMdClose
              color="white"
              size={26}
              className="mr-6 cursor-pointer"
              onClick={cancelBtn}
            />
          </div>
        </div>
        <div className="px-6 py-6 pt-4 pd-4">
          <div className="flex items-center w-full mb-8">
            <select
              name=""
              id=""
              disabled={update}
              value={selectedOrganization}
              onChange={(e) => handleCompanySelection(e)}
              className="px-4 outline-none w-full border-2 border-gray-400 rounded-md bg-white flex justify-between items-center h-12"
            >
              <option value="">Choose</option>
              {allCompanyList.length != 0 &&
                allCompanyList.map((item, index) => {
                  return (
                      <option value={item.name} key={index}> {item.name}</option>
                  );
                })}
            </select>
          </div>
          <div className="mb-8 flex-1">
            <input
              type="text"
              id="first_name"
              className="h-12 border-2 rounded font-roboto w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
              placeholder="Enter Project Name"
              required
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="mb-2">
              <input
                type="number"
                id="first_name"
                className="h-12 border-2 rounded font-roboto w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                placeholder="Lattitude"
                required
                value={lattitude}
                onChange={(e) => setLattitude(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <input
                type="number"
                id="first_name"
                className="h-12 border-2 rounded font-roboto w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                placeholder="Longitude"
                required
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                id="first_name"
                className="h-12 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                placeholder="Installation Date"
                required
                value={installationDate}
                onChange={(e) => setInstallationDate(e.target.value)}
              />
            </div>
          </div>
          <div className="px-6 py-6 pt-4 pd-4 flex justify-center gap-20 mt-8">
            <button
              onClick={cancelBtn}
              className="h-12 border-2 w-48 rounded font-roboto  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
            >
              Cancel
            </button>
            <Button title={update ? "Update" : "Save"} loading={loading} onClick={update ? updateProject : submit}/>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddLocation;
