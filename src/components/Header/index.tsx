import "./styles.scss";
import Logo from "../../assets/icons/logo-blue.png";
import { Button } from "../Button";
import { useState } from "react";
import { menuItems } from "../../utils/datas/menuItems";

export const Header: React.FC = () => {
  const windowSize = window.innerWidth;
  const [showMenu, setShowMenu] = useState<boolean>(
    windowSize > 768 ? true : false
  );

  return (
    <header className="header">
      <div className="container">
        <div className="container-content">
          <div className="logo">
            <img
              className="logo"
              src={Logo}
              alt="Logo da Gudi escrito 'O bom da vida é viver'"
            />
            <Button
              text={showMenu ? "Fechar" : "Menu"}
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
              className="menu-button"
              variant="outlined"
            />
          </div>

          <ul className={showMenu ? "" : "visually-hidden"}>
            {menuItems.map((item) => (
              <li key={item.label}>
                <Button text={item.label} variant={item.variant} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
