//eslint-disable-next-line
import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import Loader from "./components/Loader/Loader";
import { store } from "./store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";
import Signup from "./views/Signup/Signup";


const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));
const Page404 = React.lazy(() => import("./views/Page404"));
const PageLogin = React.lazy(() => import("./views/Loginn/Loginn"));
// const Signup = React.lazy(() => import("views/Signup/Signup"));
const HomeCard = React.lazy(() => import("./components/HomeCard/HomeCard"));
const NewLocation = React.lazy(() => import("./views/Device/Device"));
const Role = React.lazy(() => import("./views/Role/Role"));
const Basic = React.lazy(() => import("./views/Basic/Basic"));
const Devices = React.lazy(() => import("./views/DeviceDetails/Devices"));
const Equipments = React.lazy(() => import("./views/Equipments/Equipments"));
const HomeCard2 = React.lazy(() => import("components/Homecard2/HomeCard2"));
const AddCompanyy = React.lazy(() => import("./views/Company/Company"));
const Api = React.lazy(() => import("./views/Api/Api"));


class App extends Component {

  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router>
              <React.Suspense fallback={<Loader />}>
                <Api/>
                <Switch>
                  <Route exact path="/" render={(props: any) => <PageLogin {...props} />} />
                  <Route exact path="/signup" render={(props: any) => <Signup {...props} />} />
                  <Route path="/" render={(props: any) => <DefaultLayout {...props} />} />
                </Switch>
              </React.Suspense>
            </Router>
          </PersistGate>
        </Provider>
        <ToastContainer />
      </>
    );
  }
}
export default App;

// api key = "AIzaSyAVeNHHmmNBMP9hBxT8mezlvU6qDKPMbD0"
