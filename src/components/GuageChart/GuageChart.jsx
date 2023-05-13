import React from "react";
import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";
import "chart.js/auto";

const colorMap = {
  warning: "rgba(246, 162, 30, 1)",
  danger: "rgba(231, 17, 17, 1)",
  regular: "rgba(38,166,78, 1)",
};

const GuageChart = (props) => {
  const { addOnText, value, unit, name, isDanger, isWarning, maxValue, minValue , activeColors  } =
    props;

  const valueCoefficient = (maxValue - minValue) / maxValue;
  const correctedValue = valueCoefficient * value;

  const emptyValue = maxValue - correctedValue;

  const activeColor = isDanger
    ? colorMap["danger"]
    : isWarning
    ? colorMap["warning"]
    : colorMap["regular"];

  const backgroundColor = "rgba(244, 245, 247, 1)";

  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        borderWidth: 0,
        backgroundColor: [activeColors, backgroundColor],
        hoverBackgroundColor: [activeColor, backgroundColor],
      },
    ],
  };


  return (
    <div className="w-full h-full py-4 bg-light rounded-lg  w-full h-full bg-light rounded-lg  px-6 font-roboto">
      <div className="text-cardHeading font-medium text-center -mt-2 font-roboto">{addOnText}</div>
      <div style={{ marginTop: "-30px" }}>
        <Doughnut
          data={data}
          options={{
            rotation: -90,
            circumference: 180,
            cutout: "60%",
            maintainAspectRatio: true,
            responsive: true,
          }}
          style={{ height: 200, width: "100%" }}
          className="h-full pt-0 mt-0"
        />
      </div>
      <div className="text-center  text-heading text-dark font-bold -mt-16 font-roboto font-md text-lg">
        {value}
      </div>
      {unit && <div className="text-center font-bold text-dark">{unit}</div>}
    </div>
  );
};

export default GuageChart;
