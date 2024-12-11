import React from "react";
import "./Checkbox.css";

export interface CheckboxProps {
  /** Label for the checkbox */
  label: string;
  /** Whether the checkbox is checked */
  checked: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Callback when the checkbox is toggled */
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  disabled = false,
  onChange,
}) => {
  return (
    <label className={`checkbox ${disabled ? "checkbox--disabled" : ""}`}>
      <input
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className="checkbox__custom" />
      <span className="checkbox__label">{label}</span>
    </label>
  );
};

export { Checkbox };
