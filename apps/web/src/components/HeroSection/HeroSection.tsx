import React from "react";
import "./HeroSection.css";

export interface HeroSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const HeroSection = ({ ...props }: HeroSectionProps) => {
  const classNames = [];
  return <div className={classNames.join(" ")} {...props}></div>;
};

export { HeroSection };
