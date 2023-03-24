import styled, { css } from "styled-components";

type TagsProps = {
  $details?: boolean;
};

export const List = styled.ul<TagsProps>`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 8px;

  ${({ $details }) =>
    $details &&
    css`
      gap: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        gap: 8px;
      }
    `}
`;

export const Tag = styled.li`
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  line-height: 1.4;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.tile.tagBackground};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 12px;
    padding: 6px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    padding: 4px 8px;
    line-height: 1.1;
    font-size: 10px;
  }
`;
