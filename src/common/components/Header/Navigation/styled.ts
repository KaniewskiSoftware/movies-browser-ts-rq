import { NavLink } from "react-router-dom";
import styled from "styled-components";

/**
 * The Nav is a styled component that provides the style for the Navigation component.
 */
export const Nav = styled.nav`
  display: flex;
`;


/**
 * The List is a styled component that provides the style for the unordered list of menu items in the Navigation component.
 */
export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  gap: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 6px;
  }
`;


/**
 * The Item is a styled component that provides the style for the individual list items in the Navigation component.
 */
export const Item = styled.li`
  list-style: none;
`;

/**
 * The StyledNavLink is a styled component that provides the style for the NavLink component used in the Navigation component.
 */
export const StyledNavLink = styled(NavLink)`
  padding: 13px 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.header.primary};

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.header.primary};
    border-radius: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 16px;
    font-size: 12px;
    line-height: 18px;
  }
`;
