import { List, Tag } from "./styled";

interface TagsProps {
  tags: string[];
  largeGap?: boolean;
}

const Tags = ({ tags, largeGap }: TagsProps) => {
  if (!!tags[0]) {
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
