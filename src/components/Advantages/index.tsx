import { AdvantagesProps } from "./types";
import "./styles.scss";

export const Advantages: React.FC<AdvantagesProps> = ({
  icon,
  description,
}) => {
  return (
    <div className="advantages">
      {icon}
      <p>{description}</p>
    </div>
  );
};
