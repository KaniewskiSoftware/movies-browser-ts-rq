import styled, { css } from "styled-components";

export type ContainerType = "default" | "credits" | "error";

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

  ${({ $containerType }) =>
    $containerType === "error" &&
    css`
      display: flex;
      flex-direction: column;
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
`;
