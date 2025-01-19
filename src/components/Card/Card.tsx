import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { StyledCard } from "./Card.styles";

const Card: FC<PropsWithChildren<HTMLAttributes<HTMLElement>>> = ({
  children,
  ...props
}) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
