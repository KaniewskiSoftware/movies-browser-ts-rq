import styled, { css } from "styled-components";

type TagsProps = {
  $largeGap?: boolean;
};

export const List = styled.ul<TagsProps>`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 8px;

  ${({ $largeGap }) =>
    $largeGap &&
    css`
      gap: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        gap: 8px;
      }
    `}
`;

export const Tag = styled.li`
  list-style: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  line-height: 1.4;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.disabled};

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
