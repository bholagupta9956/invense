import ButtonBox from "components/ButtonBox/ButtonBox";
import LoginInputBox from "components/LoginInputBox/LoginInputBox";
import { ISimpleReactValidator } from "interface/common";
import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import * as routes from "routes";
import SimpleReactValidator from "simple-react-validator";

const logo  = require("../../assets/img/logo.jpg");

interface IState {
  email: string;
  password: any;
  errorMessage?: any;
  [key: string]: any;
  
  

}

interface IProps extends RouteComponentProps<any> {}
class ExtendedComponent extends Component<IProps, IState> {
  validator?: ISimpleReactValidator;
}

class PageLogin extends ExtendedComponent {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
    };
    this.validate = this.validate.bind(this);
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  /*
    -----
    Handlers: Event handler for onChange, onBlur etc
    -----
  */
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    this.setState({ [fieldName]: fieldValue });
  };

  /* 
    -----
    Validators:
    -----
  */
  validate(e: any) {
    this.validator?.showMessageFor(e);
  }
  validateForm = () => {
    let isValid = this.validator?.allValid();
    return isValid;
  };
  /* 
    -----
    Submit / Save Data Functions:
    -----
  */
  onLogin = () => {
    //e.preventDefault();
    this.props.history.push(routes.linkPathHome);
  };

  /* 
    -----
    Helper Functions:
    -----
  */
  enrichForCreate() {
    const credentials = {
      username: this.state.email,
      password: this.state.password,
    };
    return credentials;
  }

  render() {
    return (
      <div className="flex flex-row h-screen">
      
        <div className="w-1/3 bg-primaryColor h-screen" />
        <div className="w-3/4 border-solid h-screen">
          <div className="justify-center items-center bg-white p-4 md:p-0">
            <div
              className="absolute flex flex-row top-1/4 md:w-1/2 w-full shadow-logincard h-auto rounded-2xl z-50"
              style={{ left: "11%" }}
            >
              <div className="bg-primaryColor w-1/2 text-white flex flex-col justify-center items-center rounded-tl-2xl rounded-bl-2xl">
                <div className="text-2xl mb-1">Welcome!!!</div>
                <div className="text-base mb-8"> New to Application?</div>
                <div className="bg-white rounded-2xl cursor-pointer w-44 text-black text-center h-10 py-2 font-bold">
                  SingUp
                </div>
              </div>
              <div className="flex flex-col mt-4 w-3/4 p-4">
                <img src={logo} className=" w-80 h-26 flex flex-start"/>
                <div className="mb-8 text-2xl">Login to Your Account</div>
                <div className="w-full mb-8">
                  <LoginInputBox
                    placeholder="Enter UserName"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mb-6">
                  <div className="w-full mb-1">
                    <LoginInputBox
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="w-full text-right">
                    <span className="text-sm text-gray-500 cursor-pointer">Forgot Password?</span>
                  </div>
                </div>
                <div className="w-full">
                  <ButtonBox label="Login" onClick={this.onLogin} />
                </div>
                <div className="h-5 w-full text-center text-red-500 text-sm mt-1">
                  {this.state.errorMessage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageLogin;
