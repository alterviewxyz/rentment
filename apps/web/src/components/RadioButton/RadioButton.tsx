import React from "react";
import "./RadioButton.css";

export interface RadioButtonProps {
  /** Label for the radio button */
  label: string;
  /** Whether the radio button is selected */
  selected: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Callback when the radio button is selected */
  onChange: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  selected,
  disabled = false,
  onChange,
}) => {
  return (
    <label
      className={`radio-button ${disabled ? "radio-button--disabled" : ""}`}
    >
      <input
        type="radio"
        className="radio-button__input"
        checked={selected}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="radio-button__custom" />
      <span className="radio-button__label">{label}</span>
    </label>
  );
};

export { RadioButton };
