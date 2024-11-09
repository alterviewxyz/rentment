import React from "react";
import "./RangeSlider.css";

export interface RangeSliderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const RangeSlider = ({ ...props }: RangeSliderProps) => {
  const classNames = [];
  return <div className={classNames.join(" ")} {...props}></div>;
};

export { RangeSlider };
