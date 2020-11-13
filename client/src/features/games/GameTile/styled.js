import styled from "styled-components";
import Tile from "../../../common/Tile";

export const StyledTile = styled(Tile)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    opacity: 0.9;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }
  
  grid-template-columns: 1fr;
  text-align: center;
  justify-items: center;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    padding: 16px;
    grid-gap: 8px;
  }
`;

export const Image = styled.img`
  height: 200px;
  max-width: 200px;
  border-radius: 5px;
  object-fit: contain;
`;

export const DefaultImage = styled.img`
  height: 200px;
`;

export const DefaultImageContainer = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
  object-fit: contain;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const GameName = styled.h2`
  font-size: 24px;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    font-size: 16px;
    font-weight: 700;
  }
`;

export const StyledParagraph = styled.p`
  margin: 0px;
`;