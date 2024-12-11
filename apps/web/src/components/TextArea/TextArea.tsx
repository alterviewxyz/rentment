import React from "react";
import "./TextArea.css";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Placeholder text for the TextArea */
  placeholder?: string;
  /** Maximum character limit */
  maxLength?: number;
  /** Current value of the TextArea */
  value: string;
  /** Change handler */
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({
  placeholder = "نگهدارنده پیش فرض",
  maxLength = 20,
  value,
  onChange,
  ...props
}: TextAreaProps) => {
  return (
    <div className="textarea-container">
      <textarea
        className="textarea"
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        {...props}
      />
      <div className="textarea-footer">
        <span>{value.length}</span>/<span>{maxLength}</span>
      </div>
    </div>
  );
};

export { TextArea };
