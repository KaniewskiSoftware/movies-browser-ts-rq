import styled, { css } from "styled-components";

export type ContainerType = "default" | "credits" | "error" | "details";

interface WrapperProps {
  $containerType?: ContainerType;
}

/**
 * The Wrapper component is a styled container element used for wrapping
 * content and adjusting its layout based on the `$containerType` prop.
 *
 * @param $containerType - (Optional) A string to define the container type, one of: "default", "credits", "error". Default value: "default".
 */
export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  max-width: 1410px;
  padding: 0 16px;
  margin: 0 auto;

  ${({ $containerType }) =>
    $containerType === "credits" &&
    css`
      width: unset;
      padding: unset;
      margin: unset;
      justify-content: flex-start;
    `}

  ${({ $containerType }) =>
    $containerType === "error" &&
    css`
      align-items: center;
      gap: 24px;
      margin-top: 180px;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin-top: 90px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        margin-top: 45px;
      }
    `}

    ${({ $containerType }) =>
    $containerType === "details" &&
    css`
      margin-top: 64px;
      gap: 64px;
      margin-bottom: 336px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: 24px;
        gap: 32px;
        margin-bottom: 88px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        margin-top: 16px;
        gap: 21px;
        margin-bottom: 66px;
      }
    `}
`;
