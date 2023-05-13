import React, { useState } from "react";
import Card from "components/Card/Card";

import { Button } from "primereact/button";
import InputBox from "../../components/InputBox/InputBox";

const Settings = () => {
  const [eName, setEName] = useState("");
  const [eModal, setEModal] = useState("");
  const [eNumber, setENumber] = useState("");
  const [eLetittude, setELatitude] = useState("");
  const [eLongitude, setELongitude] = useState("");
  const [eInstallitaion, setEInstallitaion] = useState("");
  const [eLast, setELast] = useState("");
  const [mName, setMName] = useState("");
  const [mValue, setMValue] = useState("");
  const [eNamee, setENamee] = useState("");
  const [eModall, setEModall] = useState("");
  const [eNumberr, setENumberr] = useState("");
  const [eLetitudee, setELetitudee] = useState("");
  const [eLongitudee, setELongitudee] = useState("");
  const [eInstallitaionn, seteInstallitaionn] = useState("");
  const [eLastt, setELastt] = useState("");
  const [mNamee, setMNamee] = useState("");
  const [mValuee, setMValuee] = useState("");
  const submit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="block p-6 shadow-lg bg-white m ">
        <form onSubmit={submit}>
          <div className="form-group mb-6">
            <h2 className="text-2xl font-semibold "> Add New Equipemnts </h2>
            <p className="text-md  text-inputTextColor mt-2"> Basic Deatils </p>
            <div className="col-span-2 mt-3">
              <h2 className="text-md  font-aris pb-2  font-semibold text-inputTextColor">
                {" "}
                Equipmemt Name
              </h2>
              <div className="mb-4">
                <input
                  className=" border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={eName}
                  onChange={(e) => setEName(e.target.value)}

                />
              </div>
            </div>
          </div>

          <div className="col-span-2 ">
            <h2 className="text-md  pb-2  font-semibold text-inputTextColor"> Equipments Model </h2>
            <div className="mb-4">
              <input
                className=" border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={eModal}
                onChange={(e) =>setEModal(e.target.value)}
              />
            </div>
          </div>

          <div className="col-span-2 mt-6">
            <h2 className="text-md  pb-2  font-semibold text-inputTextColor "> Equipment Type </h2>
            <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor text-white  outline-none">
              <option> ttt </option>
              <option> yy</option>

              <option> Software developer</option>
            </select>
          </div>

          <div className="col-span-2 mt-3">
            <h2 className="text-md  font-aris pb-2  font-semibold text-inputTextColor">
              {" "}
              Number of Modes
            </h2>
            <div className="mb-4">
              <input
                className=" border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={eNumber}
                onChange={(e) => setENumber(e.target.value)}
              />
            
            </div>
          </div>
          <Card>
            <div className="my-4 grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <InputBox type="number" min={-90} max={90} label="Latitude" />
              </div>
              <div className="col-span-1 ">
                <InputBox type="number" min={-180} max={180} label="Longitude" />
              </div>
              <div className="col-span-2 ">
                <InputBox type="date" label="Installation Date" />
              </div>
            </div>
          </Card>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3 mb-1 ">
              <InputBox type="date" label="Last Maintence  Date" />
            </div>

            <div className="col-span-6 sm:col-span-3 h-4">
              <h2 className="text-md  text-inputTextColor  mb-2 font-semibold">
                {" "}
                Maintence Period{" "}
              </h2>{" "}
              <select className="block px-3 py-2 w-full rounded-md bg-inputPlaceHolderTextColor sm:col-span-3 text-white  outline-none">
                <option> 1 YEAR </option>
                <option> 2 YEARS </option>
                <option> 3 Years</option>
                <option> 6 MONTHS </option>
                <option>7 MONTHS</option>
                <option>12 DAYS</option>
                <option> 8 DAYS </option>
                <option> Software developer</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <button className="bg-transparent w-full hover:bg-primaryLogin text-primaryLogin font-semibold hover:text-white py-2 px-4 border border-primaryLogin hover:border-transparent rounded">
                Previous
              </button>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <button className="bg-transparent w-full bg-primaryLogin text-primaryLogin font-semibold hover:text-white py-2 px-4 border border-primaryLogin hover:border-transparent rounded">
                <p className="text-white "> Continue:Add Parameters </p>
              </button>
            </div>
          </div>
        </form>
      </div>

      <form className=" p-6 bg-white ">
        <>
          <h2 className="text-cardHeading text-dark-50 text-2xl ">Edit Device Parameter</h2>

          <h2 className="text-cardHeading text-dark-50  ">Mode :0 </h2>
          <div className="col-span-2 mt-3">
            <h2 className="text-md  font-aris pb-2  font-semibold text-inputTextColor">
              {" "}
              Mode Name
            </h2>
            <div className="mb-4">
              <input
                className=" border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
              />
            </div>
          </div>
          <div className="col-span-2 mt-3">
            <h2 className="text-md  font-aris pb-2  font-semibold text-inputTextColor">
              {" "}
              Mode Value
            </h2>
            <div className="mb-4">
              <input
                className=" border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
              />
            </div>
          </div>
          <div className="my-4 grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>

            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
          </div>

          <div className="my-4 grid grid-cols-2 gap-4">
            <div className="col-span-1 mt-2 bg-primaryLogin text-white h-10 p-2 pl-44">
              <Button label="+ Add a new parameter" />
            </div>
          </div>

          <h2 className="text-cardHeading text-dark-50  ">Mode :1 </h2>
          <div className="col-span-2 mt-3">
            <h2 className="text-md  font-aris pb-2  font-semibold text-inputTextColor">
              {" "}
              Mode Name
            </h2>
            <div className="mb-4">
              {/* <label className="block text-gray-700 text-sm font-bold mb-2">Username</label> */}
              <input
                className=" border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
              />
            </div>
          </div>
          <div className="col-span-2 mt-3">
            <h2 className="text-md  font-aris pb-2  font-semibold text-inputTextColor">
              {" "}
              Mode Value
            </h2>
            <div className="mb-4">
              {/* <label className="block text-gray-700 text-sm font-bold mb-2">Username</label> */}
              <input
                className=" border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
              />
            </div>
          </div>
          <div className="my-4 grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>

            <div className="col-span-3">
              <label className="block font-bold">Type</label>
              <select className="block px-3 py-2 w-full bg-inputPlaceHolderTextColor rounded outline-none">
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
                <option>Anshika </option>
              </select>
            </div>
            <div className="col-span-1 mt-6 bg-primaryLogin text-white p-2 pl-24">
              <Button label="Remove" />
            </div>
            <div className="col-span-1">
              <InputBox label="Key" placeholder="(ex. 001)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Name" placeholder="(ex. Param1)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Unit" placeholder="(ex. V, mA)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Init Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Min Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox label="Max Value" placeholder="(ex. 1, 10, 100)" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Merge in Graph" />
            </div>
            <div className="col-span-1">
              <InputBox type="checkbox" label="Show Average" />
            </div>
          </div>

          <div className="my-4 grid grid-cols-2 gap-4">
            <div className="col-span-1 mt-2 bg-primaryLogin text-white h-10 p-2 pl-44">
              <Button label="+ Add a new parameter" />
            </div>
          </div>
          <div className="col-span-1 mt-2 bg-primaryLogin text-white h-10 p-2 ">
            <p className="items-center text-center justify-center"> Update Parameter Details </p>
          </div>
        </>
      </form>
      <div className=" shadow-lg rounded-lg w-full">
        <div className="my-4 rounded-lg bg-red-500 shadow-lg">
          <Card>
            <div className="  text-heading text-dark text-3xl p-4 font-bold">Danger Zone</div>
            <div className="my-4 flex items-center">
              <div className="flex-1">
                <div className="font-bold pl-3 "> Depricate this Equipment </div>
                <div className="pl-3">
                  {" "}
                  You can tempororily disable equipment. This can be later reverted.{" "}
                </div>
              </div>
              <div className="flex-0 w-44 p-3 border-2 text-red-500 border-red-500 mr-5 ">
                <Button label="Depricate Equipment" />
              </div>
            </div>
            <hr />
            <div className="my-4 flex items-center h-24">
              <div className="flex-1">
                <div className="font-bold pl-3 "> Delete this equipment </div>
                <div className="pl-3">
                  Once you delete a equipment, there is no going back. Please be certain.{" "}
                </div>
              </div>

              <div className="flex-0 w-44  bg-red-500 text-white mr-5 pt-4  h-14 p-3 ">
                <Button label="Depricate Equipment" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
