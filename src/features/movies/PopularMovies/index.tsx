import { useEffect, useState } from "react";
import { useGenres } from "../../../common/api/genres/genres";
import { usePopularMovies } from "../../../common/api/movies/popularMovies";
import { useMoviesByQuery } from "../../../common/api/search/moviesByQuery";
import Footer from "../../../common/Footer";
import {
  pageQueryParamName,
  searchQueryParamName,
  useQueryParameter,
} from "../../../common/hooks/queryParameters";
import ErrorPage from "../../../common/states/ErrorPage";
import Loader from "../../../common/states/Loader";
import NoResults from "../../../common/states/NoResults";
import PopularMoviesPageContent from "./Content";

const PopularMoviesPage = () => {
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
    data: popularMoviesData,
    isLoading: popularMoviesLoading,
    isError: popularMoviesIsError,
  } = usePopularMovies(page);

  // const {
  //   data: moviesByQueryData,
  //   isLoading: moviesByQueryLoading,
  //   isError: moviesByQueryError,
  // } = useMoviesByQuery(query, page);

  const isLoading = popularMoviesLoading || genresLoading;
  const isError = popularMoviesIsError || genresIsError;

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !genresData.genres || !popularMoviesData?.results) {
    return <ErrorPage />;
  }

  return popularMoviesData.total_results ? (
    <NoResults />
  ) : (
    <>
      <PopularMoviesPageContent
        genres={genresData.genres}
        movies={popularMoviesData.results}
        query={query}
        totalResults={popularMoviesData.total_results!}
      />
      <Footer totalPages={popularMoviesData.total_pages ?? 1} page={page} />
    </>
  );
};

export default PopularMoviesPage;
