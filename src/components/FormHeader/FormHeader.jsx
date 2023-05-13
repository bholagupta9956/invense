import React from "react";

const organization = require("../../assets/img/company.png");
const location = require("../../assets/img/location.png");
const Arrow = require("../../assets/img/arrow.png");

const FormHeader = (props) => {

    const {setView} = props;

  return (
    <ol className="flex items-center w-full justify-center pl-4 my-6">
      <li className="flex w-full items-center  text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <div className="rounded-full border-2 p-4 w-20 bg-white	" onClick={() => setView("company")}>
          <img src={organization} alt="" />
        </div>
        <div className="flex-1 w-9/10 h-2 bg-gray-300 "/>
      </li>
      <li className="flex w-full items-center  after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
        <div className="rounded-full border-2 p-4 w-20 bg-white	" onClick={() => setView("location")}>
          <img src={location} alt="" />
        </div>
        <div className="flex-1 w-9/10 h-2 bg-gray-300 "/>
      </li>
      <li className="flex items-center w-full ">
        <div className="rounded-full border-2 p-4 w-20 bg-white	" onClick={() => setView("subLocation")}>
          <img src={Arrow} alt="" />
        </div>
        
      </li>
    </ol>
  );
};

export default FormHeader;
