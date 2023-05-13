import React from "react";

interface IProps {
  color?: "red" | "green";
  name: string;
  unit?: string;
  value: any;
}
function LiveUpdateCard(props: IProps) {
  const { color, name, value, unit } = props;

  const getColorValue = (color: string) => {
    let colorValue = "";
    switch (color) {
      case "red":
        colorValue = "#ca2d2c";
        break;
      case "green":
        colorValue = "#8ed5ab";
        break;
      default:
        colorValue = "#ca2d2c";
        break;
    }
    return colorValue;
  };

  let colorValue = getColorValue(color ?? "");
  return (
    <div className="w-full bg-primaryWhite rounded-lg flex flex-col p-2">
      <div
        className="text-base font-bold border-t-4 rounded-md w-full text-center"
        style={{ borderColor: `${colorValue}` }}
      >
        {name}
      </div>
      <div className="flex flex-row text-base justify-around px-4 ">
        {/* <div>
          <i className="pi pi-table mr-2" />
        </div> */}
        <div className="text-green-500 font-semibold">
          {value} <sub>{unit ?? ""}</sub>
        </div>
      </div>
    </div>
  );
}

export default LiveUpdateCard;
