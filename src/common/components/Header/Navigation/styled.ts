import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
`;

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

export const Item = styled.li`
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 13px 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.base};
  }

  &.active {
    border-color: ${({ theme }) => theme.colors.base};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 16px;
    font-size: 12px;
    line-height: 18px;
  }
`;
