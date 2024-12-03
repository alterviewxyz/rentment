import React from "react";
import "./HelperText.css";

export interface HelperTextProps {
  /** Text to display */
  text: string;
  /** Variant of the helper text */
  variant?: "info" | "error";
  /** Optional icon */
  icon?: React.ReactNode;
  /** Whether the text is disabled */
  disabled?: boolean;
}

const HelperText: React.FC<HelperTextProps> = ({
  text,
  variant = "info",
  icon = null,
  disabled = false,
}) => {
  const classNames = [
    "helper-text",
    `helper-text--${variant}`,
    disabled ? "helper-text--disabled" : "",
  ].join(" ");

  return (
    <div className={classNames}>
      {icon && <span className="helper-text__icon">{icon}</span>}
      <span className="helper-text__text">{text}</span>
    </div>
  );
};

export { HelperText };
