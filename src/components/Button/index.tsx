import React from "react";
import { ButtonProps } from "./types";
import "./styles.scss";

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = "text",
  className,
  onClick,
}) => {
  return (
    <input
      type="button"
      className={`btn btn-${variant} ${className}`}
      value={text}
      onClick={onClick}
    />
  );
};
