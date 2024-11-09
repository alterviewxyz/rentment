import React from "react";
import "./Input.css";

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {}

const Input = ({ ...props }: InputProps) => {
  const classNames = [];
  return <div className={classNames.join(" ")} {...props}></div>;
};

export { Input };
