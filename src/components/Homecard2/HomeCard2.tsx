import React from "react";


interface IProps {
  title?: string;
  value?: any;
  subtext?: string;

 
}

const HomeCard2 = (props: IProps) => {
  const { title, value, subtext, } = props;

  return (
    // <div className="grid grid-rows-1 grid-flow-col  ">
    <div className="bg-white m-2 rounded-md h-28">
      <div className=" items-center text-center ">
    
        <h4 className="ml-3 text-3xl font-bold mt-4 mb-2">{title}</h4>
      </div>

    
      <div className="grid grid-rows-1 grid-flow-col">
        <p className="text-center">{subtext}</p>
        {/* <h3 className="mt-6 text-3xl font-bold ml-24">{value}</h3> */}
      </div>
    </div>
    //  </div>
  );
};

export default HomeCard2;
