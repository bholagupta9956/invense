import React from "react";
import Chart from "react-apexcharts";
function LineChart(props: any) {
  const { heading, name, xvalues, yvalues } = props;

  const options = {
    xaxis: {
      categories: xvalues || [
        "25Apr2022:5:30:00Z",
        "25Apr2022:5:30:00Z",
        "25Apr2022:5:30:00Z",
        "25Apr2022:5:30:00Z",
        "25Apr2022:5:30:00Z",
        "25Apr2022:5:30:00Z",
        "25Apr2022:5:30:00Z",
        "25Apr2022:5:30:00Z",
        "25Apr2022:5:30:00Z",
        "25Apr2022:5:30:00Z",
      ],
    },
  };
  const series = [
    {
      name: name || "series-1",
      data: yvalues || [30, 40, 45, 50, 49, 60, 70, 91],
    color: '#27A74E',

    },
   
   
  ];
  const series1 = [
    {
      name: name || "series-1",
      data: yvalues || [30, 40, 45, 50, 49, 60, 70, 91],
      
    },
   
  ];
  return (
    <div className="p-4 rounded-lg flex flex-col bg-primaryWhite shadow-sm">
      <h3 className="font-bold">{heading}</h3>
      <Chart options={options} series={series} series1={series1} ype="line" width="550"  />
    </div>
  );
}

export default LineChart;
