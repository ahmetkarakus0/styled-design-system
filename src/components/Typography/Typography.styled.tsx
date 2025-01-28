import styled, { css } from "styled-components";
import { TypographyProps } from "./Typography.types";
import { colors } from "../../theme";

const variantStyles = {
  h1: css`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
  `,
  h2: css`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.3;
  `,
  h3: css`
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1.3;
  `,
  h4: css`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
  `,
  h5: css`
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.4;
  `,
  subtitle: css`
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5;
  `,
  subtitle2: css`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
  `,
  body: css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  `,
  body2: css`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.6;
  `,
  caption: css`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.6;
  `,
};

export const StyledTypography = styled.p<TypographyProps>`
  margin: 0;
  ${({ variant }) => variantStyles[variant]}
  ${({ color }) => color && `color: ${colors[color][500]}`}
`;
