import styled from "styled-components";

export const StyledCardImageWrapper = styled.div`
  aspect-ratio: 5/3;
  overflow: hidden;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

export const StyledCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
