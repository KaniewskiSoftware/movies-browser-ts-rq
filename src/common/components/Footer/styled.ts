import styled from "styled-components";

/**
 * The Wrapper is a styled component that provides the style for the Footer component.
 */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 32px 8px;
  }
`;

/**
 * The Counter is a styled component that provides the style for the page counter in the Footer component.
 */
export const Counter = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.footer.counter};
  margin: 0px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    margin: 0px 6px;
  }
`;

/**
 * The Span is a styled component that provides the style for the text within the Counter component.
 */
export const Span = styled.span`
  color: ${({ theme }) => theme.colors.footer.text};
  font-weight: 600;
  margin: 0px 6px;
`;
