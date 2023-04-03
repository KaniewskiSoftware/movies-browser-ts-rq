import { StyledPlane, PlaneBox } from "./styled";
import Title from "../../Title";
import { searchQueryParamName, useQueryParameter } from "../../../hooks/queryParameters";
import { Wrapper } from "../../Wrapper";

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
