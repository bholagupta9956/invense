import React, { Component } from "react";

class AuthValidator extends Component {
  constructor(props) {
    super(props);
    this.isValid = this.isValid.bind(this);
  }

  isValid() {
    return true;
  }

  render() {
    if (this.isValid()) {
      return <this.props.Authorizedcomponent {...this.props} />;
    } else {
      this.props.history.push("/login/?rto=" + btoa(this.props.urlpath));
      return <div />;
    }
  }
}

export default AuthValidator;
