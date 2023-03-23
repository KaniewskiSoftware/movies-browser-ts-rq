import styled from "styled-components";
import { ReactComponent as Plane } from "./picture.svg";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1368px;
`;

export const PlaneBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 6px;
  } ;
`;

export const StyledPlane = styled(Plane)`
  width: 668px;
  height: 508px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 176px;
    height: 134px;
  } ;
`;
