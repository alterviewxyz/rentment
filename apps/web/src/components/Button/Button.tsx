import React from "react";
import "./Button.css";

const Button = ({
  text = "متن دکمه",
  icon = null,
  variant = "solid", // solid, outline, text
  color = "primary", // primary, secondary, black, white
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`button ${variant} ${color} ${disabled ? "disabled" : ""}`}
      disabled={disabled}
    >
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
