import React, { useEffect, useState } from "react";
import LiveUpdateCard from "components/LiveUpdateCard/LiveUpdateCard";
import Card from "components/Card/Card";
import InputBox from "../InputBox/InputBox";
import { Button } from "primereact/button";
import LineChart from "components/LineChart/LineChart";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { endpoints } from "services/endpoints";


const EventHistory = (props) => {

  const {deviceId} = props;
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [allEvents, setAllEvents] = useState([]);


  function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    var date = previous.getDate() < 10 ? `0${previous.getDate()}` : previous.getDate();
    var month =
      previous.getMonth() + 1 < 10 ? `0${previous.getMonth() + 1}` : previous.getMonth() + 1;
    var year = previous.getFullYear();
    var day = year + "-" + month + "-" + date;
    return day;
  }

  const getAllEvents = async (startTime , endTime) => {

    const url = `${endpoints.events.getEvents}start_time=${startTime}&end_time=${endTime}&device_id=${deviceId}` ;

    // const url = "https://api-staging.invense.in/v1/event?start_time=2023-04-17T00:00:00Z&end_time=2023-04-24T23:59:00Z&device_id=642d53ee554cd621cf19eab7";

    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          const val = res.data.items;
          const key = val.map((item, index) => {
            return item?.key;
          });
          let uniqueArr = [...new Set(key)];
          uniqueArr.sort();

          const dta = uniqueArr.map((ky, index) => {
            const filteredDta = val.filter((item, index) => {
              return item.key === ky;
            });
            const vals = {
              [ky]: filteredDta,
            };
            return vals;
          });
          setAllEvents(dta);
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
    var presentTime =  `${today}T${presentHour}:${presentMinutes}:00Z`
    // var previousDay =  getPreviousDay();

    var backTime =  day.setHours(day.getHours() - 1);
    backTime = new Date(backTime)
    var pastHour = backTime.getHours() < 10 ? `0${backTime.getHours()}` : backTime.getHours();
    var pastMinute = backTime.getMinutes() < 10 ? `0${backTime.getMinutes()}` : backTime.getMinutes();
    var pastTime = `${today}T${pastHour}:${pastMinute}:00Z`

    // var startTime = `${today}T21:30:00Z`;
    // var endTime = `${today}T21:30:00Z`;
    setStartTime(`${today}T${pastHour}:${pastMinute}`)
    setEndTime(`${today}T${presentHour}:${presentMinutes}`)
    getAllEvents(pastTime , presentTime);

  }, []);

  const submitButton = () => {
    console.log("start")
    if (startTime == "") {
      
      toast("Please Enter Start Time", { type: "warning" });
    } else if (endTime == "") {
      setStartTime("");
      toast("Please Enter End Time", { type: "warning" });
    }else {
      var strtTime = `${startTime}:00Z`;
      var endTme = `${endTime}:00Z`
      getAllEvents(strtTime , endTme);
    }

  };


  return (
    <>
      <div className="my-4 rounded-md">
        <Card>
          <div className="grid gap-4 grid-cols-1 rounded-md md:grid-cols-3 ml-3 flex items-center py-2">
            <div className="w-70 ">
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
            <div className="w-70 ">
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
            <div className="  bg-primaryLogin w-11/12 h-11 shadow-md ml-4 rounded-sm text-center font-roboto"  onClick={submitButton}>
              <button className=" text-white text-center pt-3 ">
                {" "}
                Submit{" "}
              </button>
            </div>
          </div>
        </Card>

        {/*
         <div className=" grid grid-cols-2   mt-4 gap-5">
          <div className=" w-6/6 bg-white h-24  rounded-md">
            <h4 className="  p-4 pl-8"> Feeder</h4>
            <p className=" text-md pl-8">IB-3OO6 </p>
          </div>
        </div> 
        */}

        <div className=" grid grid-cols-2   mt-4 gap-5">
          {allEvents.map((events, index) => {
            var event = Object.values(events);
            event = event[0];

            const yvalues = event.map((item) => {
              return item.value;
            });
            const xvalues = event.map((item) => {
              return item.timestamp;
            });

            return (
              <div className=" w-6/6 bg-white  rounded-md" key={index}>
                <LineChart xvalues={xvalues} yvalues={yvalues} />
              </div>
            );
          })}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default EventHistory;
