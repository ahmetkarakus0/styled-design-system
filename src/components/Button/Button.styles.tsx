import styled from "styled-components";
import colors from "../../theme/colors";
import { ButtonProps } from "./Button.types";

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["variant", "color"].includes(prop),
})<ButtonProps>`
  ${({ variant, color, disabled }) => ({
    padding: "12px 24px",
    borderRadius: "12px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.1s ease-in-out",
    border: "none",
    backgroundColor: color ? colors[color][500] : colors.primary[500],
    color: "white",
    "&:hover": {
      backgroundColor: color ? colors[color][700] : colors.primary[700],
    },
    "&:active": {
      backgroundColor: color ? colors[color][800] : colors.primary[800],
    },
    ...(variant === "outlined" && {
      border: `1px solid ${colors.primary[500]}`,
      backgroundColor: "transparent",
      color: colors.primary[500],
      "&:hover": {
        backgroundColor: colors.primary[50],
      },
      "&:active": {
        backgroundColor: colors.primary[100],
      },
    }),
    ...(variant === "text" && {
      backgroundColor: "transparent",
      color: colors.primary[500],
      "&:hover": {
        backgroundColor: colors.primary[50],
      },
      "&:active": {
        backgroundColor: colors.primary[100],
      },
    }),
    ...(disabled && {
      cursor: "not-allowed",
      pointerEvents: "none",
      ...((variant === "filled" || variant === undefined) && {
        backgroundColor: colors.grey[200],
        color: colors.grey[400],
      }),
      ...(variant === "outlined" && {
        border: `1px solid ${colors.grey[200]}`,
        color: colors.grey[400],
      }),
      ...(variant === "text" && {
        color: colors.grey[400],
      }),
    }),
  })}
`;
