import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import "./styles.scss";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="container-content main-section">
        <div>
          <h1>Para qual estado você deseja ir?</h1>
          <input type="text" placeholder="Pesquisar" />
          <Button text="buscar" variant="contained" />
        </div>
      </main>
    </>
  );
};
