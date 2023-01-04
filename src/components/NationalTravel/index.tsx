import React from "react";
import { Button } from "../Button";
import "./styles.scss";
import { NationalTravelProps } from "./types";

export const NationalTravel: React.FC<NationalTravelProps> = ({
  title,
  description,
  alt,
  image,
  colorScheme,
  position = "normal",
}) => {
  return (
    <div className={`national-travel ${colorScheme}`}>
      {position === "normal" && <img src={image} alt={alt} />}
      <div>
        <span>
          <div className="line"></div>
          <small>viagens nacionais</small>
        </span>
        <h3>{title}</h3>
        <p className="hide-text">{description}</p>
        <Button
          text="agendar"
          variant="outlined"
          colorScheme={colorScheme === "primary" ? "color-white" : "primary"}
        />
      </div>
      {position === "reverse" && <img src={image} alt={alt} />}
    </div>
  );
};
