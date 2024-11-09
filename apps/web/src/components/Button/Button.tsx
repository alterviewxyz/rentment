import React from "react";
import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "black" | "white";
  variant?: "solid" | "outline" | "text";
  icon?: React.ReactNode;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

const Button = ({
  label,
  icon = null,
  variant = "solid",
  color = "primary",
  size,
  disabled = false,
  ...props
}: ButtonProps) => {
  const classNames = [
    "button",
    size,
    variant,
    color,
    disabled ? "disabled" : "",
  ];
  return (
    <button className={classNames.join(" ")} disabled={disabled} {...props}>
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-text"> {label} </span>
    </button>
  );
};

export { Button };
