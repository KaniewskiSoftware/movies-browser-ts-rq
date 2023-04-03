import styled, { css } from "styled-components";

interface TextProps {
  $small?: boolean;
  $big?: boolean;
  $displayOnDesktop?: boolean;
  $displayOnMobile?: boolean;
  $hidden?: boolean;
}

export const textStyles = css<TextProps>`
  margin: 0;
  font-weight: 400;

  ${({ $displayOnDesktop }) =>
    $displayOnDesktop &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: none;
      }
    `}

  ${({ $displayOnMobile }) =>
    $displayOnMobile &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: block;
      }
    `}

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;

export const Text = styled.p<TextProps>`
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 13px;
  }

  ${({ $small }) =>
    $small &&
    css`
      font-size: 16px;
    `}

  ${({ $big }) =>
    $big &&
    css`
      font-size: 22px;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.primary};

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 18px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 16px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 13px;
      }
    `}

    ${textStyles}
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-area: description;
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 14px;
  }

  ${textStyles};
`;
