import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NationalTravel } from "../../components/NationalTravel";
import { Card } from "../../components/Card";
import { nationalTravelsData } from "../../utils/datas/nationalTravels";
import { cards } from "../../utils/datas/card";
import { ExperienceGallery } from "../../utils/datas/experienceGallery";
import { AdvantagesData } from "../../utils/datas/advantages";
import { Advantages } from "../../components/Advantages";

import Logo from "../../assets/icons/logo-blue.png";

import "./styles.scss";
import { footerItems } from "../../utils/datas/footer";
import { Footer } from "../../components/Footer";

export const Home: React.FC = () => {
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

        <section className="section-1">
          {nationalTravelsData.map((travel) => (
            <NationalTravel {...travel} />
          ))}
        </section>

        <section className="section-2">
          {cards.map((card) => (
            <Card {...card} />
          ))}
        </section>

        <section className="section-3">
          <div>
            <p>use a hashtag #brasilisverigudi</p>
            <h3>Nosso mural de Experiências</h3>
          </div>
          <div className="cards">
            {ExperienceGallery.map((photo) => (
              <img src={photo.image} alt={photo.alt} />
            ))}
          </div>
        </section>

        <section className="section-4">
          {AdvantagesData.map((advantage) => (
            <Advantages {...advantage} />
          ))}
        </section>

        <section className="section-5">
          <h3>Fale conosco</h3>
          <form>
            <Input type="text" placeholder="Qual o seu melhor email" />
            <Input type="text" placeholder="Assunto" />
            <Input type="text" placeholder="Mensagem" textArea />
            <Button
              text="Enviar"
              variant="outlined"
              colorScheme="color-white"
            />
          </form>
        </section>
        <Footer />
      </div>
    </>
  );
};
