import React from "react";
import { Header, HeaderProps } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./BaseWrapper.css";

export interface BaseWrapperProps {
  /** Header configuration */
  headerProps: HeaderProps;
  /** Main content of the page */
  children: React.ReactNode;
}

const BaseWrapper: React.FC<BaseWrapperProps> = ({ headerProps, children }) => {
  return (
    <div className="base-wrapper">
      <Header {...headerProps} />
      <main className="base-wrapper__content">{children}</main>
      <Footer />
    </div>
  );
};

export { BaseWrapper };
