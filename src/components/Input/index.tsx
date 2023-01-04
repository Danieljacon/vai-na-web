import React from "react";
import "./styles.scss";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({ type = "text", placeholder }) => {
  return <input className="input" type={type} placeholder={placeholder} />;
};
