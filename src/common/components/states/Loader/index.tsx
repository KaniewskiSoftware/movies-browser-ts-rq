import { searchQueryParamName, useQueryParameter } from "../../../hooks/queryParameters";
import Title from "../../Title";
import { StyledSpinner, SpinnerBox } from "./styled";
import { Wrapper } from "../../Wrapper";

/**
 * The Loader component displays a spinning icon to indicate that content is being loaded.
 * It also shows a title if a search query is present.
 */
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
