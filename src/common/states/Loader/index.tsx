import { searchQueryParamName, useQueryParameter } from "../../hooks/queryParameters";
import Title from "../../components/Title";
import { StyledSpinner, SpinnerBox, Wrapper } from "./styled";

const Loader = () => {
  const query = useQueryParameter(searchQueryParamName);

  return (
    <Wrapper>
      <Title title={!query ? "" : `Search results for "${query}"`} />
      <SpinnerBox $hasTitle={!!query}>
        <StyledSpinner />
      </SpinnerBox>
    </Wrapper>
  );
};

export default Loader;
