import React from "react";
const download = require("../../assets1/InvenseDashboardassets/pngicons/download.png");

function Reports(props) {
  return (
    <>
      {/* <div className="bg-gray-300 h-full w-auto">
        <div className="flex mt-6 border-solid border-2 border-grey-100 h-24 ml-12 bg-white w-72 flex-start items-center  ">
          <div className="text-center  mt-4 font-bold mx-5 my-5">Download Daily Energy Reports</div>
          <div className="border-l-2 ml-0  h-12 border-indigo-500">
            <span>
              <img src={download} className="   w-10 b-2 " />
            </span>
          </div>
        </div>

        <div className="flex"> */}
      {/* <div className="bg-white w-80 rounded-lg ml-6 border-solid border-2 border-grey-200 h-28 ">
            <div className="mt-4 pr-28 text-center  bg-white font-bold ">
              Dowload Daily <div className="break-all">Energy Report </div>
            </div>
            <div className=" ml-56  pb-16  h-12   border-indigo-500">
              {" "}
              <div className="mb-16 "> 
          
                <img src={download} className="  ml-2 w-12 bottom-3.5 " />
             
              </div>
            </div>
          </div> */}

      {/* 
        </div> */}

      {/* <div className="flex">
          <div className="px-5 py-5 text-center bg-white w-48 font-bold mx-5 my-5">
            Download Daily Energy Reports
          </div>
        </div>
        <div className="flex">
          <div className="px-5 py-5 text-center bg-white w-48 font-bold mx-5 my-5">
            Download Daily Energy Reports
          </div>
          <div className="px-5 py-5 text-center bg-white w-48 font-bold mx-5 my-5">
            Download Daily Energy Reports
          </div>
          <div className="px-5 py-5 text-center bg-white w-48 font-bold mx-5 my-5">
            Download Daily Energy Reports
          </div>
        </div>
      </div>
    </> */}
      <div className="w-full mt-4"> 
        <div className="flex gap-14 ml-2 flex-wrap">
          <div className="border-solid border-1 bg-white rounded-md shadow-xl w-80 p-8 border-2 border-grey-900">
            <div className="flex justify-between">
              <div class="grid grid-row-3 ">
                <h1 className="text-xl font-bold font-roboto">Download Daily</h1>
                <p className="text-md font-roboto">Energy Report</p>
              </div>
              <div class="grid grid-row-3 border-solid border-l-2 border-grey-300 p-3">
                <img src={download} className="  ml-2 w-12 bottom-3.5 " />
              </div>
            </div>
          </div>

          <div className="border-solid border-1 bg-white border-2 border-grey-900 rounded-md shadow-xl w-80 p-8 ">
            <div className="flex justify-between">
              <div class="grid grid-row-3 ">
                <h1 className="text-xl font-bold font-roboto ">Download Weekly</h1>
                <p className="text-md font-roboto">Energy Report</p>
              </div>
              <div class="grid grid-row-3 border-solid border-l-2 border-grey-300 p-3">
                <img src={download} className="  w-12 " />
              </div>
            </div>
          </div>

          <div className="bg-white border-solid border-1 rounded-md shadow-xl w-80 border-2 border-grey-900 p-8 ">
            <div className="flex justify-between  grid-flow-row-6">
              <div className=" grid grid-row-3">
                <h1 className="text-xl font-bold font-roboto">Download Monthly</h1>
                <p className="text-md font-roboto"> Enegy Reports </p>
              </div>
              <div className="  grid grid-row-3  border-solid border-l-2 border-grey-300 p-3">
                <img src={download} className="w-12" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-14 ml-3 mt-10 flex-wrap">
          <div className="bg-white border-solid border-1 rounded-md shadow-xl w-80 p-8 border-2 border-grey-9--">
            <div className="flex justify-between  grid-flow-row-6">
              <div className=" grid grid-row-3">
                <h1 className="text-xl font-bold font-roboto">Download </h1>
                <p className="text-md font-roboto"> Maintenance Reports </p>
              </div>
              <div className="  grid grid-row-3  border-solid border-l-2 border-grey-300 p-3">
                <img src={download} className="w-12" />
              </div>
            </div>
          </div>

          <div className="bg-white w-80 p-8 shadow-xl rounded-md border-solid border-2 border-grey-900">
            <div className="flex justify-between grid-flow-row-6 ">
              <div className=" grid grid-row-3">
                <h1 className="text-xl font-bold font-roboto ">Download</h1>
                <p className="text-md mt-1 font-roboto">Water consumption </p>
                <p className=" text-md mt-1 font-roboto"> Report</p>
              </div>

              <div className="grid grid-row-3 border-solid border-l-2 border-grey-300 p-3">
                <img src={download} className="w-12" />
              </div>
            </div>
          </div>

          <div className="bg-white w-80 shadow-xl rounded-md p-8 border-solid border-2 border-grey-900 ">
            <div className="flex grid-flow-row-6 justify-between">
              <div className="grid grid-row-3">
                <h1 className="text-xl font-bold font-roboto">Daily Reports</h1>
                <p className="text-md mt-1 font-roboto">Water consumption</p>
                <p className="text-md mt-1 font-roboto">report </p>
              </div>
              <div className="grid grid-row-3 p-3 border-solid  border-grey-300 border-l-2">
                <img src={download} className="w-12" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-14 ml-3 mt-10 flex-wrap">
          <div className="bg-white w-80 rounded-md shadow-xl border-solid p-8 border-2 border-grey-900">
            <div className="flex grid-flow-row-6 justify-between">
              <div className="grid grid-row-3 justify-center">
                <h1 className="text-xl font-bold font-roboto ">Daily Reports</h1>
                <p className="text-md mt-1 font-roboto">Water Consumption</p>
                <p className="text-md mt-1 font-roboto">Reports</p>
              </div>
              <div className="grid grid-row-3 p-3 border-solid border-grey-300 border-l-2">
                <img src={download} className="w-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;
