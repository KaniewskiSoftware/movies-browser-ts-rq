import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 32px 8px;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0px 6px;
    font-size: 10px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0px 6px;
  font-weight: 600;
`;
