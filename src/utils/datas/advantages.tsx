import { ReactComponent as BestBrazil } from "../../assets/icons/best-brazil.svg";
import { ReactComponent as Coconut } from "../../assets/icons/coconut.svg";
import { ReactComponent as Paradise } from "../../assets/icons/paradise.svg";
import { ReactComponent as Restaurant } from "../../assets/icons/restaurant.svg";
import { AdvantagesProps } from "../../components/Advantages/types";

export const AdvantagesData: AdvantagesProps[] = [
  { icon: <BestBrazil />, description: "O melhor do Brasil" },
  { icon: <Paradise />, description: "Cidades mais frequentadas" },
  { icon: <Coconut />, description: "Cidades mais frequentadas" },
  { icon: <Restaurant />, description: "Restaurantes" },
];
