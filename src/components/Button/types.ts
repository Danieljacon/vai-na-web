export interface ButtonProps {
  text: string;
  variant?: "text" | "outlined" | "contained";
  onClick?: () => void;
  className?: string;
  colorScheme?: "primary" | "color-white";
}
