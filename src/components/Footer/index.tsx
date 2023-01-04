import React from "react";
import { footerItems } from "../../utils/datas/footer";
import { Button } from "../Button";
import "./styles.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer container-content">
      {footerItems.map((item) => {
        return (
          <ul>
            <li>
              <p>{item.title}</p>
            </li>
            {item.logo && (
              <li>
                <img
                  className="logo"
                  src={item.logo}
                  alt="Logo da Gudi escrito 'O bom da vida é viver'"
                />
              </li>
            )}
            {item.items.map((item) => (
              <li>
                <Button text={item} />
              </li>
            ))}
          </ul>
        );
      })}
    </footer>
  );
};
