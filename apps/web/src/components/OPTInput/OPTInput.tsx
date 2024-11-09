import React from "react";
import "./OPTInput.css";

export interface OPTInputProps extends React.HTMLAttributes<HTMLDivElement> {}

const OPTInput = ({ ...props }: OPTInputProps) => {
  const classNames = [];
  return <div className={classNames.join(" ")} {...props}></div>;
};

export { OPTInput };
