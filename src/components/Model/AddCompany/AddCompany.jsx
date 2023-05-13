import React, { useState , useEffect , useRef } from "react";
import Modal from "react-modal";
import "../../../styles/modal.css";
import { IoMdClose } from "react-icons/io";
import { endpoints } from "services/endpoints";
import axios from "axios";
import Button from "components/Button/Button";
import {toast  , ToastContainer} from "react-toastify";


const AddCompany = (props) => {

  const { handleCancelBtn , selectedCompany  , update , setUpdate , getAllCompany , showAddCompany} = props;
  const [loading , setLoading] = useState(false);

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
      minWidth: "600px",
      width : '1100px'
    },
  };

  const [name , setName ] = useState("");
  const [address , setAddress] = useState("");
  const [postCode , setPostCode] = useState("");
  const [telephone ,setTelephone] = useState("")
  const [website , setWebsite] = useState("")
  const [email , setEmail] = useState("");
  const [notes , setNotes] = useState("")
  const [errors , setErrors] = useState({});


  const headers = {
    "Content-Type" : "application/json"
  }

  const clearField = () =>{
    setName("")
    setAddress("")
    setEmail("")
    setPostCode("")
    setWebsite("")
    setNotes("")
  }


  const submit = () =>{
    if(!name){
      setErrors({name : "Please enter company name"})
    }
    else {
      setErrors({})
      setLoading(true)
      const url = endpoints.company.createCompany;
      const data = {
        name : name
      }
      axios.post(url , data , {headers : headers} )
      .then((res) =>{
        setLoading(false)
        if(res.status == 201){
          toast("Company added successfully" , {type : "success"})
          clearField();
          handleCancelBtn();
          getAllCompany()
        }
      })
      .catch((err) =>{
        setLoading(false)
        console.log(err ,"this is the error");
      })
    }
  }

  const updateCompany = () =>{

    if(!name){
      setErrors({name : "Please enter company name"})
    }
    else {
      setUpdate({})
    const organizationId = selectedCompany?._id;
    const url = endpoints.company.updateCompany + organizationId;
    const data = {
      name : name
    }
    setLoading(true)
    axios.patch(url , data)
    .then((res) =>{
      if(res.status == 200){
        toast("Organization updated successfully" , {type : "success"});
        handleCancelBtn();
        getAllCompany();
        setLoading(false)
      }
    })
    .catch((err) =>{
      console.log(err , "this is the error")
      setLoading(false)
    })
  }
  }

  useEffect(() =>{
    if(selectedCompany){
      setName(selectedCompany.name);
    }else {
      clearField();
    }
  },[showAddCompany])

  return (

    <Modal
      isOpen={true}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName="Overlay"
    >
      <div className="rounded-lg overflow-hidden shadow-lg bg-white ">
        <div className="px-0">
          <div className="font-bold text-xl mb-2 bg-primaryColor text-white px-6 py-4 font-roboto flex justify-between">
            <div> ADD NEW COMPANY </div>
            <IoMdClose
              color="white"
              size={26}
              className="mr-6 cursor-pointer"
              onClick={handleCancelBtn}
            />
          </div>
        </div>
        <div className="px-6 py-6 pt-4 pd-4">
          <div className="grid grid-cols-3 gap-y-3 gap-x-6">
            <div className="mb-1">
              <input
                type="text"
                id="first_name"
                className="h-12 border-2 rounded w-full font-roboto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                placeholder="Company Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span className="text-red-600	font-roboto text-sm h-12">{errors?.name}</span>
            </div>
            <div className="mb-2">
              <input
                type="text"
                id="first_name"
                className="h-12 border-2 rounded w-full font-roboto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <span className="text-red-600	font-roboto text-sm h-12">{errors?.address}</span>
            </div>
            <div className="mb-2">
              <input
                type="number"
                id="first_name"
                className="h-12 border-2 rounded w-full font-roboto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                placeholder="Post code"
                value={postCode}
                onChange={(e) => setPostCode(e.target.value)}
                required
              />
              <span className="text-red-600	font-roboto text-sm h-12">{errors?.postCode}</span>
            </div>
            <div className="mb-2">
              <input
                type="number"
                id="first_name"
                className="h-12 border-2 rounded w-full font-roboto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                placeholder="Telephone "
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                required
              />
              <span className="text-red-600	font-roboto text-sm h-12">{errors?.phoneNo}</span>
            </div>
            <div className="mb-2">
              <input
                type="text"
                id="first_name"
                className="h-12 border-2 rounded w-full font-roboto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                placeholder="Website "
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
              />
              <span className="text-red-600	font-roboto text-sm h-12">{errors?.website}</span>
            </div>
            <div className="mb-2">
              <input
                type="text"
                id="first_name"
                className="h-12 border-2 rounded w-full font-roboto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                placeholder="Email "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="text-red-600	font-roboto text-sm h-12">{errors?.email}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="mb-2">
              <textarea
                id="message"
                rows={6}
                className="h-25 border-2 rounded w-full font-roboto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                placeholder="Notes"
                defaultValue={""}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              
            </div>
            <div className="">
              <div className="flex items-center d-flex justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-25 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold font-roboto">Click to upload</span> or drag and
                      drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="">
              <div className="px-6 py-6 pt-4 pd-4 flex justify-center gap-4 mt-8">
                <button
                  onClick={handleCancelBtn}
                  className="h-12 border-2 w-48 rounded font-roboto  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-black border-opacity-40"
                >
                  Cancel
                </button>
               <Button title={update ? "Update" : "Save"} loading={loading} onClick={update ? updateCompany : submit}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddCompany;
