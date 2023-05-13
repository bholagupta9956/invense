import ButtonBox, { BUTTONS } from "components/ButtonBox/ButtonBox";
import Card from "components/Card/Card";
import IconButton from "components/IconButton/IconButton";
import InputBox from "components/InputBox/InputBox";
import InputCheckBox from "components/InputCheckBox/InputCheckBox";
import InputDropDown from "components/InputDropDown/InputDropDown";
import InputRadioBox from "components/InputRadioBox/InputRadioBox";
import InputTextareaBox from "components/InputTextareaBox/InputTextareaBox";
import React, { Component } from "react";

const citySelectItems = [
  { label: "New York", value: "NY" },
  { label: "Rome", value: "RM" },
  { label: "London", value: "LDN" },
  { label: "Istanbul", value: "IST" },
  { label: "Paris", value: "PRS" },
];
class Inputs extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="w-full flex flex-row justify-end ">
          <div>
            <ButtonBox label="Save" buttonType={BUTTONS.SAVE} />
          </div>
          <div className="ml-2">
            <ButtonBox label="Cancel" buttonType={BUTTONS.CANCEL} />
          </div>
        </div>
        <Card className="mt-4">
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-1 gap-x-6 justify-start align-top items-start h-full">
            <div className="page">
              <InputBox label="User Name" />
            </div>
            <div>
              <InputTextareaBox label="Address" />
            </div>
            <div>
              <InputDropDown label="Select City" options={citySelectItems} />
            </div>
            <div>
              <InputCheckBox checked={true} label="Check" />
            </div>
            <div>
              <InputRadioBox checked={true} label="Select" />
            </div>

            <div>
              <IconButton buttonType="Edit" icon="pi pi-check" />
              <IconButton
                buttonType="Delete"
                icon="pi pi-spin pi-sun"
                className="text-inputErrorColor border-inputErrorColor"
              />
            </div>
          </div>
        </Card>
        <div className="flex flex-row">
          <div className="mr-2 w-1/2">
            <Card className="mt-4">
              <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-1 gap-x-6 justify-start align-top items-start h-full">
                <div className="page">
                  <InputBox label="User Name" />
                </div>
                <div>
                  <InputTextareaBox label="Address" />
                </div>
                <div>
                  <InputDropDown label="Select City" options={citySelectItems} />
                </div>
                <div>
                  <InputCheckBox checked={true} label="Check" />
                </div>
                <div>
                  <InputRadioBox checked={true} label="Select" />
                </div>

                <div>
                  <IconButton buttonType="Edit" icon="pi pi-check" />
                  <IconButton
                    buttonType="Delete"
                    icon="pi pi-spin pi-sun"
                    className="text-inputErrorColor border-inputErrorColor"
                  />
                </div>
              </div>
            </Card>
          </div>
          <div className="w-1/2">
            <Card className="mt-4">
              <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-1 gap-x-6 justify-start align-top items-start h-full">
                <div className="page">
                  <InputBox label="User Name" />
                </div>
                <div>
                  <InputTextareaBox label="Address" />
                </div>
                <div>
                  <InputDropDown label="Select City" options={citySelectItems} />
                </div>
                <div>
                  <InputCheckBox checked={true} label="Check" />
                </div>
                <div>
                  <InputRadioBox checked={true} label="Select" />
                </div>

                <div>
                  <IconButton buttonType="Edit" icon="pi pi-check" />
                  <IconButton
                    buttonType="Delete"
                    icon="pi pi-spin pi-sun"
                    className="text-inputErrorColor border-inputErrorColor"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
        <Card className="mt-4">
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-1 gap-x-6 justify-start align-top items-start h-full">
            <div className="page">
              <InputBox label="User Name" />
            </div>
            <div>
              <InputTextareaBox label="Address" />
            </div>
            <div>
              <InputDropDown label="Select City" options={citySelectItems} />
            </div>
            <div>
              <InputCheckBox checked={true} label="Check" />
            </div>
            <div>
              <InputRadioBox checked={true} label="Select" />
            </div>

            <div>
              <IconButton buttonType="Edit" icon="pi pi-check" />
              <IconButton
                buttonType="Delete"
                icon="pi pi-spin pi-sun"
                className="text-inputErrorColor border-inputErrorColor"
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Inputs;
