import React from "react";
import "./styles.scss";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  textArea = false,
}) => {
  return textArea ? (
    <textarea className="input" placeholder={placeholder} />
  ) : (
    <input className="input" type={type} placeholder={placeholder} />
  );
};
