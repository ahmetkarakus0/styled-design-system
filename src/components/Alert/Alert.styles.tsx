import styled from "styled-components";
import { AlertProps } from "./Alert.types";
import { colors } from "../../theme";

export const StyledAlert = styled.div<AlertProps>`
  ${({ color = "primary" }) => ({
    padding: "16px",
    borderRadius: "12px",
    backgroundColor: colors[color][500],
    color: "white",
  })}
`;
