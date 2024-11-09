import React from "react";
import "./DropDown.css";

export interface DropDownProps extends React.HTMLAttributes<HTMLDivElement> {}

const DropDown = ({ ...props }: DropDownProps) => {
  const classNames = [];
  return <div className={classNames.join(" ")} {...props}></div>;
};

export { DropDown };
