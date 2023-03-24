import { List, Tag } from "./styled";

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <List>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </List>
  );
};

export default Tags;
