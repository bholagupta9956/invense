import React, { useState, useEffect } from "react";
import "./customTable.css";



const CustomTable = (props) => {

  const { datass, tableClassName,  handleRowClick } = props;
  const { heading, content, tableHeading, headingStyle, contentStyle } = datass;
  const [data, setData] = useState(content);
  const [inputValue, setInputValue] = useState("");

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
    <div className="customTable rounded-md  z-20 py-2 overflow-y-auto scrollbar-hide overflow-x-hidden">
      <div className="flex flex-col">
        <div className="flex justify-between border-b-2 py-2 align-center px-4 mt-2">
          <h4 className="text-black text-lg  font-bold  font-roboto ">{tableHeading}</h4>
          <input
            type="text"
            className="tableSearchBox z-20"
            placeholder="Search here ..."
            value={inputValue}
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-0 inline-block min-w-full sm:px-6 lg:px-8">
            <div className={`${tableClassName}`}>
              <table className="min-w-full ">
                <thead className="border-b bg-lightGreen customTableHeading">
                  <tr>
                    {heading &&
                      heading.map((item, index) => {
                        return (
                          <th
                            scope="col"
                            key={index}
                            className="text-smd font-semibold text-green-600 font-roboto font-semibold  py-4 text-left pl-4"
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
                        <tr
                          className="border-b customTableContent"
                          onClick={() => handleRowClick(item)}
                          key={index}
                        >
                          {keys.length != 0 &&
                            keys.map((itm, ind) => {
                              return (
                                <td
                                  className=" py-4 whitespace-nowrap text-sm font-medium text-gray-600  font-roboto text-left pl-4"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
