import React from "react";
import "./Filter.css";

export interface FilterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Filter = ({ ...props }: FilterProps) => {
  const classNames = [];
  return <div className={classNames.join(" ")} {...props}></div>;
};

export { Filter };
