import { useEffect, useState } from "react";
import { useGenres } from "../../../common/api/hooks/genres/useGenres";
import { useMovies } from "../../../common/api/hooks/movies/useMovies";

import Page from "../../../common/components/Page";
import {
  pageQueryParamName,
  searchQueryParamName,
  useQueryParameter,
} from "../../../common/hooks/queryParameters";
import Content from "./Content";

const MoviesPage = () => {
  const pageParam = useQueryParameter(pageQueryParamName);
  const query = useQueryParameter(searchQueryParamName);
  const [page, setPage] = useState<number>(pageParam ? +pageParam : 1);

  useEffect(() => {
    setPage(pageParam ? +pageParam : 1);
  }, [pageParam]);

  const {
    data: genresData,
    isLoading: genresLoading,
    isError: genresIsError,
    error: genresError,
  } = useGenres();

  const {
    data: moviesData,
    isLoading: moviesLoading,
    isError: moviesIsError,
    error: moviesError,
  } = useMovies(query, page);

  const isLoading = moviesLoading || genresLoading;
  const isError = moviesIsError || genresIsError;
  const errorMessage = moviesError?.errorMessage || genresError?.errorMessage;

  return (
    <Page
      isLoading={isLoading}
      isError={isError}
      errorMessage={errorMessage}
      hasResults={!!(moviesData && moviesData.total_results)}
      totalPages={moviesData?.total_pages ?? 1}
      page={page}
    >
      <Content
        genres={genresData?.genres ?? []}
        movies={moviesData?.results ?? []}
        query={query}
        totalResults={moviesData?.total_results ?? 0}
      />
    </Page>
  );
};

export default MoviesPage;
