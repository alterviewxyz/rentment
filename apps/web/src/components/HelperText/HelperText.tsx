import React from "react";
import "./HelperText.css";

export interface HelperTextProps extends React.HTMLAttributes<HTMLDivElement> {}

const HelperText = ({ ...props }: HelperTextProps) => {
  const classNames = [];
  return <div className={classNames.join(" ")} {...props}></div>;
};

export { HelperText };
