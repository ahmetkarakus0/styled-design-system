import { FC, InputHTMLAttributes, useRef } from "react";
import {
  StyledRadioButton,
  StyledRadioButtonLabel,
  StyledRadioButtonWrapper,
} from "./RadioButton.styled";
import { RadioButtonProps } from "./RadioButton.types";

const RadioButton: FC<
  RadioButtonProps & InputHTMLAttributes<HTMLInputElement>
> = ({ color, label, ...rest }) => {
  const radioButtonRef = useRef<HTMLInputElement | null>(null);

  return (
    <StyledRadioButtonWrapper>
      <StyledRadioButton ref={radioButtonRef} color={color} {...rest} />
      {label && (
        <StyledRadioButtonLabel
          onClick={() => {
            radioButtonRef.current?.click();
          }}
        >
          {label}
        </StyledRadioButtonLabel>
      )}
    </StyledRadioButtonWrapper>
  );
};

export default RadioButton;
