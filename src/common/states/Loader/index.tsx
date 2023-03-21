import { searchQueryParamName, useQueryParameter } from "../../hooks/queryParameters";
import Title from "../../components/Title";
import { Spinner, SpinnerBox, Wrapper } from "./styled";

const Loader = () => {
  const query = useQueryParameter(searchQueryParamName);

  return (
    <Wrapper>
      <Title title={!query ? "" : `Search results for "${query}"`} />
      <SpinnerBox $hasTitle={!!query}>
        <Spinner />
      </SpinnerBox>
    </Wrapper>
  );
};

export default Loader;
