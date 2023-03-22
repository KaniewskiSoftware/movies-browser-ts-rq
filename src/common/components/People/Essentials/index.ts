import styled from "styled-components";

export const PeopleTiles = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: repeat(2, minmax(136px, 1fr));
  }
`;
