import styled from "styled-components";
import { colors } from "../../theme";
import { StyledSelectProps } from "./Select.types";

export const StyledSelectButton = styled.button<StyledSelectProps>`
  ${({ color, filled }) => ({
    width: "100%",
    border: `1px solid ${colors.grey[200]}`,
    padding: 12,
    borderRadius: 12,
    backgroundColor: filled ? colors.grey[50] : "transparent",
    color: colors.grey[900],
    textAlign: "left",
    cursor: "pointer",
    transition: "all .1s ease-in-out",

    ...(color && {
      borderColor: colors[color][200],
      backgroundColor: filled ? colors[color][50] : "transparent",
    }),
  })}
`;

export const StyledDropdown = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid ${colors.grey[200]};
  border-radius: 12px;
  background-color: ${colors.grey[50]};
  margin-top: 8px;
  overflow: hidden;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 10;
`;

export const StyledOption = styled.div<StyledSelectProps>`
  padding: 12px;
  color: ${colors.grey[900]};
  cursor: pointer;
  transition: "all .1s ease-in-out";

  &:hover {
    background-color: ${colors.grey[100]};
  }

  ${({ color }) =>
    color && {
      "&:hover": {
        backgroundColor: colors[color][100],
      },
    }}
`;
