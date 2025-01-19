import { FC, HTMLAttributes } from "react";
import { StyledCheckbox } from "./Checkbox.styled";
import { CheckboxProps } from "./Checkbox.types";

const Checkbox: FC<CheckboxProps & HTMLAttributes<HTMLInputElement>> = ({
  color,
  ...rest
}) => {
  return <StyledCheckbox color={color} {...rest} />;
};

export default Checkbox;
