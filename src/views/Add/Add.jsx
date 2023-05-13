import AddCompany from "components/Model/AddCompany/AddCompany";
import AddLocation from "components/Model/AddLocation/AddLocation";
import AddSubLocation from "components/Model/AddSubLocation/AddSubLocation";
import FormHeader from "components/FormHeader/FormHeader";
import React, { useState } from "react";

const organization = require("../../assets/img/company.png");
const location = require("../../assets/img/location.png");

const Add = () => {
  const [view, setView] = useState("company");

  return (
    <div>
      <FormHeader setView={setView}/>
      <div className="my-3 mx-3">
        {view === "company" && <AddCompany setView={setView}/>}
        {view === "location" && <AddLocation setView={setView}/>}
        {view === "subLocation" && <AddSubLocation setView={setView}/>}
      </div>
    </div>
  );
};

export default Add;
