import { Menu } from "@headlessui/react";
import { RouteComponentProps } from "react-router-dom";
import { OverlayPanel } from "primereact/overlaypanel";
import "../styles/header.css";
import { useRef } from "react";
import { endpoints } from "services/endpoints";
import axios from "axios";
import { useState, useEffect } from "react";
// import IconButton from "components/IconButton/IconButton";
import { useDispatch , useSelector } from "react-redux";
import { updateAllCompany, updateSelectedOrganization } from "actions/ListDemoActions";
import { useHistory } from "react-router-dom";

const Mankind = require("../assets1/InvenseDashboardassets/pngicons/Mankindd.png");

const Header = (props) => {

  const assingedOrganizationId = useSelector((state) => state.CompanyReducer.assingedOrganizationId);
  const op = useRef();
  const dispatch = useDispatch();
  const [selectedOrganizationId, setSelectedOrganizationId] = useState("");
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [allCompanyList, setAllCompanyList] = useState([]);
  const history = useHistory();
  const [disableOrganizationSelect , setDisableOrganizationSelect] = useState(true);

  var userDetails = localStorage.getItem("userData");
  userDetails = JSON.parse(userDetails);


  const headers = {
    "Content-Type": "application/json",
  };


  const handleCompanySelection = (e) => {
    const val = e.target.value;
    const selectdComp = allCompanyList.find((item, index) => {
      return item?.name === val;
    });
    setSelectedOrganizationId(selectdComp._id);
    dispatch(updateSelectedOrganization(selectdComp))
    setSelectedOrganization(val);
  };


  useEffect(() => {

    const url = endpoints.company.getCompany;

    if(userDetails?.role === "superAdmin"){
      
      axios
        .get(url, { headers: headers })
        .then((res) => {
          if (res.status == 200) {
            const val = res.data?.items;
            setAllCompanyList(val);
            dispatch(updateAllCompany(val))
            const firstOrg = val[0];
            dispatch(updateSelectedOrganization(firstOrg))
            setSelectedOrganization(firstOrg.name);
            setSelectedOrganizationId(firstOrg._id);
            setDisableOrganizationSelect(false);
          }
        })
        .catch((err) => {
          console.log(err, "this is the error here");
        });
    }
    else if(userDetails?.role === "user" ){
      axios
      .get(url, { headers: headers })
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.items;
          setAllCompanyList(val);
          dispatch(updateAllCompany(val)) 
          const selectedOrganziation = val.find((item) => {return item?._id === assingedOrganizationId})
          dispatch(updateSelectedOrganization(selectedOrganziation))
          setSelectedOrganization(selectedOrganziation.name);
          setSelectedOrganizationId(selectedOrganziation._id);
          setDisableOrganizationSelect(true);
        }
      })
      .catch((err) => {
        console.log(err, "this is the error here");
      });
    } 
    else if(userDetails?.role === "admin" ){
      axios
      .get(url, { headers: headers })
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.items;
          setAllCompanyList(val);
          dispatch(updateAllCompany(val)) 
          const selectedOrganziation = val.find((item) => {return item?._id === assingedOrganizationId})
          dispatch(updateSelectedOrganization(selectedOrganziation))
          setSelectedOrganization(selectedOrganziation.name);
          setSelectedOrganizationId(selectedOrganziation._id);
          setDisableOrganizationSelect(true);
        }
      })
      .catch((err) => {
        console.log(err, "this is the error here");
      });
    } 
   
  }, []);


  const logout = () =>{
    history.push("/");
    localStorage.removeItem("userData");
  }

  return (
    <div className="px-6 h-16 bg-primaryWhite shadow-lg z-100 text-primaryColor flex justify-between items-center rounded-lg mx-2 headerContainer ">
      {/* <img src="#" alt="logo-icon" /> */}
      <div className="font-bold text-lg font-roboto "> INVENSE TECHNOLOGIES </div>
      <div className="flex flex-row items-center">
        <div className="mr-4 text-md font-roboto flex items-center">
          Select Organization :
          <select
            name=""
            id=""
            value={selectedOrganization}
            onChange={(e) => handleCompanySelection(e)}
            className="px-4 border-2 border-gray-400 rounded-md bg-white flex justify-between items-center h-10 outline-none capitalize ml-3"
            disabled={disableOrganizationSelect}
          >
            <option value="">Choose</option>
            {allCompanyList.length != 0 &&
              allCompanyList.map((item, index) => {
                return (
                  <option value={item.name} key={index}>
                    {" "}
                    {item.name}
                  </option>
                );
              })}
          </select>
        </div>

        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={(e) => {
            if (op?.current && op?.current?.toggle) {
              op?.current?.toggle(e);
            }
          }}
        >
          {/* <IconButton
            icon="pi pi-user"
            className="rounded-full bg-gray-100 w-10 h-10 text-primaryColor border "
          /> */}
          <div className="flex flex-start items-center w-16 h-12 rounded-full bg-slate-400 shadow-2xl mx-4">
            {/* <span>
              <img src={Mankind} className=" w-14 ml-1" />
            </span> */}
          </div>

          <span className="mr-2 ml-2 font-roboto text-sm uppercase font-bold">{userDetails?.name}</span>
          <i className="pi pi-chevron-down" />
        </div>
      </div>

      <OverlayPanel
        ref={op}
        className="bg-primaryColor rounded-md text-white w-auto h-auto text-left p-2"
      >
        <div className="w-full">
          <div className="p-2 flex flex-row items-center cursor-pointer">
            <i className="pi pi-user mr-2" /> <span className="text-sm">My Profile</span>
          </div>
          <div className="p-2 flex flex-row items-center cursor-pointer" onClick={logout}>
            <i className="pi pi-sign-out mr-2" />
            <span className="text-sm">Logout</span>
          </div>
        </div>
      </OverlayPanel>
    </div>
  );
};

export default Header;

