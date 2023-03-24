import { List, Tag } from "./styled";

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  if (!!tags) {
    return (
      <List>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </List>
    );
  }

  return null;
};

export default Tags;
