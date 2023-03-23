import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import defaultMovie from "../../images/defaultMovie.svg";
import { ReactComponent as star } from "../../images/star.svg";

interface TileContainerProps {
  $horizontal?: boolean;
  $horizontalOnMobile?: boolean;
}

interface GreyTextProps {
  $small?: boolean;
}

interface TitleProps {
  $small?: boolean;
}

interface ImageBackgroundProps {
  $imageURL?: string;
}

export const TileContainer = styled.article<TileContainerProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 16px;
  gap: 16px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.site.primaryText};
  background-color: ${({ theme }) => theme.colors.tile.background};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    padding: 8px;
  }

  ${({ $horizontal }) =>
    $horizontal &&
    css`
      flex-direction: row;
      align-items: center;
    `}

  ${({ $horizontalOnMobile }) =>
    $horizontalOnMobile &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: row;
        align-items: center;
      }
    `}
`;

export const TileLink = styled(Link)`
  display: flex;
  height: 100%;
  text-decoration: none;
  transition: transform 1s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageBackground = styled.div<ImageBackgroundProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  background-image: ${({ $imageURL }) =>
    $imageURL ? `url(${$imageURL})` : `url(${defaultMovie})`};
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.tile.imageBackground};
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
`;

export const Title = styled.p<TitleProps>`
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

  ${({ $small }) =>
    $small &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 14px;
      }
    `}
`;

export const GreyText = styled.p<GreyTextProps>`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.tile.secondaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 13px;
  }

  ${({ $small }) =>
    $small &&
    css`
      font-size: 16px;
    `}
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
