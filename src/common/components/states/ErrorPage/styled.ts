import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as Danger } from "./danger.svg";

interface TextProps {
  $big?: boolean;
  $callToAction?: boolean;
}

export const Sign = styled(Danger)`
  width: 120px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 80px;
  }
`;

export const Text = styled.span<TextProps>`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    font-weight: 400;
  }

  ${({ $big }) =>
    $big &&
    css`
      font-weight: 600;
      font-size: 36px;
      line-height: 1.2;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
        font-weight: 500;
      }
    `}

  ${({ $callToAction }) =>
    $callToAction &&
    css`
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      color: ${({ theme }) => theme.colors.base};

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      }
    `}
`;

export const Button = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  width: 181px;
  height: 51px;
  gap: 10px;
  border-radius: 5px;
  border: none;
  background: ${({ theme }) => theme.colors.special};
  text-decoration: none;
  transition: background-color 1s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.specialHover};
  }

  &:active {
    background: ${({ theme }) => theme.colors.specialActive};
  }
`;
