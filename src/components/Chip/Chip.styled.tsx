import styled from "styled-components";
import { colors } from "../../theme";
import { ChipProps } from "./Chip.types";

export const StyledChip = styled.div<Omit<ChipProps, "label">>`
  ${({ color, onClick }) => ({
    padding: "8px 36px",
    backgroundColor: color ? colors[color][500] : colors.primary[500],
    color: "white",
    borderRadius: 12,

    cursor: onClick !== undefined ? "pointer" : "default",

    ...(onClick !== undefined && {
      "&:hover": {
        backgroundColor: color ? colors[color][700] : colors.primary[700],
      },
      "&:active": {
        backgroundColor: color ? colors[color][800] : colors.primary[800],
      },
    }),

    transition: "all .1s ease-in-out",
  })}
`;
