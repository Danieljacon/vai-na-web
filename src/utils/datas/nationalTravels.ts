import { NationalTravelProps } from "../../components/NationalTravel/types";
import caminhoBg from "../../assets/images/caminho-bg.png";
import montanhaBg from "../../assets/images/montanha-bg.png";
import beachBg from "../../assets/images/beach-bg.png";

export const nationalTravelsData: NationalTravelProps[] = [
  {
    image: caminhoBg,
    alt: "Um homem e uma mulher sentados ao topo de um prédio",
    title: "O clima perfeito, no lugar perfeito",
    description:
      "Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.",
    colorScheme: "primary",
  },
  {
    image: montanhaBg,
    alt: "Quatro amigos em uma montanha conversando",
    title: "Curta uma nova vibe entre amigos",
    description:
      "Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi..",
    colorScheme: "color-white",
    position: "reverse",
  },
  {
    image: beachBg,
    alt: "Várias pessoas no meio da água formando um círculo",
    title: "Algumas experiências são inexplicáveis",
    description:
      "Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural.",
    colorScheme: "primary",
  },
];
