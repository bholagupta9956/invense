import React, { Component } from "react";
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea";
import Label from "components/Label/Label";
import InputError from "components/InputError/InputError";

interface IInputProps extends InputTextareaProps {
  label?: string;
  hideLabel?: boolean;
  validation?: any;
  hideErrorRow?: boolean;
}

function InputTextareaBox(props: IInputProps) {
  const { value, name, label, hideLabel, onChange, onBlur, validation, hideErrorRow } = props;
  return (
    <div className="w-full flex flex-col justify-start ">
      <Label label={label} hideLabel={hideLabel} />
      <InputTextarea
        value={value}
        name={name}
        className={`w-full bg-white border border-inputBorderColor text-inputTextColor outline-none focus:border-inputFocusColor hover:border-inputHoverColor 
          text-inputFontSize px-inputPaddingH py-inputPaddingV rounded-inputBorderRadius `}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      <InputError validation={validation} hideErrorRow={hideErrorRow} />
    </div>
  );
}

export default InputTextareaBox;
