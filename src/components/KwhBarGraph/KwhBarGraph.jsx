import React, { useState } from "react";
import Chart from "react-apexcharts";
import "../../styles/KwhBarGraph.css";

function BarChart(props) {
  const { heading, name, xvalues, yvalues, fill } = props;
  const [activeBtn, setActiveBtn] = useState("hourly");

  const options = {
    toolbar: {
      show: false,
      tools: {
        download: false
      }
    },
    xaxis: {
      categories: [
        "25/03/2022",
        "26/03/2022",
        "27/03/2022",
        "28/03/2022",
        "29/03/2022",
        "30/03/2022",
        "01/04/2022",
        "12/04/2022",
      ],
    },
    colors: ["#32AA57"],
    width: ["30"],
  };

  const series = [
    {
      name: name || "series-1",
      data:  [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  const activeStyle = "text-primaryColor border-primaryColor border-2 py-1 text-sm w-20 font-sans w-fit  font-roboto rounded-sm";
  const inActiveStyle = "text-slate border-slate border-2 py-1 text-sm w-20 font-sans w-fit  font-roboto rounded-sm";

  return (
    <div className="px-3 py-2 rounded-lg flex flex-col bg-primaryWhite shadow-sm w-fit ">
      <div className=" p-2 flex  justify-between rounded-lg  grid-cols-12 bg-white shadow-sm w-fit">
        <div className="grid grid-col-3 text-sm text-gray-400 font-roboto">From</div>
        <div className="grid grid-col-3 pr-20  text-sm text-gray-400 font-roboto">To</div>
        <div className="grid grid-col-6 pl-40 text-grey-400 text-sm font-roboto">Daily kwh</div>
      </div>

      <div className="flex justify-between">
        <input type="date" placeholder="01/11/2022" className="dateInput text-gray-300" />
        <input type="date" placeholder="01/11/2022" className="dateInput text-gray-300" />

        <button className={activeBtn == "hourly" ? activeStyle : inActiveStyle} onClick={() => setActiveBtn("hourly")}>Hourly</button>
        <button className={activeBtn == "4hours" ? activeStyle : inActiveStyle} onClick={() => setActiveBtn("4hours")}>4 Hours</button>
        <button className={activeBtn == "daily" ? activeStyle : inActiveStyle} onClick={() => setActiveBtn("daily")}>Daily</button>
      </div>
      <h3 className="font-bold ml-2 mt-2">{heading}</h3>
      <div className="w-full border-2 border-slate">
      <Chart options={options} series={series} fill={fill} type="bar" width="570" height="240" style={{width : "100%"}}/>
      </div>
    </div>
  );
}

export default BarChart;
