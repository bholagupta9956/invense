import React from "react";
import TextField from "@mui/material/TextField";
import { css } from '@mui/system';
import "./inputBox.css";


const InputBox = (props) => {

  const { onChange, value , error , label , type } = props;

  return (
    <TextField
      label={label}
      type={type ? type : "text"}
      variant="outlined"
      {...props}
      sx={{ width: "100%" }}
      onChange={onChange}
      value={value}
      helperText={error}
      error={error ? true  : false}
      
    />
  );
};

export default InputBox;
