import { StyledPlane, PlaneBox, Wrapper } from "./styled";
import Title from "../../components/Title";
import { searchQueryParamName, useQueryParameter } from "../../hooks/queryParameters";
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
