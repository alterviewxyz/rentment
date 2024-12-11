import React, { useState } from "react";
import { TextInput, TextInputProps } from "../Input/TextInput";
import "./SearchInput.css";

export interface SearchInputProps
  extends Omit<TextInputProps, "iconLeft" | "iconRight" | "onClear"> {
  /** Whether the input is clearable (displays a clear button) */
  clearable?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  clearable = false,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(props.value || "");

  const handleClear = () => {
    setInputValue("");
    if (props.onChange) {
      props.onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <TextInput
      {...props}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        if (props.onChange) props.onChange(e);
      }}
      iconRight={
        clearable && inputValue ? (
          <button
            type="button"
            className="search-input__clear-button"
            onClick={handleClear}
            aria-label="Clear input"
          >
            ✕
          </button>
        ) : (
          <span className="search-input__search-icon">🔍</span>
        )
      }
    />
  );
};

export { SearchInput };
