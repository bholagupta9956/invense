import React from "react";
import { Button, ButtonProps } from "primereact/button";

type ButtonTypes = "Edit" | "Delete";

interface IButtonProps extends ButtonProps {
  buttonType?: ButtonTypes;
}

function IconButton(props: IButtonProps) {
  const { icon, className, type } = props;

  const generateClassName = () => {};
  return (
    <>
      <Button icon={icon} className={`${className}`} />
    </>
  );
}

export default IconButton;
