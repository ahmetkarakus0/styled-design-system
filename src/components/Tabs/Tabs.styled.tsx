import styled from "styled-components";
import { colors } from "../../theme";

export const StyledTabs = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  overflow-x: auto;
  justify-content: center;
  align-items: center;
`;

export const StyledTabItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
  ${({ active = false }) => ({
    padding: "8px 24px",
    backgroundColor: active ? colors.primary[500] : "transparent",
    color: active ? "white" : colors.primary[500],
    borderRadius: 9999,
    fontWeight: 600,
    fontSize: 14,

    cursor: "pointer",

    transition: "all .1s ease-in-out",

    "&:hover": {
      ...(!active && {
        backgroundColor: colors.primary[50],
      }),
    },
  })}
`;
