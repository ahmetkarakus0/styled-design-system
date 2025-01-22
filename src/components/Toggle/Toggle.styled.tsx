import styled from "styled-components";
import { colors } from "../../theme";
import { ToggleProps } from "./Toggle.types";

export const StyledToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledToggle = styled.input.attrs({
  type: "checkbox",
})<ToggleProps>`
  ${({ color }) => ({
    width: 48,
    height: 24,
    borderRadius: 12,
    appearance: "none",
    border: "2px solid",
    borderColor: color ? colors[color][500] : colors.primary[500],
    cursor: "pointer",
    backgroundColor: "white",
    position: "relative",
    transition: "all .2s ease-in-out",

    "&:checked": {
      backgroundColor: color ? colors[color][500] : colors.primary[500],
    },

    "&::before": {
      content: '""',
      position: "absolute",
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: color ? colors[color][500] : colors.primary[500],
      top: "50%",
      left: 1,
      transform: "translateY(-50%)",
      transition: "all .2s ease-in-out",
    },

    "&:checked::before": {
      left: `calc(100% - 20px)`,
      backgroundColor: "white",
    },
  })}
`;

export const StyledToggleLabel = styled.label`
  cursor: pointer;
`;
