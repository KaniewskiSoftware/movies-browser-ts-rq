import { Link } from "react-router-dom";
import styled from "styled-components";
import defaultPerson from "../../images/defaultPerson.svg";

export const PersonLink = styled(Link)`
  display: flex;
  height: 100%;
  text-decoration: none;
  transition: transform 1s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Tile = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.detailsTile.background};
  color: ${({ theme }) => theme.colors.site.primaryText};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 16px;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    padding: 8px;
  }
`;

export const PortraitBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  background-image: url(${defaultPerson});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.detailsTile.backgroundImage};
`;

export const Portrait = styled.img`
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 2/3;
`;

export const Storage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const FullName = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 14px;
  }
`;

export const Role = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.credits.role};

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 13px;
  }
`;
