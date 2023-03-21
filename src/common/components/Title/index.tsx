import { StyledTitle } from "./styled";

interface TitleProps {
  title:string;
  credits?: boolean;
  tag?: string;
}

const Title = ({ title, credits, tag}: TitleProps) => (
  <StyledTitle as={tag ? "h2" : "h1"} $credits={credits}>{title}</StyledTitle>
);

export default Title;
