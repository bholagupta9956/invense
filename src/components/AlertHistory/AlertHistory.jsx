import React, { useState, useEffect } from "react";
import Card from "components/Card/Card";
import InputBox from "../InputBox/InputBox";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { endpoints } from "services/endpoints";

const AlertHistory = (props) => {
  const { deviceId } = props;

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [allAlerts, setAllAlerts] = useState([]);

  const getAllAlerts = async (startTime, endTime) => {
    const url = `${endpoints.alerts.getAlerts}start_time=${startTime}&end_time=${endTime}&device_id=${deviceId}`;
    setAllAlerts([])
    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          const val = res.data.items;
          setAllAlerts(val);
        }
      })
      .catch((err) => {
        console.log(err, "this is the error here");
      });
  };

  useEffect(() => {
    const day = new Date();
    var date = day.getDate() < 10 ? `0${day.getDate()}` : day.getDate();
    var month = day.getMonth() + 1 < 10 ? `0${day.getMonth() + 1}` : day.getMonth() + 1;
    var year = day.getFullYear();
    var today = year + "-" + month + "-" + date;
    var presentHour = day.getHours() < 10 ? `0${day.getHours()}` : day.getHours();
    var presentMinutes = day.getMinutes() < 10 ? `0${day.getMinutes()}` : day.getMinutes();
    var presentTime = `${today}T${presentHour}:${presentMinutes}:00Z`;
    // var previousDay =  getPreviousDay();

    var backTime = day.setHours(day.getHours() - 1);
    backTime = new Date(backTime);
    var pastHour = backTime.getHours() < 10 ? `0${backTime.getHours()}` : backTime.getHours();
    var pastMinute =
      backTime.getMinutes() < 10 ? `0${backTime.getMinutes()}` : backTime.getMinutes();
    var pastTime = `${today}T${pastHour}:${pastMinute}:00Z`;

    // var startTime = `${today}T21:30:00Z`;
    // var endTime = `${today}T21:30:00Z`;
    setStartTime(`${today}T${pastHour}:${pastMinute}`);
    setEndTime(`${today}T${presentHour}:${presentMinutes}`);
    getAllAlerts(pastTime, presentTime);
  }, []);

  const submit = () => {
    if (startTime == "") {
      toast("Please Enter Start Time", { type: "warning" });
    } else if (endTime == "") {
      setStartTime("");
      toast("Please Enter End Time", { type: "warning" });
    } else {
      var strtTime = `${startTime}:00Z`;
      var endTme = `${endTime}:00Z`;
      getAllAlerts(strtTime, endTme);
    }
  };


  return (
    <div>
      <Card>
        <div className="grid gap-2 grid-cols-1 rounded-md md:grid-cols-3 ml-3">
          <div className="w-70 mt-2 ">
            <InputBox
              type="datetime-local"
              label="Start Time"
              value={startTime}
              InputProps={{
                inputProps: {
                  dateFormat: "",
                },
              }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="w-70 mt-2">
            <InputBox
              type="datetime-local"
              label="End Time"
              value={endTime}
              InputProps={{
                inputProps: {
                  dateFormat: "",
                },
              }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
          <div
            className="  bg-primaryLogin w-4/5 h-11 shadow-md ml-4 mt-2 flex justify-center"
            onClick={submit}
          >
            <button className=" text-white  ">Submit</button>
          </div>
        </div>
      </Card>

      {allAlerts.length === 0 && 
      <div className="w-full bg-primaryLogin mt-4">
        <h3 className="text-white p-4">No Alerts Reported </h3>
      </div>}
      {allAlerts.length !== 0 &&
        allAlerts.map((alert, index) => {
          return (
            <>
              {alert?.isAlert === true && (
                <div className="w-full border-2 border-red-700 mt-4 px-2 py-2 rounded-sm flex items-center">
                  <div className="w-3/12">
                    <div className="font-roboto text-gray-800 text-sm">
                      TimeStamp : <span className="text-gray-500">{alert?.timestamp}</span>
                    </div>
                  </div>
                  <div className="flex-1 flex">
                    <div className="border-2 border-gray-400 font-roboto text-gray-800 text-sm px-2 py-2 mx-2">
                      Key : <span className="text-gray-500">{alert?.key}</span>
                    </div>
                    <div className="border-2 border-gray-400 font-roboto text-gray-800 text-sm px-2 py-2  mx-2">
                      Value : <span className="text-gray-500">{alert?.value}</span>
                    </div>
                    {/* <div className="border-2 border-gray-400 font-roboto text-gray-800 text-sm px-2 py-2  mx-2">
                      Min : <span className="text-gray-500">0</span>
                    </div>
                    <div className="border-2 border-gray-400 font-roboto text-gray-800 text-sm px-2 py-2  mx-2">
                      Max : <span className="text-gray-500">50</span>
                    </div> */}
                    <div className="border-2 border-gray-400 font-roboto text-gray-800 text-sm px-2 py-2  mx-2">
                      Alert : <span className="text-gray-500">true</span>
                    </div>
                  </div>
                </div>
              )}

              {alert?.isWarning === true && (
                <div className="w-full border-2 border-yellow-700 mt-4 px-2 py-2 rounded-sm flex items-center">
                  <div className="w-3/12">
                    <div className="font-roboto text-gray-800 text-sm">
                      TimeStamp : <span className="text-gray-500">{alert?.timestamp}</span>
                    </div>
                  </div>
                  <div className="flex-1 flex">
                    <div className="border-2 border-gray-400 font-roboto text-gray-800 text-sm px-2 py-2 mx-2">
                      Key : <span className="text-gray-500">{alert?.key}</span>
                    </div>
                    <div className="border-2 border-gray-400 font-roboto text-gray-800 text-sm px-2 py-2  mx-2">
                      Value : <span className="text-gray-500">{alert?.value}</span>
                    </div>
                    {/* <div className="border-2 border-gray-400 font-roboto text-gray-800 text-sm px-2 py-2  mx-2">
                      Min : <span className="text-gray-500">0</span>
                    </div>
                    <div className="border-2 border-gray-400 font-roboto text-gray-800 text-sm px-2 py-2  mx-2">
                      Max : <span className="text-gray-500">50</span>
                    </div> */}
                    <div className="border-2 border-gray-400 font-roboto text-gray-800 text-sm px-2 py-2  mx-2">
                      warning : <span className="text-gray-500">true</span>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}

      <ToastContainer />
    </div>
  );
};

export default AlertHistory;
