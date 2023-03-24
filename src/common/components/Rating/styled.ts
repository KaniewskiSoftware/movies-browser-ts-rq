import styled, { css } from "styled-components";
import { ReactComponent as Star } from "../../images/star.svg";

interface RatingProps {
  $large?: boolean;
}

export const Container = styled.div<RatingProps>`
  display: flex;
  align-items: center;
  margin-top: auto;
  line-height: 1.5;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    line-height: 1.3;
    gap: 8px;
  }

  ${({ $large }) =>
    $large &&
    css`
      margin: 0;
      margin-bottom: 16px;
      gap: 8px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        margin-bottom: 0;
      }
    `}
`;

export const StyledStar = styled(Star)<RatingProps>`
  width: 24px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 20px;
  }

  ${({ $large }) =>
    $large &&
    css`
      width: 40px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 16px;
  }
`;

export const Rate = styled.p<RatingProps>`
  margin: 0;
  font-weight: 600;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 13px;
  }

  ${({ $large }) =>
    $large &&
    css`
      font-weight: 500;
      font-size: 30px;
      line-height: 1.3%;

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-weight: 600;
        font-size: 14px;
      }
    `}
`;
