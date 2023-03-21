import { useEffect, useState } from "react";
import { usePeople } from "../../../common/api/people/people";
import Footer from "../../../common/Footer";
import {
  pageQueryParamName,
  searchQueryParamName,
  useQueryParameter,
} from "../../../common/hooks/queryParameters";
import ErrorPage from "../../../common/states/ErrorPage";
import Loader from "../../../common/states/Loader";
import NoResults from "../../../common/states/NoResults";
import PopularPeoplePageContent from "./Content";

const PopularPeoplePage = () => {
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

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !peopleData?.results) {
    return <ErrorPage />;
  }

  return !peopleData.total_results ? (
    <NoResults />
  ) : (
    <>
      <PopularPeoplePageContent
        people={peopleData.results}
        query={query}
        totalResults={peopleData.total_results!}
      />
      <Footer totalPages={peopleData.total_pages ?? 1} page={page} />
    </>
  );
};

export default PopularPeoplePage;
