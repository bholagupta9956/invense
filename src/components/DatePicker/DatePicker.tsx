import React from "react";
import { Calendar, CalendarProps } from "primereact/calendar";
import Label from "components/Label/Label";

interface ICalenderProps extends CalendarProps {
  label?: string;
  hideLabel?: boolean;
}

function DatePicker(props: ICalenderProps) {
  const dateTemplate = (date: any) => {
    if (date.day > 10 && date.day < 15) {
      return <strong style={{ textDecoration: "line-through" }}>{date.day}</strong>;
    }
    return date.day;
  };
  const { label, value, hideLabel, onChange } = props;
  return (
    <div className="">
      <Label label={label} hideLabel={hideLabel} />
      <Calendar
        className="w-full text-inputFontSize  bg-white border border-inputBorderColor text-inputTextColor outline-none focus:border-inputFocusColor hover:border-inputHoverColor 
        h-inputHeight  px-inputPaddingH rounded-inputBorderRadius "
        inputClassName={`focus:outline-none`}
        id="datetemplate"
        value={value}
        onChange={onChange}
        showTime
        showSeconds
        hourFormat="12"
        dateFormat="dd/mm/yy"
        // dateTemplate={dateTemplate}
        showIcon
        panelClassName={"bg-white shadow-md "}
      />
    </div>
  );
}

export default DatePicker;
