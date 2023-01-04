import React from "react";
import { Button } from "../Button";
import { CardProps } from "./types";
import "./styles.scss";

export const Card: React.FC<CardProps> = ({ image, alt }) => {
  return (
    <div className="card">
      <Button text="Ver mais" variant="blured" colorScheme="color-white" />
      <img src={image} alt={alt} />
    </div>
  );
};
