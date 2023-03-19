import { useGenres } from "../../../common/api/genres/genres";
import { usePopularMovies } from "../../../common/api/movies/popularMovies";
import MovieTile from "../../../common/Movies";
import { MovieTiles } from "../../../common/Movies/Essentials";
import {
  searchQueryParamName,
  useQueryParameter,
} from "../../../common/queryParameters";
import ErrorPage from "../../../common/states/ErrorPage";
import Loader from "../../../common/states/Loader";
import Title from "../../../common/Title";
import { Wrapper } from "../../../common/Wrapper";

const PopularMoviesPage = () => {
  const page = 1;
  const query = useQueryParameter(searchQueryParamName);
  const {
    data: genres, // it's usage is simplified by conversion to object inside the hook.
    // error: genresError,
    isLoading: genresLoading,
    isError: genresIsError,
  } = useGenres();

  const {
    data: popularMoviesData,
    // error: popularMoviesError,
    isLoading: popularMoviesLoading,
    isError: popularMoviesIsError,
  } = usePopularMovies(page);

  const isLoading = popularMoviesLoading || genresLoading;
  const isError = popularMoviesIsError || genresIsError;
  // const error = popularMoviesError || genresError;

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !genres || !popularMoviesData) {
    return <ErrorPage />;
  }

  if (popularMoviesData.results && genres) {
    const { results: movies } = popularMoviesData;
    const { total_results: totalResults } = popularMoviesData;

    return (
      <Wrapper>
        <Title
          title={
            !query
              ? "Popular movies"
              : `Search results for "${query}" (${totalResults})`
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
              genres={genres}
              vote={movie.vote_average}
              vote_amount={movie.vote_count}
            />
          ))}
        </MovieTiles>
      </Wrapper>
    );
  }

  return <ErrorPage />;
};

export default PopularMoviesPage;
