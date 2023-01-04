import kidBg from "../../assets/images/kids-bg.png";
import daddyBg from "../../assets/images/daddy-baby-bg.png";
import menDogBg from "../../assets/images/men-dog-bg.png";
import menSelfieBg from "../../assets/images/men-selfie-bg.png";
import womenelfieBg from "../../assets/images/woman-selfie-bg.png";
import famillySelfie from "../../assets/images/familly-selfie-bg.png";

export interface ExperienceGallery {
  image: string;
  alt: string;
}

export const ExperienceGallery: ExperienceGallery[] = [
  {
    image: daddyBg,
    alt: "Pai brincando de jogar a criança",
  },
  {
    image: kidBg,
    alt: "Crianças pulando na praia",
  },
  {
    image: menDogBg,
    alt: "Homem brincando com o cachorro",
  },
  {
    image: menSelfieBg,
    alt: "Homem tirando selfie",
  },
  {
    image: womenelfieBg,
    alt: "Mulher tirando selfie",
  },
  {
    image: famillySelfie,
    alt: "Família tirando selfie",
  },
];
