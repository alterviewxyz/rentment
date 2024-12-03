import React, { useState } from "react";
import "./TextInput.css";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  placeholder?: string;
  value?: string;
  errorText?: string;
  helperText?: string;
  required?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClear?: () => void;
}

const TextInput = ({
  label,
  type = "text",
  placeholder = "",
  value = "",
  errorText = "",
  helperText = "",
  required = false,
  iconLeft = null,
  iconRight = null,
  onClear,
  ...props
}: TextInputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  const handleClear = () => {
    setInputValue("");
    if (onClear) onClear();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const renderRightIcon = () => {
    if (type === "password") {
      return (
        <button
          type="button"
          className="toggle-password-visibility"
          onClick={togglePasswordVisibility}
          aria-label={isPasswordVisible ? "Hide password" : "Show password"}
        >
          {isPasswordVisible ? "🙈" : "👀"}
        </button>
      );
    }
    if (iconRight) {
      return <span className="icon-right">{iconRight}</span>;
    }
    return null;
  };

  return (
    <div className={`text-input ${errorText ? "error" : ""}`}>
      <label className="text-input-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <div className="text-input-wrapper">
        {iconLeft && <span className="icon-left">{iconLeft}</span>}
        <input
          type={isPasswordVisible && type === "password" ? "text" : type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          className="text-input-field"
          {...props}
        />
        {inputValue && onClear && (
          <button type="button" className="clear-button" onClick={handleClear}>
            ✕
          </button>
        )}
        {renderRightIcon()}
      </div>
      {errorText && <div className="error-text">{errorText}</div>}
      {helperText && !errorText && (
        <div className="helper-text">{helperText}</div>
      )}
    </div>
  );
};

export { TextInput };
