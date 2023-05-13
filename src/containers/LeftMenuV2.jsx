import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import * as routes from "routes";
import CompanyImg from "../assets1/InvenseDashboardassets/pngicons/Company.svg";
import LocationImg from "../assets1/InvenseDashboardassets/pngicons/location.svg";
import UserRole from "../assets1/InvenseDashboardassets/pngicons/UserRole.svg";

const LeftMenuV2 = (props) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const items = [
    {
      name: "Menu",

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      onClick: () => setOpen(!open),
    },
    {
      path: routes.linkPathHome,
      name: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      onClick: () => {
        history.push(routes.linkPathHome);
      },
    },
    {
      path: routes.linkPathEnergyDashboard,
      name: "Energy Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      onClick: () => {
        history.push(`${routes.linkPathEnergyDashboard}`);
      },
    },
    // {
    //   path: routes.linkPathWaterDashboard,
    //   name: "Water Dashboard",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-6 w-6"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //     >
    //       <path
    //        strokeLinecap="round"
    //         stroke-linejoin="round"
    //         d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    //       />
    //     </svg>
    //   ),
    //   onClick: () => {
    //     history.push(routes.linkPathWaterDashboard);
    //   },
    // },
    // {
    //   path: routes.linkPathAlerts,
    //   name: "Alerts",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth="1.5"
    //       stroke="currentColor"
    //       className="w-6 h-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         stroke-linejoin="round"
    //         d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
    //       />
    //     </svg>
    //   ),
    //   onClick: () => {
    //     history.push(routes.linkPathAlerts);
    //   },
    // },
    // {
    //   path: routes.linkPathAnalyze,
    //   name: "Analyze",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //      strokeWidth="1.5"
    //       stroke="currentColor"
    //       className="w-6 h-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         stroke-linejoin="round"
    //         d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
    //       />
    //     </svg>
    //   ),
    //   onClick: () => {
    //     history.push(routes.linkPathAnalyze);
    //   },
    // },
    {
      path: routes.linkPathReports,
      name: "Reports",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
      onClick: () => {
        history.push(routes.linkPathReports);
      },
    },

    {
      path: routes.linkPathLocation,
      name: "Location",
      icon: (
        // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
        //   <path strokeLinecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
        // </svg>
        <img src={LocationImg} alt="" className="w-6 hover:bg-red-500" />
      ),
      onClick: () => {
        history.push(routes.linkPathLocation);
      },
    },

    {
      path: routes.linkPathCompany,
      name: "Company",
      icon: (
        // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
        //   <path strokeLinecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
        // </svg>
        <img src={CompanyImg} alt="" className="w-6" />
      ),
      onClick: () => {
        history.push(routes.linkPathCompany);
      },
    },
    {
      path: routes.linkPathSubLocation,
      name: "Sub Location",
      icon: (
        // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
        //   <path strokeLinecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
        // </svg>
        <img src={CompanyImg} alt="" className="w-6" />
      ),
      onClick: () => {
        history.push(routes.linkPathSubLocation);
      },
    },

    {
      path: routes.linkPathDevice,
      name: "Device",
      icon: <img src={CompanyImg} alt="" className="w-6" />,

      onClick: () => {
        history.push(routes.linkPathDevice);
      },
    },
    {
      path: routes.linkPathRole,
      name: "User & Roles",
      icon: <img src={UserRole} alt="" className="w-6" />,
      onClick: () => {
        history.push(routes.linkPathRole);
      },
    },

    // {
    //   path: routes.linkPathSetting,
    //   name: "Setting",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth="1.5"
    //       stroke="currentColor"
    //       className="w-6 h-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         stroke-linejoin="round"
    //         d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
    //       />
    //       <path
    //        strokeLinecap="round"
    //         stroke-linejoin="round"
    //         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    //       />
    //     </svg>
    //   ),
    //   onClick: () => {
    //     history.push(routes.linkPathSetting);
    //   },
    // },
  ];

  var usersData = localStorage.getItem("userData");
  usersData = JSON.parse(usersData);
  var role = usersData.role;

  const location = useLocation();
  const getActivePath = (path) => {
    return !!(path && path.includes(location.pathname));
  };

  if (open) {
    return (
      <>
       

        <div className="z-30 w-20 text-white">
          <div
            className="fixed w-20 bg-primaryColor shadow-lg mx-4 my-4 rounded-lg h-full overflow-hidden"
            style={{ height: "96%" }}
          >
            {items.map((item, index) => {
              let isActivePath = getActivePath(item.path);
              if (role === "superAdmin") {
                return (
                  <div
                    onClick={item.onClick}
                    className="px-4 py-4 hover:bg-white hover:text-primaryColor cursor-pointer flex justify-center font-roboto"
                  >
                    {item.icon}
                   
                  </div>
                );
              } else {
                if (item.name !== "User & Roles") {
                  return (
                    <div
                      onClick={item.onClick}
                      className="px-4 py-4 hover:bg-white hover:text-primaryColor cursor-pointer flex justify-center font-roboto"
                      key={index}
                    >
                      {item.icon}
                      
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="z-30 w-52 h-19/20">
      <div
        className="fixed w-52 my-4 overflow-hidden rounded-lg  bg-primaryColor w-52 text-white shadow-lg mx-3 my-2 rounded-lg  overflow-hidden"
        style={{ height: "96%" }}
      >
        {items.map((item, index) => {
          let isActivePath = getActivePath(item.path);
          if (role === "superAdmin") {
            return (
              <div
                onClick={item.onClick}
                className={`px-4 py-4 ${
                  isActivePath ? " bg-white text-primaryColor" : ""
                } hover:bg-white hover:text-primaryColor  hover:rounded-br-3xl flex items-center gap-x-2 cursor-pointer `}
                key={index}
              >
                {item.icon}
                <div className="font-roboto">{item.name}</div>
              </div>
            );
          } else {
            if (item.name !== "User & Roles" && item.name !== "Company") {
              return (
                <div
                  onClick={item.onClick}
                  className={`px-4 py-4 ${
                    isActivePath ? " bg-white text-primaryColor" : ""
                  } hover:bg-white hover:text-primaryColor  hover:rounded-br-3xl flex items-center gap-x-2 cursor-pointer `}
                  key={index}
                >
                  {item.icon}
                  <div className="font-roboto">{item.name}</div>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default LeftMenuV2;
