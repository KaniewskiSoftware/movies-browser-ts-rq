import { searchQueryParamName, useQueryParameter } from "../../../hooks/queryParameters";
import Title from "../../Title";
import { StyledSpinner, SpinnerBox } from "./styled";
import { Wrapper } from "../../Wrapper";

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
