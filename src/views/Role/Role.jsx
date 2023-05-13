import axios, { all } from "axios";
import Button from "components/Button/Button";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import SelectBox from "components/SelectBox/SelectBox";
import MenuItem from "@mui/material/MenuItem";
import { endpoints } from "services/endpoints";
import { updateAllUsers } from "actions/ListDemoActions";
import { useDispatch } from "react-redux";

const Role = () => {
  const allCompany = useSelector((state) => state.CompanyReducer.company);
  const allUsers = useSelector((state) => state.UserReducer.allUsers);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [organization, setOrganization] = useState({
    id: "",
    name: "",
  });
  const [user, setUser] = useState({
    id: "",
    name: "",
  });
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});

  const handleUserSelection = (e) => {
    const val = e.target.value;
    var userId = allUsers.find((itm) => {
      return itm.name === val;
    });
    setUser({
      name: val,
      id: userId?._id,
    });
  };
  const handleCompanySelection = (e) => {
    const val = e.target.value;
    var companyId = allCompany.find((itm) => {
      return itm.name === val;
    });
    setOrganization({
      name: val,
      id: companyId?._id,
    });
  };

  const getAllUsers = () => {
    const url = endpoints.authentication.getAllUsers;
    axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          const val = res.data?.item;
          console.log(val, "this is the value here");
          dispatch(updateAllUsers(val));
        }
      })
      .catch((err) => {
        console.log(err, "this is the error here");
      });
  };

  console.log(allUsers, "all users");

  const submit = () => {
    if (!user.name) {
      setErrors({ user: "Please select user" });
    } else if (!organization.name) {
      setErrors({ organization: "Please select organization" });
    } else if (!role) {
      setErrors({ role: "Please select roles" });
    } else {
      setErrors({});
      const url = endpoints.roles.assignUserToOrganization + organization.id + "/users";
      const data = {
        user_id: user.id,
        role: role,
      };

      setLoading(true);
      axios
        .post(url, data)
        .then((res) => {
          setLoading(false);
          if (res.status == 200) {
            toast("Role assigned to user", { type: "success" });
            getAllUsers();
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "this is the error");
        });
    }
  };

  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg bg-white mt-3 mx-2">
        <form>
          <div className="form-group mb-6">
            <h2 className="text-2xl font-semibold font-roboto"> Invite Users</h2>
            <div className="col-span-2 mt-3">
              <h2 className="text-md text-inputTextColor font-semibold font-roboto mb-1">
                {" "}
                User Email
              </h2>
              <SelectBox
                label="Select User"
                value={user?.name}
                onChange={handleUserSelection}
                error={errors?.user}
              >
                {allUsers.map((user, index) => {
                  return (
                    <MenuItem value={user.name} key={index}>
                      {user.name}
                    </MenuItem>
                  );
                })}
              </SelectBox>
            </div>
          </div>

          <div className="col-span-2 ">
            <h2 className="text-md text-inputTextColor font-semibold font-roboto mb-1"> Company</h2>
            <SelectBox
              label="Select Organization"
              value={organization?.name}
              onChange={handleCompanySelection}
              error={errors?.organization}
            >
              {allCompany.map((company, index) => {
                return (
                  <MenuItem value={company.name} key={index}>
                    {company.name}
                  </MenuItem>
                );
              })}
            </SelectBox>
          </div>

          <div className="col-span-2 mt-6">
            <h2 className="text-md text-inputTextColor font-semibold font-roboto mb-1"> Role</h2>
            <SelectBox
              label="Select Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              error={errors?.role}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </SelectBox>
          </div>

          <div className="mt-5">
            <Button loading={loading} title="Save" onClick={submit} />
          </div>
        </form>
      </div>
      <form>
        <div className="block p-6 rounded-lg shadow-lg mt-4  bg-white mx-2">
          <h2 className="text-2xl font-semibold font-roboto"> User & Permission</h2>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className=" py-4  whitespace-nowrap font-semibold dark:text-white"
                  >
                    User
                  </th>
                  {/* <td className=" px-6 text-md font-semibold py-4">Email</td> */}
                  <th className="px-6 font-semibold py-4 font-roboto">Company</th>
                  <th className="px-6 font-semibold py-4 font-roboto">Role</th>
                  <th className="px-6 font-semibold py-4 font-roboto">Action</th>
                </tr>

                {allUsers.length != 0 &&
                  allUsers.map((user, index) => {
                    return (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={index}
                      >
                        <td
                          scope="row"
                          className=" py-4 font-medium  whitespace-nowrap dark:text-white"
                        >
                          {user?.name}
                        </td>
                        <td className="px-6 py-4 font-roboto">{user?.name}</td>
                        <td className="px-6 py-4 font-roboto">
                          {user?.is_superadmin === true ? "SuperAdmin" : user?.organization_role}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            type="button"
                            className=" w-44 h-10 rounded-sm  text-semibold shadow-xl  uppercase bg-red-500 text-white "
                          >
                            <p className="text-semibold font-roboto "> Revoke permission</p>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </>
  );
};

export default Role;

const data = [
  {
    is_superadmin: false,
    _id: "641b1c05ebd6f47e57fff379",
    name: "Jon Doe",
    projectRoles: [],
    __v: 0,
    organization_id: "6446368f6e524d4d86adcf0e",
    organization_role: "admin",
  },
  {
    is_superadmin: false,
    _id: "642e60a7554cd621cf19fccd",
    name: "bhola",
    projectRoles: [],
    __v: 0,
    organization_id: "64461ae86e524d4d86adcdd2",
    organization_role: "admin",
  },
  {
    is_superadmin: false,
    _id: "642e60ea554cd621cf19fcd9",
    name: "bhola",
    projectRoles: [],
    __v: 0,
  },
  {
    is_superadmin: false,
    _id: "642e60fd554cd621cf19fce0",
    name: "bhola",
    projectRoles: [],
    __v: 0,
  },
  {
    is_superadmin: false,
    _id: "642e6521554cd621cf19fd33",
    name: "bhola ",
    projectRoles: [],
    __v: 0,
  },
  {
    _id: "643b74ac66127537048ffeb1",
    name: "Invense Superadmin",
    is_superadmin: true,
    projectRoles: [],
    __v: 0,
  },
];

