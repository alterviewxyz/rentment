import React from "react";

export interface LogoProps {
  /** Width of the logo */
  width?: number;
  /** Height of the logo */
  height?: number;
  /** Optional additional class names for styling */
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = "100%",
  height = "100%",
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      fill="none"
    >
      {/* Outer Circle */}
      <circle cx="100" cy="100" r="80" fill="#194BF0" />
      {/* Inner Circle */}
      <circle cx="100" cy="100" r="60" fill="#FDB713" />
      {/* Pointer */}
      <polygon points="100,40 110,80 90,80" fill="#194BF0" />
      {/* Text */}
      <text
        x="140"
        y="110"
        font-family="Estedad, sans-serif"
        font-size="24"
        fill="#fff"
        font-weight="bold"
        direction="rtl"
      >
        رنت‌منت
      </text>
    </svg>
  );
};

export { Logo };
