import React, { useState, useEffect } from "react";
import { Tab } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { routes } from "routes";
import { FaFilter } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import "../../styles/Top5KwhConsumptions.css";
import { FiEdit } from "react-icons/fi";
import "../../styles/customDataTable.css";
import { MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

const TableForCrud = (props) => {

  const { data, handleEdit, handleDelete, handleAddBtn, title, addTitle, children , handleRowClick} = props;
  const { heading, content } = data;
  const [tableData, setTableData] = useState(content);
  const [inputValue, setInputValue] = useState("");

  var usersData = localStorage.getItem("userData");
  var usersData = JSON.parse(usersData);
  const role = usersData.role;

  useEffect(() => {
    setTableData(content);
  }, [content]);

  return (
    <div className="my-4 mx-2 mr-6 p-4  overflow-x-hidden">
      <div className="flex justify-between items-center">
        <h1 className="font-bold font-roboto text-2xl">{title}</h1>
        {/* here we are adding some special parts */}
        {children}
        <div className="flex items-center">
          <div className="px-4 border-2 border-gray-400 rounded-md bg-white flex justify-between items-center h-12 ml-6">
            <HiOutlineSearch color="gray" width={24} />
            <input
              type="text"
              placeholder="Search here .."
              className="font-roboto text-gray-600 text-md ml-3 outline-none w-56"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>

        {/* here we are design the filter options */}
        <div className="flex items-center">
          <div className="flex items-center ml-6 cursor-pointer" onClick={handleAddBtn}>
            <BsPlusCircleFill color="#26a64e" size={32} />
            <div className="font-roboto font-bold text-xl ml-2">{addTitle}</div>
          </div>
        </div>
      </div>

      {/* from here we are designing the table */}
      <div className="tableCont">
        <table className="w-full top5KwhTable bg-white my-8 ">
          <thead>
            <tr>
              {heading &&
                heading.map((item, index) => {
                  return (
                    <>
                      <th
                        className="font-roboto px-6 py-3 font-bold  text-lg text-center"
                        key={index}
                      >
                        {item.title}
                      </th>
                    </>
                  );
                })}
            </tr>
          </thead>
          <tbody className="tableBody">
            {tableData &&
              tableData.map((item, index) => {
                const keys = Object.keys(item);
                return (
                  <>
                    <tr>
                      {keys.length != 0 &&
                        keys.map((itm, ind) => {
                          return (
                            <>
                              <td
                                key={ind}
                                className="font-roboot px-6 py-3 text-md text-center border-1 text-gray-600 font-medium "
                                onClick={() => handleRowClick(item)}
                              >
                                {item[itm]}
                              </td>
                            </>
                          );
                        })}
                      <td className="font-roboot px-6 py-3 text-md text-center  text-gray-600 font-medium flex justify-center items-center">
                        {(role == "admin" || role == "superAdmin") && (
                          <FiEdit
                            className="mx-3"
                            size={23}
                            color="black"
                            onClick={() => handleEdit(item, index)}
                          />
                        )}
                        {role === "superAdmin" && (
                          <MdDelete
                            color="red"
                            size={25}
                            className="ml-8"
                            onClick={() => handleDelete(item, index)}
                          />
                        )}
                        {role === "user" && <AiFillEye className="mx-3" size={23} color="black" />}
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableForCrud;
