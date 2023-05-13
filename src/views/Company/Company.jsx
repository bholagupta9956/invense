import TableForCrud from "components/TableForCrud/TableForCrud";
import React, { useState , useEffect , useRef } from "react";
import { useHistory } from "react-router-dom";
import AddCompany from "components/Model/AddCompany/AddCompany";
import { endpoints } from "services/endpoints";
import { useDispatch  , useSelector} from "react-redux";
import {toast} from "react-toastify";

import axios from "axios";


const Company = () => {

  const history = useHistory();
  const [showAddCompany, setShowAddCompany] = useState(false);
  const [allCompanyList , setAllCompanyList] = useState([]);
  const [tableDataForCompany , setTableDataForCompany] = useState({});
  const [selectedCompany , setSelectedCompany] = useState({});
  const [update , setUpdate] = useState(false);

 

  // here we are writing code for getting all the company;

  const headers = {
    "Content-Type" : "application/json"
  }

  const tableDataFormator = (heading , content) =>{
    
    const contenteData = content.map((item,index) =>{
        const val = {
            id : index + 1, 
            company : item.name ,
            comapanyId : item._id
        }
       return val
    })

    const dta = {
      heading : heading  ,
      content : contenteData
    }

    setTableDataForCompany(dta)
}

const heading = [
  {
    id : 1 ,
    title : "SN"
  } ,
  {
    id : 2 ,
    title : "Company" ,
  } ,
  {
    id : 3 ,
    title : "CompanyId" ,
  },
  {
    id : 4 , 
    title : "Action"
  }
]

 
  const getAllCompany = () =>{
    const url = endpoints.company.getCompany;
    axios.get(url , {headers : headers})
    .then((res) =>{
      if(res.status == 200){
        const val = res.data?.items;
        setAllCompanyList(val);
        tableDataFormator(heading , val)
      }
    })
    .catch((err) =>{
      console.log(err ,"this is the error here");
    })
  }

  const handleEdit = (dta  , index) => {
    setUpdate(true)
    const selectedCompny = allCompanyList[index];
    setSelectedCompany(selectedCompny);
    setShowAddCompany(true)
  };

  const handleDelete = (dta , index) => {
    const selectedCompny = allCompanyList[index];
    const url = endpoints.company.deleteCompany + selectedCompny?._id;
    axios.delete(url)
    .then((res) =>{
      if(res.status === 200){
        toast("Organization deleted successfully" , {type : 'success'})
        getAllCompany();
      }
    })
    .catch((err) =>{
      console.log(err ,"this is the error")
    })
  };

  const handleAddBtn = () => {
    setShowAddCompany(true);
  };

  const handleCancelBtn = () => {
    setShowAddCompany(false);
    setSelectedCompany({})
  };
  useEffect(() =>{
    getAllCompany();
  },[])


  return (
    <>
      <div className="my-4 bottom-2  ">
        <TableForCrud
          title="ORGANIZATION MANAGEMENT"
          addTitle="Add Company"
          data={tableDataForCompany}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleAddBtn={handleAddBtn}
        
        />
      </div>
      {showAddCompany && (
        <div style={{ width: "80%" }}>
          <AddCompany handleCancelBtn={handleCancelBtn} getAllCompany={getAllCompany}  selectedCompany = {selectedCompany} update={update} setUpdate={setUpdate} showAddCompany={showAddCompany}/>
        </div>
      )}
    </>
  );
};
export default Company;
