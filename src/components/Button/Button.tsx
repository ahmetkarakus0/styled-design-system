import { ButtonHTMLAttributes, FC } from "react";
import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  color,
  variant,
  ...props
}) => {
  return (
    <StyledButton color={color} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
