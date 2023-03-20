import { useEffect, useState } from "react";
import { usePopularPeople } from "../../../common/api/people/popularPeople";
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
    data: popularPeopleData,
    isLoading: popularPeopleLoading,
    isError: popularPeopleIsError,
  } = usePopularPeople(page);

  const isLoading = popularPeopleLoading;
  const isError = popularPeopleIsError;

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !popularPeopleData?.results) {
    return <ErrorPage />;
  }

  return !popularPeopleData.total_results ? (
    <NoResults />
  ) : (
    <>
      <PopularPeoplePageContent
        people={popularPeopleData.results}
        query={query}
        totalResults={popularPeopleData.total_results!}
      />
      <Footer totalPages={popularPeopleData.total_pages ?? 1} page={page} />
    </>
  );
};

export default PopularPeoplePage;
