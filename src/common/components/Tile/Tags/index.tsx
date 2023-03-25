import { List, Tag } from "./styled";

interface TagsProps {
  tags: string[];
  largeGap?: boolean;
}

/**
 * The Tags component is used for displaying a list of tags, such as genres,
 * categories, or any other relevant information in a movie or TV show.
 * The tags are displayed as a horizontal list of items, wrapping to multiple lines if necessary.
 *
 * @param tags - An array of strings representing the tags to be displayed.
 * @param largeGap - (Optional) A boolean that determines if the list should have a larger gap between the tags. Default value: false.
 */
const Tags = ({ tags, largeGap }: TagsProps) => {
  if (!!tags) {
    return (
      <List $largeGap={largeGap}>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </List>
    );
  }

  return null;
};

export default Tags;
