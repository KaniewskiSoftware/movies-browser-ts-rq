import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 432px;
  border: 1px solid ${({ theme }) => theme.colors.disabled};
  border-radius: 33px;
  background-color: ${({ theme }) => theme.colors.base};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 288px;
    height: 44px;
  }
`;

export const Loupe = styled.img`
  height: 18px;
  width: 18px;
  margin: 15px 25px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 12px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 12px;
    height: 12px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  line-height: 1.5;
  width: 75%;

  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 13px;
    line-height: 1.3;
  }
`;
