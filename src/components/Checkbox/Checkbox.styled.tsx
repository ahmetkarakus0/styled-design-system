import styled from "styled-components";
import { colors } from "../../theme";
import { CheckboxProps } from "./Checkbox.types";

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})<CheckboxProps>`
  ${({ color }) => ({
    width: 24,
    height: 24,
    borderRadius: 8,
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

export const StyledCheckboxLabel = styled.label`
  cursor: pointer;
`;
