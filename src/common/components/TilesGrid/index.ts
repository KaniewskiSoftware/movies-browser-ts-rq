import styled, { css } from "styled-components";

interface TilesGridProps {
  $moreItems?: boolean;
}

/**
 * The TilesGrid component is a styled div that creates a responsive grid
 * layout to display tile-like components. The number of columns adjusts
 * depending on the viewport width and the presence of the `$moreItems` prop.
 *
 * @param $moreItems - (Optional) A boolean to increase the number of columns.
 */
export const TilesGrid = styled.div<TilesGridProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;

  ${({ $moreItems }) =>
    !$moreItems &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
      }
    `}

  ${({ $moreItems }) =>
    $moreItems &&
    css`
      grid-template-columns: repeat(5, 1fr);

      @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 16px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.smalest}) {
        grid-template-columns: repeat(2, minmax(136px, 1fr));
      }
    `}
`;
