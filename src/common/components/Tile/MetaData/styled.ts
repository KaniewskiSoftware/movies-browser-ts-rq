import styled, { css } from "styled-components";

export const Properties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Property = styled.dl`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
`;

interface PropertyTextProps {
  $displayOnDesktop?: boolean;
  $displayOnMobile?: boolean;
  $entitled?: boolean;
}

export const PropertyText = styled.p<PropertyTextProps>`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 12px;
  }

  ${({ $displayOnDesktop }) =>
    $displayOnDesktop &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        display: none;
      }
    `}

  ${({ $displayOnMobile }) =>
    $displayOnMobile &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        display: block;
      }
    `}

  ${({ $entitled }) =>
    $entitled &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
      margin-right: 8px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
      }
    `}
`;
