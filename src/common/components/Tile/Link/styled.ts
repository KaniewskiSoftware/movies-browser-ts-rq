import { Link } from "react-router-dom";
import styled from "styled-components";

/**
 * TileLink is a styled component based on the Link component from react-router-dom.
 * It is used as a container for the Tile components, providing navigation between pages.
 * When hovered, it updates the border color of its first child element to the theme's primary color.
 *
 * @example
 * <TileLink to="/movie/12345">
 *   <Tile />
 * </TileLink>
 */
export const TileLink = styled(Link)`
  text-decoration: none;
  transition: border 1s;

  &:hover > :first-child {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
