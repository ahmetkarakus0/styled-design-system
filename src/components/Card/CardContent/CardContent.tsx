import { FC, HTMLAttributes } from "react";
import { StyledCardContent } from "./CardContent.styles";

const CardContent: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return <StyledCardContent>{children}</StyledCardContent>;
};

export default CardContent;
