import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 94px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    height: 142px;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    gap: 10px;
    padding: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-transform: capitalize;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    gap: 15px;
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.base};
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.5px;
  }
`;

export const LogoImg = styled.img`
  display: block;
  width: 40px;
  height: 40px;
`;

export const LogoText = styled.p`
  text-decoration: none;
  margin: 0;
  padding: 0;
`;
