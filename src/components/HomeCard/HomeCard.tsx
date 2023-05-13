import React from "react";

const warning = require("../../assets1/InvenseDashboardassets/pngicons/w.png");

interface IProps {
  title?: string;
  value?: any;
  subtext?: string;
  image: string;
  className?: string;
  imageStyle? : object;
}

const HomeCard = (props: IProps) => {
  const { title, value, subtext, image , imageStyle } = props;

  return (
    // <div className="grid grid-rows-1 grid-flow-col  ">
    <div className="bg-white m-2 rounded-md h-32">
      <div className="flex flex-start items-center  ">
        <span>
          <img src={image} className=" ml-2 w-6 b-2 " style={{...imageStyle}}/>
        </span>
        <h4 className="ml-3 text-base font-bold mt-4 mb-2 font-roboto text-lightBlack">{title}</h4>
      </div>

      <hr />
      <div className="grid grid-rows-1 grid-flow-col">
        <h1 className="mt-6 ml-3 font-roboto text-lightBlack text-base font-bold">{subtext}</h1>
        <h3 className="mt-6 text-3xl font-bold ml-24 text-fullBlack font-roboto">{value}</h3>
      </div>
    </div>
    //  </div>
  );
};

export default HomeCard;
