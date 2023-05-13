// here we are creating a  custom which will be used everywhere ;

import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import ClipLoader from "react-spinners/ClipLoader";

const Button = (props) => {

  const { title, onClick, loading } = props;

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };
  
  return (
    <>
      {loading === true && 
        <button className="h-12 border-2 w-48 rounded font-roboto  bg-primaryColor py-2 bg- px-3 text-white leading-tight focus:outline-none focus:shadow-outline border-primaryColor border-opacity-40">
          <ClipLoader
            color="white"
            loading={true}
            cssOverride={override}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </button>}
        {loading === false &&
        <button
          className="h-12 border-2 w-48 rounded font-roboto  bg-primaryColor py-2 bg- px-3 text-white leading-tight focus:outline-none focus:shadow-outline border-primaryColor border-opacity-40"
          onClick={onClick}
        >
          {title}
        </button>
}
      
    </>
  );
};

export default Button;
