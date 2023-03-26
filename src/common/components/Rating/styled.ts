import styled, { css } from "styled-components";
import { ReactComponent as Star } from "../../images/star.svg";

interface RatingProps {
  $large?: boolean;
  $medium?: boolean;
}

/**
 * The Container component is a styled div that serves as a container for
 * the Rating component elements, providing proper alignment and spacing.
 *
 * @param $large - (Optional) A boolean to apply the large version styles.
 * @param $medium - (Optional) A boolean to apply the medium version styles.
 * @property styled - A function that returns a styled component.
 * @returns A styled div component with dynamic styles based on the optional props.
 */
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

/**
 * The StyledStar component is a styled SVG component that displays a star icon.
 *
 * @param $large - (Optional) A boolean to apply the large version styles.
 * @property styled - A function that returns a styled component.
 * @property Star - An SVG component that displays a star icon.
 * @returns A styled SVG component with dynamic styles based on the optional props.
 */
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

export const TextBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;
/**
 * The Rate component is a styled paragraph component that displays the rating
 * value in a specific font size and weight.
 *
 * @param $large - (Optional) A boolean to apply the large version styles.
 * @property styled - A function that returns a styled component.
 * @property p - A paragraph element that is used to display the rating value.
 * @returns A styled paragraph component with dynamic styles based on the optional props.
 */
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
