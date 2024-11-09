import React from "react";
import "./Logo.css";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logo = ({ ...props }: LogoProps) => {
  const classNames = [];
  return <div className={classNames.join(" ")} {...props}></div>;
};

export { Logo };
