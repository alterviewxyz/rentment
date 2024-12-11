import React, { useRef, useState } from "react";
import "./OPTInput.css";

export interface OPTInputProps {
  /** Number of input boxes */
  length: number;
  /** Callback function when all inputs are filled */
  onComplete: (code: string) => void;
  /** Error state for invalid input */
  error?: boolean;
}

const OPTInput: React.FC<OPTInputProps> = ({
  length,
  onComplete,
  error = false,
}) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Allow only digits
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newValues.every((val) => val !== "")) {
      onComplete(newValues.join(""));
    }
  };

  const handleBackspace = (value: string, index: number) => {
    if (!value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    if (!/^\d+$/.test(pasteData)) return;

    const newValues = pasteData.split("").slice(0, length);
    setValues(newValues);

    newValues.forEach((val, idx) => {
      if (inputRefs.current[idx]) {
        inputRefs.current[idx]!.value = val;
      }
    });

    if (newValues.length === length) {
      onComplete(newValues.join(""));
    }
  };

  return (
    <div className={`opt-input ${error ? "opt-input--error" : ""}`}>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength={1}
          value={values[index]}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => {
            if (e.key === "Backspace")
              handleBackspace(e.currentTarget.value, index);
          }}
          onPaste={handlePaste}
          className="opt-input__box"
        />
      ))}
    </div>
  );
};

export { OPTInput };
