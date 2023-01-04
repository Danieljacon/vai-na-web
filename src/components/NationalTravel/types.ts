export interface NationalTravelProps {
  title: string;
  description: React.ReactNode;
  alt: string;
  image: string;
  colorScheme: "primary" | "color-white";
  position?: "normal" | "reverse";
}
