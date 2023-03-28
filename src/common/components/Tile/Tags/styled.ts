import styled, { css } from "styled-components";

type TagsProps = {
  $largeGap?: boolean;
};

/**
 * List is a styled unordered list (ul) component used for displaying the tags horizontally
 * with a specified gap between them. It also supports wrapping to multiple lines if necessary.
 * The component uses the TagsProps interface to determine the gap size between the tags.
 *
 * @example
 * <List>
 *   {tags.map((tag, index) => (
 *     <Tag key={index}>{tag}</Tag>
 *   ))}
 * </List>
 *
 * @param $largeGap - (Optional) A boolean that determines if the list should have a larger gap between tags. Default value: false.
 */
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

/**
 * Tag is a styled list item (li) component used for representing an individual tag. It has a specific
 * background color, font size, and padding, which are applied to give it a distinct appearance.
 * The component is responsive and adjusts its styles for various screen sizes.
 *
 * @example
 * <Tag>Comedy</Tag>
 */
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
