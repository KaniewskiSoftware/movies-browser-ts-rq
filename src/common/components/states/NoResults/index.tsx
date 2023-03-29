import { StyledPlane, PlaneBox } from "./styled";
import Title from "../../Title";
import { searchQueryParamName, useQueryParameter } from "../../../hooks/queryParameters";
import { Wrapper } from "../../Wrapper";

/**
 * The NoResults component displays a message and an image when no search results are found.
 * It shows a title containing the search query and an SVG image of a plane.
 */
const NoResults = () => {
  const query = useQueryParameter(searchQueryParamName);

  return (
    <Wrapper>
      <Title title={`Sorry, there are no results for "${query}"`} />
      <PlaneBox>
        <StyledPlane />
      </PlaneBox>
    </Wrapper>
  );
};

export default NoResults;
