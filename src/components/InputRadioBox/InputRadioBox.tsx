import InputError from "components/InputError";
import Label from "components/Label";
import { RadioButton, RadioButtonProps } from "primereact/radiobutton";

interface IInputRadioProps extends RadioButtonProps {
  label?: string;
  hideLabel?: boolean;
  validation?: any;
  hideErrorRow?: boolean;
}

function InputRadioBox(props: IInputRadioProps) {
  const { value, name, label, hideLabel, onChange, validation, hideErrorRow } = props;
  return (
    <div className="w-full flex flex-col justify-start ">
      <Label label={label} hideLabel={hideLabel} />
      <RadioButton
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

export default InputRadioBox;
