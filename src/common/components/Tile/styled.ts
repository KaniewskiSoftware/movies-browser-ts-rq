import styled, { css } from "styled-components";

interface BigTile {
  $big?: boolean;
}
interface TileContainerProps extends BigTile {
  $horizontalOnMobile?: boolean;
}

interface TitleProps extends BigTile {
  $smallTitle?: boolean;
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
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 16px;
  gap: 16px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.base};
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

      @media (max-width: ${({ theme }) => theme.breakpoints.smalest}) {
        padding: 16px;
        gap: 16px;
      }
    `}
`;

/**
 * Image is a styled div component that displays the image for the Tile component.
 * It supports optional properties for image URL, absence of an image, and horizontal
 * Tile display on mobile devices.
 *
 * @param $imageURL - (Optional) A string representing the image URL. Default value: undefined.
 * @param $noImage - (Optional) A boolean that determines correct placeholder look if the image
 *                   is not available. Default value: false.
 * @param $horizontalOnMobile - (Optional) A boolean that helps to keep correct image size and
 *                              aspect ratio while the Tile is displayed horizontally.
 *                              Default value: false.
 */
export const Image = styled.div<ImageProps>`
  padding-top: calc(100% * 632 / 431);
  width: 100%;
  border-radius: 5px;
  background-image: url(${({ $imageURL }) => $imageURL});
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

  ${({ $big }) =>
    $big &&
    css`
      padding: unset;
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
      background-color: ${({ theme }) => theme.colors.secondary};
      background-size: 35%;
      background-repeat: no-repeat;
    `}
`;

/**
 *
 *
 * Content is a styled div component that serves as the container for the text elements
 * inside the Tile component. It supports optional centered text alignment.
 * @param $textCentered - (Optional) A boolean that determines if the text should be centered
 *                        within the Content component. Default value: false.
 */
export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 8px;

  ${({ $textCentered }) =>
    $textCentered &&
    css`
      text-align: center;
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
`;

/**
 * Title is a styled paragraph (p) component that displays the title text inside the Tile component.
 * It supports optional small font size for smaller screens or design preferences.
 * @param $smallTitle - (Optional) A boolean that determines if the Title should have a smaller font
 *                      size. Default value: false.
 */
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

  ${({ $big }) =>
    $big &&
    css`
      font-weight: 600;
      font-size: 36px;
      line-height: 1.2;

      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        font-size: 32px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 24px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.smalest}) {
        font-size: 22px;
      }
    `}
`;
