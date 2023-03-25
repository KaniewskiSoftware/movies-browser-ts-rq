import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface TileContainerProps {
  $horizontalOnMobile?: boolean;
}

interface TitleProps {
  $smallTitle?: boolean;
}

interface ImageProps {
  $imageURL?: string;
  $noImage?: boolean;
  $horizontalOnMobile?: boolean;
}

interface ContentProps {
  $textCentered?: boolean;
}

/**
 * TileLink is a styled component based on the Link component from react-router-dom.
 * It is used as a container for the Tile components, providing navigation between pages.
 *
 * @example
 * <TileLink to="/movie/12345">
 *   <Tile />
 * </TileLink>
 */
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

  ${({ $noImage }) =>
    $noImage &&
    css`
      background-color: ${({ theme }) => theme.colors.tile.imageBackground};
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
`;
