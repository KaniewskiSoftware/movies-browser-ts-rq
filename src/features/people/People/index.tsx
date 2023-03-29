import { useEffect, useState } from "react";
import { usePeople } from "../../../common/api/people/usePeople";
import Page from "../../../common/components/Page";
import {
  pageQueryParamName,
  searchQueryParamName,
  useQueryParameter,
} from "../../../common/hooks/queryParameters";
import Content from "./Content";

const PeoplePage = () => {
  const pageParam = useQueryParameter(pageQueryParamName);
  const query = useQueryParameter(searchQueryParamName);
  const [page, setPage] = useState<number>(pageParam ? +pageParam : 1);

  useEffect(() => {
    setPage(pageParam ? +pageParam : 1);
  }, [pageParam]);

  const {
    data: peopleData,
    isLoading: peopleLoading,
    isError: peopleIsError,
  } = usePeople(query, page);

  const isLoading = peopleLoading;
  const isError = peopleIsError;

  return (
    <Page
      isLoading={isLoading}
      isError={isError}
      hasResults={!!(peopleData && peopleData.total_results)}
      totalPages={peopleData?.total_pages ?? 1}
      page={page}
    >
      <Content
        people={peopleData?.results ?? []}
        query={query}
        totalResults={peopleData?.total_results ?? 0}
      />
    </Page>
  );
};
export default PeoplePage;
