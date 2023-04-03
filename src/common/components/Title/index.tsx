import { StyledTitle } from "./styled";

export type TitleType = "default" | "personCredits" | "movieCredits";

interface TitleProps {
  title: string;
  styleType?: TitleType;
}

const Title = ({ title, styleType = "default" }: TitleProps) => (
  <StyledTitle
    as={styleType === "default" ? "h1" : "h2"}
    $styleType={styleType}
  >
    {title}
  </StyledTitle>
);

export default Title;
