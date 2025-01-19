import styled from "styled-components";
import { colors } from "../../theme";
import { InputProps } from "./Input.types";

export const StyledInput = styled.input<InputProps>`
  ${({ color, filled }) => ({
    border: `1px solid ${colors.grey[200]}`,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "transparent",

    "&:focus": {
      borderColor: colors.grey[300],
    },

    transition: "all .1s ease-in-out",

    ...(color && {
      borderColor: colors[color][200],
      "&:focus": {
        borderColor: colors[color][300],
      },
    }),

    ...(filled && {
      backgroundColor: colors.grey[50],

      ...(color && {
        backgroundColor: colors[color][50],
      }),
    }),
  })}
`;
