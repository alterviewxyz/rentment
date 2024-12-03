import React, { useState, useRef, useEffect } from "react";
import "./DropDown.css";

export interface DropDownProps {
  /** Options to display in the dropdown */
  options?: { id: number; label: string }[];
  /** Placeholder text for the dropdown */
  placeholder?: string;
  /** Selected options (array for multi-select) */
  value: { id: number; label: string }[];
  /** Handler when the selection changes */
  onChange: (selected: { id: number; label: string }[]) => void;
  /** Error state */
  error?: boolean;
  /** Enable multi-select */
  multi?: boolean;
}

const DropDown: React.FC<DropDownProps> = ({
  options = [],
  placeholder = "انتخاب کنید",
  value,
  onChange,
  error = false,
  multi = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filtered options based on the query
  const filteredOptions =
    options?.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase()),
    ) || [];

  // Handle click outside dropdown
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleOptionSelect = (option: { id: number; label: string }) => {
    if (multi) {
      const alreadySelected = value.some(
        (selected) => selected.id === option.id,
      );
      const newSelection = alreadySelected
        ? value.filter((selected) => selected.id !== option.id) // Remove if already selected
        : [...value, option]; // Add if not selected
      onChange(newSelection);
    } else {
      onChange([option]); // Single selection
      setIsOpen(false);
    }
  };

  const isSelected = (option: { id: number; label: string }) =>
    value.some((selected) => selected.id === option.id);

  return (
    <div
      className={`dropdown ${error ? "dropdown--error" : ""}`}
      ref={dropdownRef}
    >
      <div
        className="dropdown__control"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <input
          type="text"
          className="dropdown__input"
          placeholder={placeholder}
          value={
            multi ? value.map((v) => v.label).join(", ") : value[0]?.label || ""
          }
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          readOnly={!multi} // Make input readonly for multi-select
        />
        <button className="dropdown__button" type="button">
          {isOpen ? "⌃" : "⌄"}
        </button>
      </div>
      {isOpen && (
        <ul className="dropdown__options">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option.id}
                className={`dropdown__option ${
                  isSelected(option) ? "dropdown__option--selected" : ""
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {multi && (
                  <input
                    type="checkbox"
                    checked={isSelected(option)}
                    readOnly
                  />
                )}
                {option.label}
              </li>
            ))
          ) : (
            <li className="dropdown__empty">هیچ موردی پیدا نشد</li>
          )}
        </ul>
      )}
    </div>
  );
};

export { DropDown };
