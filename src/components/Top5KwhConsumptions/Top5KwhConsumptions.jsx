import React, { useState , useEffect} from "react";
import "../../styles/Top5KwhConsumptions.css";
import axios from "axios";


const Top5KwhConsumptions =  () => {

  const [activeBtn, setActiveBtn] = useState("daily");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    var date = previous.getDate() < 10 ? `0${previous.getDate()}` : previous.getDate();
    var month =  previous.getMonth() + 1 < 10 ? `0${previous.getMonth() + 1}` : previous.getMonth() + 1;
    var year = previous.getFullYear();
    var day = year + "-" + month + "-" + date;
    return day;
  }

  const activeStyle =
    "text-primaryColor border-primaryColor border-2 py-1 text-sm w-24 font-sans w-fit  font-roboto rounded-2xl ml-6";
  const inActiveStyle =
    "text-slate border-slate border-2 py-1 text-sm w-24 font-sans w-fit  font-roboto rounded-2xl ml-6";

    const getAllDevicesData = (starttime , endtime) =>{
      const url = "https://api-staging.invense.in/v1/snapshot?start_time=2023-05-09T23:59:00Z&end_time=2023-05-11T00:00:00Z&project_id=64461dd06e524d4d86adce0b&snapshotType=panelSnapshot"
      // const url = `https://api-staging.invense.in/v1/snapshot?start_time=${starttime}&end_time=${endtime}&project_id=64461dd06e524d4d86adce0b&snapshotType=deviceSnapshot`;

      axios.get(url)
      .then((res) =>{
        if(res.status === 200){
          const val = res.data?.items;

        }
      })
      .catch((err) =>{
        console.log(err , "this is the error")
      })
    }

    useEffect(() =>{
      getAllDevicesData();
    },[])

    useEffect(() =>{
      const day = new Date();
      var date = day.getDate() < 10 ? `0${day.getDate()}` : day.getDate();
      var month = day.getMonth() + 1 < 10 ? `0${day.getMonth() + 1}` : day.getMonth() + 1;
      var year = day.getFullYear();
      var today = year + "-" + month + "-" + date;
      const endTim = today + "T00:00:00Z";
      setEndTime(endTim)
      var previousDay =  getPreviousDay();
      const startTim = previousDay + "T23:59:00Z"
      setStartTime(startTim)
      getAllDevicesData(startTim , endTim)
    },[])

  return (
    <>
      <div className="grid grid-row-1 h-full bg-white mt-6 px-3 py-4 rounded-md shadow-sm">
        <div className="flex justify-between h-42 ">
          <h3 className="text-xl text-black font-roboto font-bold">Top 5 Kwh Consumptions</h3>
          <div>
            <button
              className={activeBtn == "daily" ? activeStyle : inActiveStyle}
              onClick={() => setActiveBtn("daily")}
            >
              Daily
            </button>
            <button
              className={activeBtn == "weekly" ? activeStyle : inActiveStyle}
              onClick={() => setActiveBtn("weekly")}
            >
              Weekly
            </button>
            <button
              className={activeBtn == "monthly" ? activeStyle : inActiveStyle}
              onClick={() => setActiveBtn("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* here we are designing the table here */}
        <table className="mt-6 mb-4 w-full top5KwhTable" border="1">
            <thead>
                <tr>
                    <td className="font-roboto px-6 py-2 font-bold text-white bg-primaryColor text-sm text-center">Sr No.</td>
                    <td className="font-roboto px-6 py-2 font-bold text-white bg-primaryColor text-sm text-center">Device</td>
                    <td className="font-roboto px-6 py-2 font-bold text-white bg-primaryColor text-sm text-center">Project</td>
                    <td className="font-roboto px-6 py-2 font-bold text-white bg-primaryColor text-sm text-center">Daily Kwh</td>
                </tr>
            </thead>
            <tbody> 
                <tr>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">1</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">To Servo Stablizer</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">PCC 2</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">651.43</td>
                </tr>
                <tr>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">2</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">300T Press</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">PCC 4</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">511.43</td>
                </tr>
                <tr>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">3</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">Office MBD</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">PCC 1</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">423.37</td>
                </tr>
                <tr>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">4</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">Big Air Ovn</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">PCC 2</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">43.37</td>
                </tr>
                <tr>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">5</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">Incomer</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">PCC 2</td>
                    <td className="font-roboot px-6 py-2 text-sm text-center border-1 text-gray-600 font-medium">23.37</td>
                </tr>
            </tbody>
        </table>
      </div>
    </>
  );
};

export default Top5KwhConsumptions;
