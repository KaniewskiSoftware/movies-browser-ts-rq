import { Link } from "react-router-dom";
import styled from "styled-components";

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
  transition: background-color 0.5s;

  &:hover > * {
    background-color: ${({ theme }) => theme.colors.button};
  }
`;
