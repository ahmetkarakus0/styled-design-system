import { FC } from "react";
import { StyledTypography } from "./Typography.styled";
import { TypographyProps } from "./Typography.types";

const Typography: FC<TypographyProps> = ({ children, variant, color }) => {
  return (
    <StyledTypography variant={variant} color={color}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
