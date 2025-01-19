import { FC } from "react";
import { StyledCardImage, StyledCardImageWrapper } from "./CardImage.styles";
import { CardImageProps } from "./CardImage.types";

const CardImage: FC<CardImageProps> = ({ src }) => {
  return (
    <StyledCardImageWrapper>
      <StyledCardImage src={src} />
    </StyledCardImageWrapper>
  );
};

export default CardImage;
