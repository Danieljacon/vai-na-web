export interface ButtonProps {
  text: string;
  variant?: "text" | "outlined" | "contained" | "blured";
  onClick?: () => void;
  className?: string;
  colorScheme?: "primary" | "color-white";
}
