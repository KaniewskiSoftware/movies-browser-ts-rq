import { NavLink } from "react-router-dom";
import styled from "styled-components";

/**
 * StyledHeader is a styled div that serves as a container for the Header component's content. It has a
 * fixed height, background color, and flex-based layout that adjusts based on the screen size.
 */
export const StyledHeader = styled.div`
  width: 100%;
  height: 94px;
  background-color: ${({ theme }) => theme.colors.header.background};
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

/**
 * Wrapper is a styled div that serves as a container for the logo and navigation components. It uses a
 * flex-based layout with a gap between items that adjusts based on the screen size.
 */
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

/**
 * LogoLink is a styled NavLink component that wraps the logo image and text. It provides the logo with
 * a link to the movies page and sets the appropriate styles for the text and the link.
 */
export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.header.primary};
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

/**
 * LogoImg is a styled img component that sets the size and display properties for the logo image.
 */
export const LogoImg = styled.img`
  display: block;
  width: 40px;
  height: 40px;
`;

/**
 * LogoText is a styled p component that sets the text styles for the logo, such as color, font size,
 * line-height, letter-spacing, and font-weight. It also removes default margins and paddings.
 */
export const LogoText = styled.p`
  text-decoration: none;
  margin: 0;
  padding: 0;
`;
