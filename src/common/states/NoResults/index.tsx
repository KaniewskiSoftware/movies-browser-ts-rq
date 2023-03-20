import { Plane, PlaneBox, Wrapper } from "./styled";
import Title from "../../Title";
import { searchQueryParamName, useQueryParameter } from "../../hooks/queryParameters";
const NoResults = () => {
  const query = useQueryParameter(searchQueryParamName);

  return (
    <Wrapper>
      <Title title={`Sorry, there are no results for "${query}"`} />
      <PlaneBox>
        <Plane />
      </PlaneBox>
    </Wrapper>
  );
};

export default NoResults;
