import React from "react";
import "./CardBase.css";

export interface CardBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardBase = ({ ...props }: CardBaseProps) => {
  const classNames = [];
  return <div className={classNames.join(" ")} {...props}></div>;
};

export { CardBase };
