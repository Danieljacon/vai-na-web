import "./styles.scss";
import Logo from "../../assets/icons/logo-blue.png";
import { MenuItem } from "./types";
import { Button } from "../Button";
import { useCallback, useEffect, useState } from "react";

export const Header: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const [showMenu, setShowMenu] = useState<boolean>(
    windowSize > 768 ? true : false
  );

  const menu: MenuItem[] = [
    { label: "Sobre" },
    { label: "Benefícios" },
    { label: "Contato" },
    { label: "Agendar", variant: "contained" },
  ];

  const handleWindowResize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <header className="header">
      <div className="container">
        <div className="container-content">
          <img
            className="logo"
            src={Logo}
            alt="Logo da Gudi escrito 'O bom da vida é viver'"
          />

          <ul className={showMenu ? "" : "visually-hidden"}>
            {menu.map((item) => (
              <li key={item.label}>
                <Button text={item.label} variant={item.variant} />
              </li>
            ))}
          </ul>

          <Button
            text={showMenu ? "Fechar" : "Menu"}
            className={windowSize > 768 ? "visually-hidden" : ""}
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
            variant="outlined"
          />
        </div>
      </div>
    </header>
  );
};
