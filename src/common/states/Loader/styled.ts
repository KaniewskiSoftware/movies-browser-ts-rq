import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./icon-spinner.svg";

interface SpinnerBoxProps {
  $hasTitle?: boolean;
}

/**
 * A styled container that holds and centers the spinning icon
 * within the Loader component.
 */
export const SpinnerBox = styled.div<SpinnerBoxProps>`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: ${({ $hasTitle }) => ($hasTitle ? "96px" : "219px")};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ $hasTitle }) => ($hasTitle ? "24px" : "66px")};
  } ;
`;

const rotation = keyframes` 
  to {
    transform: rotate(360deg);
  }
`;

/**
 * A styled SVG icon (Spinner) that represents a loading state.
 * The icon is animated to rotate continuously.
 */
export const StyledSpinner = styled(Spinner)`
  width: 91px;
  height: auto;
  animation: ${rotation} 1.5s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 24px;
  } ;
`;
