import styled, { css } from "styled-components";

interface SecondaryTextProps {
  $smallText?: boolean;
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
`;