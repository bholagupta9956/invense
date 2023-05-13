import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  updateAllDevices,
  updateAllPanels,
  updateAllUsers,
  updateProjects,
} from "actions/ListDemoActions";
import { endpoints } from "services/endpoints";


const Api = () => {

  const [allDevices, setAllDevices] = useState([]);
  const [allPanels, setAllPanels] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const dispatch = useDispatch();

  const selectedOrganization = useSelector((state) => state.CompanyReducer.selectedOrganization);
  const allProjects = useSelector((state) => state.ProjectReducer.projects);
  var totalProjects = allProjects.length;
  var firstProject = allProjects[0];


  const getAllPanels = () => {
    const url = endpoints.panel.getSublocationByProjectId + firstProject?._id + "/panels";
    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          const val = res.data?.items;
          dispatch(updateAllPanels(val));
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  const getAllDevices = () => {
    const url = endpoints.device.getDevicesByProjectId + firstProject?._id + "/devices";
    axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.items;
          setAllDevices(val);

          dispatch(updateAllDevices(val));
        }
      })
      .catch((err) => {
        console.log(err, "this is the error");
      });
  };

  const getAllProject = () => {
    const url =
      endpoints.location.getProjectByOrganizationId + selectedOrganization?._id + "/projects";

    axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.items;
          dispatch(updateProjects(val));
        }
      })
      .catch((err) => {
        console.log(err, "this is the error here");
      });
  };

  const getAllUsers = () => {
    const url = endpoints.authentication.getAllUsers;
    axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.item;
          dispatch(updateAllUsers(val));
        }
      })
      .catch((err) => {
        console.log(err, "this is the error here");
      });
  };

  useEffect(() => {
    getAllPanels();
    getAllDevices();
  }, [allProjects]);

  useEffect(() =>{
    setInterval(() => {
      getAllProject();
      getAllUsers();
    }, 30000);
  },[])

  
  return null;
};

export default Api;
