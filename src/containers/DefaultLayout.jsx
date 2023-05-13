import React, { Component, Suspense } from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import AuthValidator from "../components/AuthValidator/AuthValidator";
import Loader from "../components/Loader/Loader";
import { routes } from "../routes";
import Header from "./Header";
import LeftMenuV2 from "./LeftMenuV2";
import "../styles/defaultLayout.css";
import { useSelector } from "react-redux";

const Devices = React.lazy(() => import("views/DeviceDetails/Devices.jsx"));

// interface IProps extends RouteComponentProps {}
// interface IState {
//   items: [];
// }

// interface logedInUser {
//   name: string;
//   role: string;
//   token: string;
//   id: string;
// }

// interface Users {
//   userReducer: logedInUser;
// }

const DefaultLayout = (props) => {
  var usersData = localStorage.getItem("userData");
  usersData = JSON.parse(usersData);
  const role = usersData?.role;

  return (
    <div className="w-ful layoutsContainer">
      <div className="min-h-screen flex bg-surfaceColor">
        <div className="flex-0">
          <LeftMenuV2 {...props} />
        </div>

        <div className="p-5 flex-1">
          <Header {...props} />
          <main>
            <Suspense fallback={<Loader />}>
              <Switch>
                {routes.map((route, idx) => {
                  
                  return (route.component && route.role.includes(role)) ? (
                   
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          render={(props) => (
                            <AuthValidator
                              Authorizedcomponent={route.component}
                              urlpath={route.path}
                              {...props}
                            />
                          )}
                        />
                    
                  ) : null;
                })}
                <Route path="/Devices" render={(props) => <Devices {...props} />} />
                <Redirect from="/" to="/404" />
              </Switch>
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
