import React from "react";
import "./RadioButton.css";

export interface RadioButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const RadioButton = ({ ...props }: RadioButtonProps) => {
  const classNames = [];
  return <div className={classNames.join(" ")} {...props}></div>;
};

export { RadioButton };
