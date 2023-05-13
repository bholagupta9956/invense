import React from "react";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import TableForCrud from "components/TableForCrud/TableForCrud";
import AddLocation from "components/Model/AddLocation/AddLocation";
import axios from "axios";
import { endpoints } from "services/endpoints";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateProjects } from "actions/ListDemoActions";
import { hasIn } from "lodash";

const LocationC = () => {
  const dispatch = useDispatch();
  const [showAddLocation, setShowLocation] = useState(false);
  const [allProjectList, setProjectList] = useState([]);
  const [update, setUpdate] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [selectedProjectId, setSelectedProjectId] = useState({});
  const [tableDataForProject, setTableDataForProject] = useState({});
  const [allCompanyList, setAllCompanyList] = useState([]);

  const selectedOrganization = useSelector((state) => state.CompanyReducer.selectedOrganization);
  const selectedOrganizationId = selectedOrganization._id;
  const selectedOrganizationName = selectedOrganization.name;

  const handleEdit = (dta) => {
    setUpdate(true);
    setSelectedProject(dta);
    setSelectedProjectId(dta.locationId);
    setShowLocation(true);
  };

  const handleAddBtn = () => {
    setShowLocation(true);
  };

  const handleCancelBtn = () => {
    setShowLocation(false);
  };

  const tableDataFormator = (heading, content) => {
    const contenteData = content.map((item, index) => {
      const val = {
        id: index + 1,
        location: item.name,
        locationId: item._id,
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

  const heading = [
    {
      id: 1,
      title: "SN",
    },
    {
      id: 2,
      title: "Location ",
    },
    {
      id: 3,
      title: "Location Id",
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

  const headers = {
    "Content-Type": "application/json",
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
          dispatch(updateProjects(val));
          tableDataFormator(heading, val);
        }
      })
      .catch((err) => {
        console.log(err, "this is the error here");
      });
  };

  const handleDelete = (dta) => {
    const url = endpoints.location.deleteProject + dta.locationId;
    axios
      .delete(url)
      .then((res) => {
        if (res.status === 200) {
          toast("Project deleted", { type: "success" });
          getAllProject();
        }
      })
      .catch((err) => {
        console.log(err, "delete error");
      });
  };

  useEffect(() => {
    getAllProject();
  }, [selectedOrganizationId]);

  return (
    <>
      <div className="my-4 bottom-2 h-screen  overflow-auto  ">
        <TableForCrud
          title="ORGANIZATION MANAGEMENT"
          addTitle="Add Company"
          data={tableDataForProject}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleAddBtn={handleAddBtn}
        />
      </div>
      {showAddLocation && (
        <AddLocation
          handleCancelBtn={handleCancelBtn}
          getAllProject={getAllProject}
          selectedProject={selectedProject}
          selectedProjectId={selectedProjectId}
          setSelectedProject={setSelectedProject}
          setSelectedProjectId={setSelectedProjectId}
          update={update}
          setUpdate={setUpdate}
          organizationId={selectedOrganizationId}
          setShowLocation={setShowLocation}
        />
      )}
    </>
  );
};

export default LocationC;
