import styled, { css } from "styled-components";
import { ReactComponent as Star } from "../../images/star.svg";
import { textStyles } from "../Text";

interface RatingProps {
  $large?: boolean;
  $medium?: boolean;
}

interface StyledStarProps {
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

  ${({ $medium }) =>
    $medium &&
    css`
      margin: 0;
      gap: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin-top: auto;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        gap: 4px;
      }
    `}
`;

export const StyledStar = styled(Star)<StyledStarProps>`
  width: 24px;
  height: auto;
  color: ${({ theme }) => theme.colors.star};

  ${({ $large }) =>
    !$large &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 20px;
      }
    `}

  ${({ $large }) =>
    $large &&
    css`
      width: 40px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 16px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const Rate = styled.p<RatingProps>`
  position: relative;
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
      line-height: 1.3;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 30px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-weight: 600;
        font-size: 14px;
      }
    `}

  ${({ $medium }) =>
    $medium &&
    css`
      margin: 0;
      font-size: 22px;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 22px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 13px;
      }
    `}
`;

interface CountProps {
  $bottomSelfAlignment?: boolean;
  $displayOnDesktop?: boolean;
  $displayOnMobile?: boolean;
  $hidden?: boolean;
  $medium?: boolean;
  $large?: boolean;
}

export const Count = styled.p<CountProps>`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }

  ${({ $large }) =>
    $large &&
    css`
      font-size: 16px;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.base};

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 10px;
      }
    `}

  ${({ $medium }) =>
    $medium &&
    css`
      font-size: 14px;
      color: ${({ theme }) => theme.colors.primary};

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        color: ${({ theme }) => theme.colors.secondary};
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 13px;
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
  ${textStyles}
`;
