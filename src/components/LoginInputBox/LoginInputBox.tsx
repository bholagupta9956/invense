import React, { Component } from "react";
import { InputText, InputTextProps } from "primereact/inputtext";

interface IProps extends InputTextProps {
  label?: string;
}
class LoginInputBox extends Component<IProps> {
  render() {
    const { name, onChange, placeholder, type, value } = this.props;
    return (
      <InputText
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="border border-black h-8 focus:outline-none  focus:border-blue-500 text-sm w-full rounded-md pl-2"
        {...this.props}
      />
    );
  }
}

export default LoginInputBox;
