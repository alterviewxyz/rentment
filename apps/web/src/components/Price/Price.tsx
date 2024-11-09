import React from "react";
import "./Price.css";

export interface PriceProps extends React.HTMLAttributes<HTMLDivElement> {}

const Price = ({ ...props }: PriceProps) => {
  const classNames = [];
  return <div className={classNames.join(" ")} {...props}></div>;
};

export { Price };
