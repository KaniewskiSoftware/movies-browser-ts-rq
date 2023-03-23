import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as star } from "../../images/star.svg";
import defaultMovie from "../../images/defaultMovie.svg";

export const MovieLink = styled(Link)`
  display: flex;
  height: 100%;
  text-decoration: none;
  transition: transform 1s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Tile = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  gap: 16px;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colors.site.primaryText};
  background-color: ${({ theme }) => theme.colors.tile.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ImageBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  background-image: url(${defaultMovie});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.tile.imageBackground};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 198px;
    height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    max-width: 114px;
    height: 169px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 2/3;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 16px;
  }
`;

export const GreyText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.tile.secondaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 13px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  line-height: 1.5;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    line-height: 1.3;
    gap: 8px;
  }
`;

export const Star = styled(star)`
  width: 24px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 16px;
  }
`;

export const Rate = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 13px;
  }
`;
