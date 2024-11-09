import React from "react";
import "./FilterAccordion.css";

export interface FilterAccordionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const FilterAccordion = ({ ...props }: FilterAccordionProps) => {
  const classNames = [];
  return (
    <FilterAccordion
      className={classNames.join(" ")}
      {...props}
    ></FilterAccordion>
  );
};

export { FilterAccordion };
