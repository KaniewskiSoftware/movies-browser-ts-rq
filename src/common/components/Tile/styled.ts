import styled, { css } from "styled-components";

interface BigTile {
  $big?: boolean;
}
interface TileContainerProps extends BigTile {
  $horizontalOnMobile?: boolean;
}

interface TitleProps extends BigTile {
  $smallOnTiny?: boolean;
}

interface ImageProps extends BigTile {
  $imageURL?: string;
  $noImage?: boolean;
  $horizontalOnMobile?: boolean;
}

interface ContentProps extends BigTile {
  $textCentered?: boolean;
}

export const TileContainer = styled.article<TileContainerProps>`
  height: 100%;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.base};
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${({ $horizontalOnMobile }) =>
    $horizontalOnMobile &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: row;
      }
    `}

  ${({ $big }) =>
    !$big &&
    css`
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        padding: 8px;
      }
    `}

  ${({ $big }) =>
    $big &&
    css`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 40px;
      padding: 40px;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        grid-template-rows: auto 1fr;
        grid-template-areas:
          "image content"
          "description description";
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 26px;
        gap: 26px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        padding: 16px;
        gap: 16px;
      }
    `}
`;

export const Image = styled.div.attrs<ImageProps>(({ $imageURL }) => ({
  style: {
    backgroundImage: `url(${$imageURL})`,
  },
}))<ImageProps>`
  border-radius: 5px;
  background-size: cover;
  background-position: center;

  ${({ $big }) =>
    !$big &&
    css`
      padding-top: calc(100% * 632 / 431);
      width: 100%;
    `}

  ${({ $horizontalOnMobile, $big }) =>
    !$big &&
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

  ${({ $big }) =>
    $big &&
    css`
      width: 312px;
      height: 464px;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        grid-area: image;
        width: 248px;
        height: 372px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 164px;
        height: 246px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        width: 114px;
        height: 171px;
      }
    `}

  ${({ $noImage }) =>
    $noImage &&
    css`
      background-color: ${({ theme }) => theme.colors.unknown};
      background-size: 35%;
      background-repeat: no-repeat;
    `}
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ${({ $big }) =>
    !$big &&
    css`
      gap: 8px;
    `}

  ${({ $big }) =>
    $big &&
    css`
      padding: 8px 0;
      gap: 24px;
      color: ${({ theme }) => theme.colors.primary};

      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        gap: 16px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        grid-area: content;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 8px;
      }
    `}

    ${({ $textCentered }) =>
    $textCentered &&
    css`
      text-align: center;
    `}
`;

export const Title = styled.h2<TitleProps>`
  margin: 0;

  ${({ $big }) =>
    !$big &&
    css`
      font-weight: 500;
      font-size: 22px;
      line-height: 1.3;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 20px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 16px;
      }
    `}

  ${({ $big }) =>
    $big &&
    css`
      font-weight: 600;
      font-size: 36px;
      line-height: 1.2;

      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        font-size: 32px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 24px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 16px;
      }
    `}

  ${({ $smallOnTiny }) =>
    $smallOnTiny &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 14px;
      }
    `}
`;
