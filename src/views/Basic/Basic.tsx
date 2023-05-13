import React from "react";
import InputBox from "../../components/InputBox/InputBox";
import Card from "../../components/Card/Card";

const Newequipments = () => {
  return (
    <>
      <>
        <div className="block p-6 rounded-lg shadow-lg bg-white m ">
          <form>
            <div className="form-group mb-6">
              <h2 className="text-2xl font-semibold "> Add New Equipemnts </h2>
              <p className="text-md  text-inputTextColor mt-2"> Basic Deatils </p>
              <div className="col-span-2 mt-3">
                <h2 className="text-md  font-aris pb-2  font-semibold text-inputTextColor">
                  {" "}
                  Equipmemt Name
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
            </div>

            <div className="col-span-2 ">
              <h2 className="text-md  pb-2  font-semibold text-inputTextColor"> Equipments Model </h2>
              <div className="mb-4">
                {/* <label className="block text-gray-700 text-sm font-bold mb-2">Username</label> */}
                <input
                  className=" border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
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
                {/* <label className="block text-gray-700 text-sm font-bold mb-2">Username</label> */}
                <input
                  className=" border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
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
                <h2 className="text-md  text-inputTextColor  font-semibold">
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
      </>
    </>
  );
};
export default Newequipments;
