import React from "react";
import "./StarRating.css";

export interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement> {}

const StarRating = ({ ...props }: StarRatingProps) => {
  const classNames = [];
  return <div className={classNames.join(" ")} {...props}></div>;
};

export { StarRating };
