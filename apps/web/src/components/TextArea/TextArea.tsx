import React from "react";
import "./TextArea.css";

export interface TextAreaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {}

const TextArea = ({ ...props }: TextAreaProps) => {
  const classNames = ["textarea"];
  return <textarea className={classNames.join(" ")} {...props}></textarea>;
};

export { TextArea };
