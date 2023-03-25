import styled, { css } from "styled-components";

interface StyledTitleProps {
  $styleType?: "default" | "personCredits" | "movieCredits";
}

/**
 * The StyledTitle component is a styled text element used for displaying
 * titles. It adjusts its styles based on the `$styleType` prop.
 *
 * @param $styleType - (Optional) A string to define the title style, one of: "default", "personCredits", "movieCredits".
 */
export const StyledTitle = styled.h1<StyledTitleProps>`
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin-top: 56px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.site.primaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
    margin-top: 48px;
    padding-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 18px;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  ${({ $styleType }) =>
    $styleType === "personCredits" &&
    css`
      margin-top: 64px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 20px;
        margin-top: 24px;
        margin-bottom: 16px;
      }
    `}

  ${({ $styleType }) =>
    $styleType === "movieCredits" &&
    css`
      margin-bottom: 32px;

      @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 26px;
        margin-bottom: 20px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 20px;
        margin-bottom: 12px;
      }
    `}
`;
