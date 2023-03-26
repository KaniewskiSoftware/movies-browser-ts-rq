import styled, { css } from "styled-components";

interface SecondaryTextProps {
  $smallText?: boolean;
  $backdrop?: boolean;
  $detailsTile?: boolean;
  $description?: boolean;
  $big?: boolean;
  $bottomSelfAlignment?: boolean;
  $displayOnDesktop?: boolean;
  $displayOnMobile?: boolean;
  $hidden?: boolean;
}

/**
 * The SecondaryText component is a versatile styled paragraph component that
 * can be customized using various optional properties. It is designed to be
 * used in different parts of the application where secondary text is required.
 *
 * @param $smallText - (Optional) A boolean that sets the font size to 16px if true.
 * @param $backdrop - (Optional) A boolean that sets the font size to 16px, line-height to 1.2,
 *                    and changes the color according to the theme when true. It is used
 *                    throughout the Backdrop component.
 * @param $detailsTile - (Optional) A boolean that sets the font size to 14px, line-height to 1.2,
 *                    and changes the color according to the theme when true. It is used
 *                    throughout the Tile component.
 * @param $big - (Optional) A boolean that sets the font size to 22px on large screens
 *               and progressively smaller font sizes on smaller screens. It is used
 *               in the Details component.
 * @param $description - (Optional) A boolean that sets the font size to 20px and line-height to 1.6
 *                       when true. It is used to display a description text in the Details component.
 * @param $bottomSelfAlignment - (Optional) A boolean that sets the component's alignment to the
 *                               bottom (flex-end) on desktop and resets it on mobile devices.
 * @param $displayOnDesktop - (Optional) A boolean that hides the component on desktop devices
 *                            (below the 'large' breakpoint) when true.
 * @param $displayOnMobile - (Optional) A boolean that hides the component on mobile devices
 *                           (above the 'large' breakpoint) when true.
 * @param $hidden - (Optional) A boolean that hides the component when true.
 */
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

  ${({ $detailsTile }) =>
    $detailsTile &&
    css`
      font-size: 14px;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.detailsTile.primaryText};

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 13px;
      }
    `}

  ${({ $big }) =>
    $big &&
    css`
      font-size: 22px;
      line-height: 1.2;
      color: inherit;
      color: ${({ theme }) => theme.colors.detailsTile.primaryText};

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 18px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 16px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
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
  
  ${({ $description }) =>
    $description &&
    css`
      font-size: 20px;
      line-height: 1.6;
      color: inherit;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        grid-area: description;
        font-size: 16px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 14px;
      }
    `}
`;
