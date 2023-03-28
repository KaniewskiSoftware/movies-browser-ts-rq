import { ReactComponent as Arrow } from "./back_arrow.svg";
import styled, { css } from "styled-components";

interface StyledArrowProps {
  $rotated?: boolean;
  $mobile?: boolean;
  $hidden?: boolean;
}

/**
 * The StyledButton is a styled component that provides the style for the Button component.
 */
export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 5px;
  padding: 8px 16px;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.special};
    color: ${({ theme }) => theme.colors.base};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.disabled};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 12px;
  }
`;

/**
 * The Title is a styled component that provides the style for the title of the Button component.
 */
export const Title = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  transition: color .3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

/**
 * The StyledArrow is a styled component that provides the style for the arrow icon in the Button component.
 *
 * Props:
 * @param $rotated: A boolean indicating if the arrow icon should be rotated.
 * @param $mobile: A boolean indicating if the arrow icon should be styled for mobile devices.
 * @param $hidden: A boolean indicating if the arrow icon should be hidden.
 */
export const StyledArrow = styled(Arrow)<StyledArrowProps>`
  color: ${({ theme }) => theme.colors.special};
  transition: color .3s;

  ${StyledButton}:hover && {
    color: ${({ theme }) => theme.colors.base};
  }

  ${StyledButton}:disabled && {
    color: ${({ theme }) => theme.colors.secondary};
  }

  ${({ $rotated }) =>
    $rotated &&
    css`
      transform: rotate(180deg);
      order: 2;
    `}

  ${({ $mobile }) =>
    $mobile &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: flex;
      }
    `};

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `};
`;
