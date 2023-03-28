import styled, { css } from "styled-components";

interface TextProps {
  $small?: boolean;
  $big?: boolean;
  $displayOnDesktop?: boolean;
  $displayOnMobile?: boolean;
  $hidden?: boolean;
}

/**
 * textStyles is a set of reusable CSS properties for styled components that
 * require text-related styles. It includes common text styling properties
 * and responsive display properties based on the provided TextProps.
 *
 * @param $displayOnDesktop - (Optional) A boolean that hides the component on desktop devices
 *                            (below the 'medium' breakpoint) when true.
 * @param $displayOnMobile - (Optional) A boolean that hides the component on mobile devices
 *                           (above the 'medium' breakpoint) when true.
 * @param $hidden - (Optional) A boolean that hides the component when true.
 *
 * @example
 * // Usage in a styled component
 * const CustomText = styled.p`
 *   ${textStyles};
 * `;
 */
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

/**
 * The Text component is a versatile styled paragraph component that
 * can be customized using various optional properties. It is designed to be
 * used in different parts of the application where secondary text is required.
 *
 * @param $small - (Optional) A boolean that sets the font size to 16px if true.
 * @param $big - (Optional) A boolean that sets the font size to 22px on large screens
 *               and progressively smaller font sizes on smaller screens. It is used
 *               in the Details component.
 * @param $displayOnDesktop - (Optional) A boolean that hides the component on desktop devices
 *                            (below the 'large' breakpoint) when true.
 * @param $displayOnMobile - (Optional) A boolean that hides the component on mobile devices
 *                           (above the 'large' breakpoint) when true.
 * @param $hidden - (Optional) A boolean that hides the component when true.
 * @param textStyles - A set of reusable styles that handle
 *                     display properties.
 */
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

/**
 * The Description component is a styled paragraph component that is designed
 * to display a text description with a larger font size than the Text component.
 * It inherits the textStyles from to maintain consistent behavior.
 *
 * @param textStyles - A set of reusable styles inherited from the Text component that
 *                     handle display properties based on breakpoints and visibility.
 */
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
