import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as Star } from "../../images/star.svg";

interface TileContainerProps {
  $horizontalOnMobile?: boolean;
}

interface GreyTextProps {
  $smallText?: boolean;
}

interface TitleProps {
  $smallTitle?: boolean;
}

interface ImageProps {
  $imageURL?: string;
  $noImage?: boolean;
  $horizontalOnMobile?: boolean;
}

export const TileLink = styled(Link)`
  text-decoration: none;
  transition: transform 1s;

  &:hover {
    transform: scale(1.05);
  }
`;

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

  ${({ $horizontalOnMobile }) =>
    $horizontalOnMobile &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: row;
      }
    `}
`;

export const Image = styled.div<ImageProps>`
  padding-top: calc(100% * 632 / 431);
  width: 100%;
  border-radius: 5px;
  background-image: url(${({ $imageURL }) => $imageURL });
  background-size: cover;
  background-position: center;

  ${({ $horizontalOnMobile }) =>
    $horizontalOnMobile &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: unset;
        height: 300px;
        max-width: 198px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        height: 169px;
        max-width: 114px;
      }
    `}

  ${({ $noImage }) =>
    $noImage &&
    css`
      background-color: ${({ theme }) => theme.colors.tile.imageBackground};
      background-size: 35%;
      background-repeat: no-repeat;
    `}
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

  ${({ $smallTitle }) =>
    $smallTitle &&
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

  ${({ $smallText }) =>
    $smallText &&
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

export const StyledStar = styled(Star)`
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
