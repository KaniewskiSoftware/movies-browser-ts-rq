import { useEffect, useState } from "react";
import { useGenres } from "../../../common/api/genres/useGenres";
import { useMovies } from "../../../common/api/movies/useMovies";

import Page from "../../../common/components/Page";
import {
  pageQueryParamName,
  searchQueryParamName,
  useQueryParameter,
} from "../../../common/hooks/queryParameters";
import Content from "./Content";

/**
 * MoviesPage component displays a list of movies based on the search query and
 * page number from the query parameters. It fetches movie and genre data using
 * the custom hooks useMovies and useGenres, and then renders the Content and Page
 * components with the fetched data.
 */
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
