import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './selectBox.css';

const SelectBox = (props) => {

    const {onChange , value , label , children , error} = props;

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={onChange}
        error={error ? true : false}
      >
        {children}
      </Select>
      {error && <span className="text-red-600 text-sm mt-1">{error}</span>}
    </FormControl>
  );
};

export default SelectBox;


//   <MenuItem value={10}>Ten</MenuItem>
{/* <MenuItem value={20}>Twenty</MenuItem> */}
{/* <MenuItem value={30}>Thirty</MenuItem> */}