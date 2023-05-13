import React, { useEffect, useState } from "react";
import { ISimpleReactValidator } from "interface/common";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { routes } from "routes";
import { endpoints } from "services/endpoints";
import { updateLogedInUserDetails, updateOrganizationId } from "actions/ListDemoActions";

const Loginimage = require("../../assets1/InvenseDashboardassets/Loginimage.png");
const twitter = require("../../assets1/InvenseDashboardassets/pngicons/twitter.png");
const envelope = require("../../assets1/InvenseDashboardassets/pngicons/envelope.png");
const locki = require("../../assets1/InvenseDashboardassets/pngicons/locki.png");
const facebook = require("../../assets1/InvenseDashboardassets/pngicons/facebook.png");
const Email = require("../../assets1/InvenseDashboardassets/pngicons/Email.png");
const tick = require("../../assets1/InvenseDashboardassets/pngicons/tick.png");
const invinse = require("../../assets/img/invinse.png");
const eye = require("../../assets1/InvenseDashboardassets/pngicons/eye.png");

const Loginn = () => {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const submit = () => {
    if (email == "") {
      toast("Please enter email", { type: "warning" });
    } else if (password == "") {
      toast("Please enter password", { type: "warning" });
    } else {
      const data = {
        username: email,
        password: password,
      };

      const url = endpoints.authentication.login;

      axios
        .post(url, data)
        .then((res) => {
          if (res.status === 200) {
           
            var roles = "user";

            if(res?.data?.item?.user?.is_superadmin  === true){
              roles = "superAdmin"
            }
            else if(res?.data?.item?.user?.organization_role === "admin"){
              roles = 'admin'
              dispatch(updateOrganizationId(res?.data?.item?.user?.organization_id))
            }
            else if(res?.data?.item?.user?.organization_role === "user"){
              roles = "user";
              dispatch(updateOrganizationId(res?.data?.item?.user?.organization_id))
            }

            const userData = {
              name: res?.data?.item?.user?.name,
              role: roles,
              token: res?.data?.item?.jwtToken,
              id: res?.data?.item?.user?._id,
            };

            localStorage.setItem("userData", JSON.stringify(userData));
            dispatch(updateLogedInUserDetails(userData))
            history.push("/home");
            toast("LogedIn successfully", { type: "success" });
          }
        })
        .catch((err) => {
          console.log(err, " login api failed ");
          toast("Invalid credentials", { type: "warning" });
        });
    }
  };

  const checkIsLogedIn = async() =>{
    const userData = await localStorage.getItem("userData")
    if(userData){
      history.push("/home")
    }
  }

  useEffect(() =>{
    checkIsLogedIn();
  },[])

  return (
    <section className="h-screen mb-12 scrollbar s w-full border-dashed">
      <div className="flex lg:justify-between  items-center flex-wrap h-full">
        <div className="  bg-btnSecondaryColor h-full pl-2 pr-2 flex justify-center items-center w-screen  basis-auto xl:w-6/12 lg:w-10/12  mb-10 md:mb-0 md:h-full md:w-48">
          <img src={Loginimage} className=" mb-4  w-4/5" alt="Sample image" />
        </div>
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          <form>
            <div className="w-full h-full" />
            <div className=" h-full  flex float-right mr-16 mb-14 xl:w-6/12 lg:w-6/12 md:w-9/12 md:mb-0">
              <img src={invinse} className="w-48 pr-6" />
            </div>
            <div className="flex items-center  before:flex-1 before:border-t before:border-gray-300 before:mt-0.5   after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <h1 className=" mb-4 mt-14 font-bold text-4xl text-primaryLogin font-roboto">
                Welcome!
              </h1>
            </div>

            <div className="text-center">
              <p className="m-0 mb-6 text-left text-gray-500 font-roboto ">
                To keep connected with us please login with your{" "}
                <p className="reak-words"> Personal information by email address</p>
              </p>
            </div>

            <div className="mb-6">
              <p className="m-0 text-left pb-2  xl:w-6/12 lg:w-6/12 md:w-9/12  md:mb-0 font-roboto">
                Email
              </p>
              <div className="w-2/3 flex items-center relative  ">
                <img src={envelope} className="absolute  w-5 ml-2 left-2" />

                <input
                  type="text"
                  className="border border-gray-400 shadow-md rounded-lg p-4 pl-12  w-96 font-roboto"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <img src={tick} className=" absolute  w-5 mr-8 right-4" />
              </div>
            </div>

            <div className="mb-12">
              <p className="m-0 pb-2 text-left mt-2  xl:w-6/12 lg:w-6/12 md:w-9/12 md:mb-0 font-roboto">
                Password
              </p>
              <div className="w-2/3 flex items-center relative  ">
                <img src={locki} className="absolute  w-4 ml-2 left-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="border border-gray-400  shadow-md rounded-lg p-4 pl-12 font-roboto  w-96"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute right-14">
                  {showPassword ? <AiOutlineEye size={23} color="gray" onClick={() => setShowPassword(false)}/> : <AiOutlineEyeInvisible onClick={() => setShowPassword(true)} size={23} color="gray"/>}
                </div>
              </div>
            </div>

            <div className="text-center  lg:text-left ">
              <button
                onClick={submit}
                type="button"
                className="inline-block px-7 py-3 bg-primaryLogin shadow-md text-white font-roboto font-medium text-sm  uppercase rounded  w-96 "
              >
                Login
              </button>
              <div className="ml-36">
                <p
                  className="text-sm mt-8 ml-19 cursor-pointer font-roboto"
                  onClick={() => history.push("/signup")}
                >
                  Or Sign up
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Loginn;
