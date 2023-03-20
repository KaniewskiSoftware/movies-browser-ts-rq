import { useState } from "react";
import { useGenres } from "../../../common/api/genres/genres";
import { usePopularMovies } from "../../../common/api/movies/popularMovies";
import Footer from "../../../common/Footer";
import MovieTile from "../../../common/Movies";
import { MovieTiles } from "../../../common/Movies/Essentials";
import {
  pageQueryParamName,
  searchQueryParamName,
  useQueryParameter,
} from "../../../common/queryParameters";
import ErrorPage from "../../../common/states/ErrorPage";
import Loader from "../../../common/states/Loader";
import Title from "../../../common/Title";
import { Wrapper } from "../../../common/Wrapper";

const PopularMoviesPage = () => {
  const pageParam = useQueryParameter(pageQueryParamName);
  const query = useQueryParameter(searchQueryParamName);
  const [page, setPage] = useState(1);

  if (pageParam) {
    setPage(+pageParam);
  } else {
    setPage(1);
  }

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

  const isLoading = popularMoviesLoading || genresLoading;
  const isError = popularMoviesIsError || genresIsError;

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !genresData.genres || !popularMoviesData?.results) {
    return <ErrorPage />;
  }

  const { results: movies } = popularMoviesData;

  return (
    <>
      <Wrapper>
        <Title
          title={
            !query
              ? "Popular movies"
              : `Search results for "${query}" (${popularMoviesData.total_results})`
          }
        />
        <MovieTiles>
          {movies.map((movie) => (
            <MovieTile
              key={movie.id}
              id={movie.id}
              path={movie.poster_path}
              title={movie.title}
              release={movie.release_date}
              genre_ids={movie.genre_ids}
              genres={genresData.genres}
              vote={movie.vote_average}
              vote_amount={movie.vote_count}
            />
          ))}
        </MovieTiles>
      </Wrapper>
      <Footer
        totalPages={
          popularMoviesData.total_pages ? popularMoviesData.total_pages : 1
        }
        page={page}
      />
    </>
  );
};

export default PopularMoviesPage;
