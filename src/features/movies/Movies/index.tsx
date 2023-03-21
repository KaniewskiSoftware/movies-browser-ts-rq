import { useEffect, useState } from "react";
import { useGenres } from "../../../common/api/genres/genres";
import { useMovies } from "../../../common/api/movies/movies";
import Footer from "../../../common/components/Footer";
import {
  pageQueryParamName,
  searchQueryParamName,
  useQueryParameter,
} from "../../../common/hooks/queryParameters";
import ErrorPage from "../../../common/states/ErrorPage";
import Loader from "../../../common/states/Loader";
import NoResults from "../../../common/states/NoResults";
import PopularMoviesPageContent from "./Content";

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

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !genresData.genres || !moviesData?.results) {
    return <ErrorPage />;
  }

  return !moviesData.total_results ? (
    <NoResults />
  ) : (
    <>
      <PopularMoviesPageContent
        genres={genresData.genres}
        movies={moviesData.results}
        query={query}
        totalResults={moviesData.total_results!}
      />
      <Footer totalPages={moviesData.total_pages ?? 1} page={page} />
    </>
  );
};

export default MoviesPage;
