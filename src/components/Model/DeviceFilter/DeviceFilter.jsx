import React, { useState } from "react";
import Modal from "react-modal";
import "../../../styles/modal.css";
import {IoMdClose} from "react-icons/io"

const DeviceFilter = (props) => {

 
  const [location , setLocation] = useState("")
  const [subLocation , setSubLocation]  = useState("")
  const [assets , setAssets] = useState("")
  const [status , setStatus] = useState("")
  const {showFilter , setShowFilter} = props;
  

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius : "8px",
      padding : "0px",
      minWidth : "700px"
    },
  };


  return (
    <Modal isOpen={showFilter} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
      <div className="flex justify-between w-full bg-primaryColor items-center">
        <h1 className=" text-white font-roboto font-bold text-2xl p-4 ml-4">Filter</h1>
        <IoMdClose color="white" size={26} className="mr-6 cursor-pointer" onClick={() => setShowFilter(false)}/>
      </div>
      <div className="px-8 py-3 w-full">
        <div className="flex justify-between items-center my-4">
          <input type="text" placeholder="Search Location .." className="filterInput font-roboto"/>
          <input type="text" placeholder="Search SubLocation .." className="filterInput font-roboto"/>
        </div>
        <div className="flex justify-between items-center my-8">
          <input type="text" placeholder="Search Assets .." className="filterInput font-roboto"/>
          <input type="text" placeholder="Search Status .." className="filterInput font-roboto"/>
        </div>
        <div className="flex justify-between items-center my-8 font-roboto">
          <select name="" id="" className="filterSelect">
            <option value="">Asset Type</option>
            <option value="">Asset Type</option>
            <option value="">Asset Type</option>
            <option value="">Asset Type</option>
          </select>
        </div>
        <div className="flex justify-around items-center my-14 font-roboto">
            <button className="filterBtn bg-white text-gray-600 font-roboto" onClick={() => setShowFilter(false)}>Cancel</button>
            <button className="filterBtn bg-primaryColor text-white font-roboto">Filter</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeviceFilter;
