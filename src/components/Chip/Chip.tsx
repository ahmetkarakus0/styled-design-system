import { FC } from "react";
import { StyledChip } from "./Chip.styled";
import { ChipProps } from "./Chip.types";

const Chip: FC<ChipProps> = ({ color, label, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledChip color={color} onClick={handleClick}>
      {label}
    </StyledChip>
  );
};

export default Chip;
