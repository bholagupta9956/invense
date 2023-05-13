import InputError from "components/InputError";
import Label from "components/Label";
import { Checkbox, CheckboxProps } from "primereact/checkbox";

interface IInputProps extends CheckboxProps {
  label?: string;
  hideLabel?: boolean;
  validation?: any;
  hideErrorRow?: boolean;
}

function InputCheckBox(props: IInputProps) {
  const { value, name, label, hideLabel, onChange, validation, hideErrorRow } = props;
  return (
    <div className="w-full flex flex-col justify-start ">
      <Label label={label} hideLabel={hideLabel} />
      <Checkbox
        value={value}
        name={name}
        className={`w-inputCheckBoxWidth bg-white border border-inputBorderColor text-inputTextColor outline-none focus:border-inputFocusColor hover:border-inputHoverColor 
          h-inputCheckBoxHeight text-inputFontSize px-inputPaddingH py-inputPaddingV rounded-inputBorderRadius`}
        onChange={onChange}
        {...props}
      />
      <InputError validation={validation} hideErrorRow={hideErrorRow} />
    </div>
  );
}

export default InputCheckBox;
