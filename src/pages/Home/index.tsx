import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NationalTravel } from "../../components/NationalTravel";
import camingoBg from "../../assets/images/caminho-bg.png";
import montanhaBg from "../../assets/images/montanha-bg.png";
import "./styles.scss";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <main className="main-section">
          <div className="container-content">
            <div>
              <h1>Para qual estado você deseja ir?</h1>
              <Input type="text" placeholder="Pesquisar" />
              <Button text="buscar" variant="contained" />
            </div>
          </div>
        </main>

        <section>
          <NationalTravel
            image={camingoBg}
            alt="Um homem e uma mulher sentados ao topo de um prédio"
            title="O clima perfeito, no lugar perfeito"
            description="Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço."
            colorScheme="primary"
          />
          <NationalTravel
            image={montanhaBg}
            alt="Quatro amigos em uma montanha conversando"
            title="Curta uma nova vibe entre amigos"
            description="Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi.."
            colorScheme="color-white"
            position="reverse"
          />
          <NationalTravel
            image={camingoBg}
            alt="Várias pessoas no meio da água formando um círculo"
            title="Algumas experiências são inexplicáveis"
            description="Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural."
            colorScheme="primary"
          />
        </section>
      </div>
    </>
  );
};
