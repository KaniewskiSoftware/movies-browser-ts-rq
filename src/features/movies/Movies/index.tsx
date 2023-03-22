import { useEffect, useState } from "react";
import { useGenres } from "../../../common/api/genres/genres";
import { useMovies } from "../../../common/api/movies/movies";
import Page from "../../../common/components/Page";
import {
  pageQueryParamName,
  searchQueryParamName,
  useQueryParameter,
} from "../../../common/hooks/queryParameters";
import MoviesPageContent from "./Content";

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
  } = useGenres();

  const {
    data: moviesData,
    isLoading: moviesLoading,
    isError: moviesIsError,
  } = useMovies(query, page);

  const isLoading = moviesLoading || genresLoading;
  const isError = moviesIsError || genresIsError;

  return (
    <Page
      isLoading={isLoading}
      isError={isError}
      hasResults={!!(moviesData && moviesData.total_results)}
      totalPages={moviesData?.total_pages ?? 1}
      page={page}
    >
      <MoviesPageContent
        genres={genresData?.genres ?? []}
        movies={moviesData?.results ?? []}
        query={query}
        totalResults={moviesData?.total_results ?? 0}
      />
    </Page>
  );
};

export default MoviesPage;
