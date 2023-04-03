import { Link } from "react-router-dom";
import styled from "styled-components";

export const TileLink = styled(Link)`
  text-decoration: none;
  transition: border 1s;

  &:hover > :first-child {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
