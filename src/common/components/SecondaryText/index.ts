import styled, { css } from "styled-components";

interface SecondaryTextProps {
  $smallText?: boolean;
  $backdrop?: boolean;
  $bottomSelfAlignment?: boolean;
  $displayOnDesktop?: boolean;
  $displayOnMobile?: boolean;
  $hidden?: boolean;
}

export const SecondaryText = styled.p<SecondaryTextProps>`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.tile.secondaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 13px;
  }

  ${({ $smallText }) =>
    $smallText &&
    css`
      font-size: 16px;
    `}

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      font-size: 16px;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.backdrop.text};

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 10px;
      }
    `}

    ${({ $bottomSelfAlignment }) =>
    $bottomSelfAlignment &&
    css`
      align-self: flex-end;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        align-self: unset;
      }
    `}

    ${({ $displayOnDesktop }) =>
    $displayOnDesktop &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
      }
    `}

  ${({ $displayOnMobile }) =>
    $displayOnMobile &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        display: block;
      }
    `}
    ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;
