import React, { useEffect, useState } from "react";
import "../../styles/customDataTable.css";


const CustomDataTables = (props) => {

  const { datass } = props;
  const { heading, content, tableHeading, headingStyle, contentStyle } = datass;
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  var usersData = localStorage.getItem("userData");
  var usersData = JSON.parse(usersData);
  const role = usersData.role;

  const handleSearch = (e) => {
    const val = e.target.value;
    const value = val.toLowerCase();
    setInputValue(val);

    const filteredData = content.filter((item, index) => {
      const objectData = Object.keys(item);
      const objectValues = Object.values(item)
      for(var i = 0; i < objectData.length ; i++){
        var keyD = objectData[i];
        var itm = item[keyD]
        var ddd = itm.toString().toLowerCase()
        if(ddd.includes(value)){
          return item;
        }
      }
    });
    setData(filteredData);
    if (val === "") {
      setData(content);
    }
  };

  useEffect(() => {
    setData(content);
  }, [content]);

  return (
    <div className="mt-1  bg-white rounded-md py-2 h-80 overflow-y-auto scrollbar-hide customDataTables">
      <div className="flex justify-between border-b-2 py-2 align-center px-4">
        <h4 className="text-black text-lg  font-bold  font-roboto">{tableHeading}</h4>
        <input
          type="text"
          className="tableSearchBox"
          placeholder="Search here ..."
          value={inputValue}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      {data?.length !== 0 && (
        <div className="flex flex-col grid  grid-rows-1 grid-flow-col">
          <table className="min-w-full">
            <thead className="border-b pl-4">
              <tr className="customTableHead">
                {heading &&
                  heading.map((item, index) => {
                    return (
                      <th
                        scope="col"
                        className="text-md  font-semibold text-green-600 px-0 py-4 text-left pl-3 font-roboto bg-lightGreen"
                        key={index}
                      >
                        {item.title}
                      </th>
                    );
                  })}
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => {
                  const keys = Object.keys(item);
                  return (
                    <tr className="border-b customTableContent" key={index}>
                      {keys.length != 0 &&
                        keys.map((itm, ind) => {
                          return (
                            <td
                              className="px-0 py-4 whitespace-nowrap text-sm font-medium text-gray-600 pl-3 font-roboto"
                              style={contentStyle}
                              key={ind}
                            >
                              {item[itm]}
                            </td>
                          );
                        })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}

      {data?.length == 0 && (
        <div className="flex jusitify-center items-center w-full h-full font-roboto text-gray-600">
          <div className="text-center w-full text-lg">No device under maintaince</div>
        </div>
      )}
    </div>
  );
};

export default CustomDataTables;
