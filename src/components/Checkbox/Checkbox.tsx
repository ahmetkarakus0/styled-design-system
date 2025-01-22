import { FC, HTMLAttributes, useRef } from "react";
import {
  StyledCheckbox,
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
} from "./Checkbox.styled";
import { CheckboxProps } from "./Checkbox.types";

const Checkbox: FC<CheckboxProps & HTMLAttributes<HTMLInputElement>> = ({
  color,
  label,
  ...rest
}) => {
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  return (
    <StyledCheckboxWrapper>
      <StyledCheckbox ref={checkboxRef} color={color} {...rest} />
      {label && (
        <StyledCheckboxLabel
          onClick={() => {
            checkboxRef.current?.click();
          }}
        >
          {label}
        </StyledCheckboxLabel>
      )}
    </StyledCheckboxWrapper>
  );
};

export default Checkbox;
