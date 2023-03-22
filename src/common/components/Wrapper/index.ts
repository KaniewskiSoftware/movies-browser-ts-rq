import styled, { css } from "styled-components";

export type ContainerType = "default" | "credits";

interface WrapperProps {
  $containerType?: ContainerType;
}

export const Wrapper = styled.div<WrapperProps>`
  max-width: 1400px;
  padding: 0 16px;
  margin: 0 auto;

  ${({ $containerType }) =>
    $containerType === "credits" &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    `}
`;
