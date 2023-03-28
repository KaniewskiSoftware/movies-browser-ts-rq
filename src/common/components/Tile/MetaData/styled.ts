import styled, { css } from "styled-components";

/**
 * Properties styled-component, a container for the key-value pairs.
 *
 * @component
 * @example
 * return (
 *   <Properties>
 *     // Render Property and PropertyText components here
 *   </Properties>
 * );
 */
export const Properties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/**
 * Property styled-component, a container for a single key-value pair.
 *
 * @component
 * @example
 * return (
 *   <Property>
 *     // Render PropertyText components here
 *   </Property>
 * );
 */
export const Property = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface PropertyTextProps {
  $displayOnDesktop?: boolean;
  $displayOnMobile?: boolean;
  $entitled?: boolean;
}

/**
 * PropertyText styled-component to display the property title and content.
 *
 * @component
 * @example
 * return (
 *   <>
 *     <PropertyText $entitled>Title</PropertyText>
 *     <PropertyText>Content</PropertyText>
 *   </>
 * );
 */
export const PropertyText = styled.p<PropertyTextProps>`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 12px;
  }

  ${({ $displayOnDesktop }) =>
    $displayOnDesktop &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        display: none;
      }
    `}

  ${({ $displayOnMobile }) =>
    $displayOnMobile &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        display: block;
      }
    `}

  ${({ $entitled }) =>
    $entitled &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
      margin-right: 8px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
      }
    `}
`;
