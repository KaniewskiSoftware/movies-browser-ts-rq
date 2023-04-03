import styled from "styled-components";
import { ReactComponent as Plane } from "./picture.svg";

export const PlaneBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 6px;
  } ;
`;

export const StyledPlane = styled(Plane)`
  width: 668px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 434px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 176px;
  } ;
`;
