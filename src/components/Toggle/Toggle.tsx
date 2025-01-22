import { FC, HTMLAttributes } from "react";
import {
  StyledToggleWrapper,
  StyledToggle,
  StyledToggleLabel,
} from "./Toggle.styled";
import { ToggleProps } from "./Toggle.types";

const Toggle: FC<ToggleProps & HTMLAttributes<HTMLInputElement>> = ({
  color,
  label,
  ...props
}) => {
  return (
    <StyledToggleWrapper>
      <StyledToggle color={color} {...props} />
      {label && <StyledToggleLabel>{label}</StyledToggleLabel>}
    </StyledToggleWrapper>
  );
};

export default Toggle;
