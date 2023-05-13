import React from "react";
import LiveUpdateCard from "components/LiveUpdateCard/LiveUpdateCard";
import { BsPieChart } from "react-icons/bs";
import GuageChart from "components/GuageChart/GuageChart";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const OnOff = (props) => {
  const { addOnText, value } = props;
  return (
    <div className="w-full h-full py-4 bg-light rounded-lg  w-full h-full bg-light rounded-lg  px-6 font-roboto">
      <div className="text-cardHeading font-medium text-center -mt-2 font-roboto">{addOnText}</div>
      {value == 0 &&
      <div className="font-roboto text-gray-600 flex justify-center items-center h-24 w-24 rounded-full mt-4 border-primaryColor text-xl border-4 m-auto font-roboto">OFF</div>}
      {value == 1 && <div className="font-roboto  flex justify-center items-center h-24 w-24 rounded-full mt-4 border-primaryColor bg-primaryColor text-xl border-4 m-auto font-roboto text-white">HIGH</div>}
      {value == 2 && <div className="font-roboto  flex justify-center items-center h-24 w-24 rounded-full mt-4 border-red-600 bg-red-600 text-xl border-4 m-auto font-roboto text-white">HIGH</div>}
      {value == 3 && <div className="font-roboto  flex justify-center items-center h-24 w-24 rounded-full mt-4 border-blue-600 bg-blue-600 text-xl border-4 m-auto font-roboto text-white">HIGH</div>}
      {value == 4 && <div className="font-roboto  flex justify-center items-center h-24 w-24 rounded-full mt-4 border-yellow-500 bg-yellow-500 text-xl border-4 m-auto font-roboto text-white">HIGH</div>}
      {value == 5 && <div className="font-roboto  flex justify-center items-center h-24 w-24 rounded-full mt-4 border-green-600 bg-green-600 text-xl border-4 m-auto font-roboto text-white">LOW</div>}
      {value == 6 && <div className="font-roboto  flex justify-center items-center h-24 w-24 rounded-full mt-4 border-red-600 bg-red-600 text-xl border-4 m-auto font-roboto text-white">LOW</div>}
      {value == 7 && <div className="font-roboto  flex justify-center items-center h-24 w-24 rounded-full mt-4 border-blue-600 bg-blue-600 text-xl border-4 m-auto font-roboto text-white">LOW</div>}
      {value == 8 && <div className="font-roboto  flex justify-center items-center h-24 w-24 rounded-full mt-4 border-yellow-500 bg-yellow-500 text-xl border-4 m-auto font-roboto text-white">LOW</div>}
    </div>
  );
};

const NormalText = (props) => {
  const { addOnText, value } = props;
  return (
    <div className="w-full h-full py-4 bg-light rounded-lg  w-full h-full bg-light rounded-lg  px-6 font-roboto">
      <div className="text-cardHeading font-medium text-center -mt-2 font-roboto">{addOnText}</div>
      <div className="font-roboto text-gray-600 flex justify-center items-center h-1/2 mt-2 text-2xl	">
        {value}
      </div>
    </div>
  );
};

const LiveUpdates = (props) => {
  const { deviceId, deviceName } = props;
  const allDevices = useSelector((state) => state.DeviceReducer.allDevice);

  var selectedDevice = allDevices.find((itm, index) => {
    return itm?._id === deviceId;
  });

  var parameters = selectedDevice?.parameters;
  parameters = Object.values(parameters);
  parameters.sort((a, b) => a.key.localeCompare(b.key));


  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-5 gap-4">
          {parameters?.length != 0 &&
            parameters?.map((item, index) => {

              var activeColor = "#32aa57";
              if(item?.isAlert === true){
                activeColor = "#dc2626"
              }else if(item?.isWarning === true){
                activeColor = "#ffbf00"
              }
              return (
                <div className="p-3" key={index}>
                  <div className="h-2 bg-primaryColor rounded-tl-lg rounded-tr-lg w-full" style={{backgroundColor : activeColor}}/>
                  <div
                    className="w-full text-base  font-bold  rounded-md text-center h-52"
                    style={{ backgroundColor: "white" }}
                  >
                    <p className="pt-4 capitalize font-roboto">{item?.name}</p>
                    {item?.type === "text" && (
                      <NormalText addOnText={item?.unit } value={item?.value ? item.value : item.default} />
                    )}
                    {(item?.type === "Guage" || item?.type === "guage") && (
                      <GuageChart addOnText={item?.unit } value={item?.value ? item.value : item.default} activeColors={activeColor}/>
                    )}
                    {(item?.type === "ON-OFF"  || item?.type === "on-off")&& (
                      <OnOff addOnText={item?.unit } value={item?.value ? item.value : item.default} />
                    )}

                   
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default LiveUpdates;

