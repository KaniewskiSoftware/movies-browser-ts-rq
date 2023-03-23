import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Danger } from "./danger.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  margin: 0 auto;
  margin-top: 180px;
`;

export const Sign = styled(Danger)`
  width: 120px;
  height: 120px;
`;

export const BiggerText = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  text-align: center;
  color: ${({ theme }) => theme.colors.site.primaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    font-weight: 500;
  } ;
`;

export const Text = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-align: center;
  color: ${({ theme }) => theme.colors.site.primaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    font-weight: 400;
  } ;
`;

export const Button = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;
  width: 181px;
  height: 51px;
  background: ${({ theme }) => theme.colors.states.buttonBackground};
  border-radius: 5px;
  border: none;
  transition: background-color 1s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.states.buttonHover};
  }

  &:active {
    background: ${({ theme }) => theme.colors.states.buttonActive};
  }
`;

export const ButtonText = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.states.buttonText};
`;