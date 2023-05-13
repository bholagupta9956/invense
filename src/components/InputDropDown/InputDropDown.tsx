import InputError from "components/InputError";
import Label from "components/Label";
import { Dropdown, DropdownProps } from "primereact/dropdown";

interface IInputProps extends DropdownProps {
  label?: string;
  hideLabel?: boolean;
  validation?: any;
  hideErrorRow?: boolean;
}

function InputDropDown(props: IInputProps) {
  const {
    value,
    name,
    label,
    hideLabel,
    onChange,
    onBlur,
    options,
    optionLabel,
    optionValue,
    validation,
    hideErrorRow,
  } = props;
  return (
    <div className="w-full flex flex-col justify-start ">
      <Label label={label} hideLabel={hideLabel} />
      <Dropdown
        value={value}
        name={name}
        optionLabel={optionLabel}
        optionValue={optionValue}
        options={options}
        className={`w-full bg-white border border-inputBorderColor text-inputTextColor outline-none focus:border-inputFocusColor hover:border-inputHoverColor 
          h-inputHeight text-inputFontSize px-inputPaddingH py-inputPaddingV rounded-inputBorderRadius`}
        onChange={onChange}
        onBlur={onBlur}
        panelClassName={"bg-white text-inputLabelColor border px-inputPaddingH py-inputPaddingV "}
        {...props}
      />
      <InputError validation={validation} hideErrorRow={hideErrorRow} />
    </div>
  );
}

export default InputDropDown;
