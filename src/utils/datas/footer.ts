import Logo from "../../assets/icons/logo-blue.png";

export interface FooterItem {
  title?: string;
  items: string[];
  logo?: string;
}

export const footerItems: FooterItem[] = [
  {
    logo: Logo,
    items: ["Sobre nós", "Mural de memórias", "Eventos Gudi", "Nosso blog"],
  },
  {
    title: "Contato",
    items: ["Chat Virtual", "Sac Online", "Ouvidoria", "Faq"],
  },
  {
    title: "Beneficios",
    items: ["Conta digital Gudi", "Viaje com Milhas", "C6 Átomos", "iD Jovem"],
  },
  {
    title: "Lugares",
    items: [
      "O melhor do Brasil",
      "Cidades frequentes",
      "Pontos turísticos",
      "Restaurantes",
    ],
  },
  {
    title: "Curiosidades",
    items: [
      "Cultura e tradições",
      "Pratos típicos",
      "Mitos brasileiros",
      "Carnaval",
    ],
  },
];
