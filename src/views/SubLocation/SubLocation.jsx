import React from "react";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import TableForCrud from "components/TableForCrud/TableForCrud";
import { endpoints } from "services/endpoints";
import axios from "axios";
import AddSubLocation from "components/Model/AddSubLocation/AddSubLocation";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { generatePath , useHistory} from "react-router-dom";


const SubLocation = () => {

  const [showAddSubLocation, setAddShowSubLocation] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [allSubLocation, setAllSubLocation] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [update , setUpdate] = useState(false);
  const [tableDataForProject, setTableDataForProject] = useState({});
  const [selectedSubLocation , setSelectedSubLocation] = useState({});
  const history = useHistory();
  
  const selectedOrganization = useSelector((state) => state.CompanyReducer.selectedOrganization);
  const selectedOrganizationId = selectedOrganization._id;
  const selectedOrganizationName = selectedOrganization.name;

  const handleProjectSelection = (e) => {
    const val = e.target.value;
    const filterDta = projectList.find((item, index) => {
      return item.name === val;
    });
    setSelectedProjectId(filterDta._id);
    setSelectedProjectName(filterDta.name);
  };

  const headers = {
    "Content-Type": "application/json",
  };

  const handleDelete = (dta) => {
    const url = endpoints.panel.deletePanel + dta?.panelId;
    axios.delete(url)
    .then((res) =>{
      if(res.status === 200){
        getAllSubLocation();
        toast("Panel deleted" , {type : "success"})
      }
    })
    .catch((err) =>{
      console.log(err )
    })
  };

  const handleEdit = (dta) => {
    setAddShowSubLocation(true)
    setUpdate(true)
    setSelectedSubLocation(dta)
  };

  const handleAddBtn = () => {
    setAddShowSubLocation(true);
  };

  const handleCancelBtn = () => {
    setAddShowSubLocation(false);
  };

  const heading = [
    {
      id: 1,
      title: "SN",
    },
    {
      id: 2,
      title: "Panel",
    },
    {
      id: 3,
      title: "Panel Id",
    },
    {
      id: 4,
      title: "Latttitude",
    },
    {
      id: 5,
      title: "Longitude",
    },
    {
      id: 5,
      title: "Action",
    },
  ];

  const tableDataFormator = (heading, content) => {
    const contenteData = content.map((itm, index) => {
      const item = itm?.meta
      const val = {
        id: index + 1,
        panel: item.name,
        panelId: itm._id,
        lattitude: item.lat,
        longitude: item.lng,
      };
      return val;
    });

    const dta = {
      heading: heading,
      content: contenteData,
    };

    setTableDataForProject(dta);
  };

  const getAllProject = () => {
    const url =
      endpoints.location.getProjectByOrganizationId + selectedOrganizationId + "/projects";

    axios
      .get(url, { headers: headers })
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.items;
          setProjectList(val);
          const firstOrg = val[0];
          setSelectedProjectId(firstOrg?._id)
          setSelectedProjectName(firstOrg?.name)
        }
      })
      .catch((err) => {
        console.log(err, "this is the error here");
      });
  };

  const getAllSubLocation = () =>{
    const url = endpoints.panel.getSublocationByProjectId + selectedProjectId + "/panels" 
    axios
      .get(url, { headers: headers })
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.items
          setAllSubLocation(val);
          tableDataFormator(heading, val);
        }
      })
      .catch((err) => {
        console.log(err, "this is the error");
      });
  }

  useEffect(() =>{
    getAllSubLocation()
  },[selectedProjectId])

  useEffect(() => {
    getAllProject();
  }, [selectedOrganizationId]);
  

  const handleRowClick = (data) => {
    console.log(data , "data here");
    const path = generatePath("/energy-dashboard/:projectId/:panelName/:panelId", {
      projectId: selectedProjectId,
      panelName: data?.panel,
      panelId: data?.panelId,
    });
    history.push(path);
  };


  return (
    <>
      <div className="my-4 bottom-2 h-screen  overflow-auto  ">
        <TableForCrud
          title="PANEL MANAGEMENT"
          addTitle="Add Panel"
          data={tableDataForProject}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleRowClick={handleRowClick}
          handleAddBtn={handleAddBtn}
        >
          <div className="flex items-center w-64">
            <select
              name=""
              id=""
              value={selectedProjectName}
              onChange={(e) => handleProjectSelection(e)}
              className="px-4 border-2 border-gray-400 rounded-md bg-white flex justify-between items-center h-12 ml-6 w-52"
            >
              {projectList.length != 0 &&
                projectList.map((item, index) => {
                  return (
                    <option value={item.name} key={index}>
                      {" "}
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </TableForCrud>
      </div>
      {showAddSubLocation && (
        <AddSubLocation handleCancelBtn={handleCancelBtn} getAllSubLocation={getAllSubLocation} selectedSubLocation={selectedSubLocation} update={update} setUpdate={setUpdate} setSelectedSubLocation={setSelectedSubLocation} selectedProjectName={selectedProjectName}/>
      )}
    </>
  );
};

export default SubLocation;
