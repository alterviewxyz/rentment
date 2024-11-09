import React from "react";
import "./Footer.css";

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Footer = ({ ...props }: FooterProps) => {
  const classNames = [];
  return <Footer className={classNames.join(" ")} {...props}></Footer>;
};

export { Footer };
