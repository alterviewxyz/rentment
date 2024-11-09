import React from "react";
import "./Checkbox.css";

export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {}

const Checkbox = ({ ...props }: CheckboxProps) => {
  const classNames = [];
  return <div className={classNames.join(" ")} {...props}></div>;
};

export { Checkbox };
