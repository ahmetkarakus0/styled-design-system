import styled from "styled-components";
import { colors } from "../../theme";
import { RadioButtonProps } from "./RadioButton.types";

export const StyledRadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledRadioButton = styled.input.attrs({
  type: "radio",
})<RadioButtonProps>`
  ${({ color }) => ({
    width: 24,
    height: 24,
    borderRadius: 9999,
    appearance: "none",
    border: "2px solid",
    borderColor: color ? colors[color][500] : colors.primary[500],
    cursor: "pointer",
    backgroundColor: "white",

    transition: "all .1s ease-in-out",

    "&:hover": {
      backgroundColor: color ? colors[color][50] : colors.primary[50],
    },

    "&:checked": {
      backgroundColor: color ? colors[color][500] : colors.primary[500],
    },
  })}
`;

export const StyledRadioButtonLabel = styled.label`
  cursor: pointer;
`;
