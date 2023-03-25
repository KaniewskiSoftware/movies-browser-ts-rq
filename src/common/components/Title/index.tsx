import { StyledTitle } from "./styled";

export type TitleType = "default" | "personCredits" | "movieCredits";

interface TitleProps {
  title: string;
  styleType?: TitleType;
}

/**
 * The Title component is used to render a title for a section or a page.
 * It allows for different title styles based on the `styleType` prop.
 *
 * @param title - The text of the title.
 * @param styleType - (Optional) A string to define the title style, one of: "default", "personCredits", "movieCredits". Default value: "default".
 *                    The Title component will be rendered as <h1> on "default" value, otherwise as <h2>.
 */
const Title = ({ title, styleType = "default" }: TitleProps) => (
  <StyledTitle
    as={styleType === "default" ? "h1" : "h2"}
    $styleType={styleType}
  >
    {title}
  </StyledTitle>
);

export default Title;
