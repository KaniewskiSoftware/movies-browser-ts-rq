import { GenresObject } from "../../../../common/api/genres/genres";
import { MovieListResult } from "../../../../common/apiResponseTypes/movies/movies";
import MovieTile from "../../../../common/Movies";
import { MovieTiles } from "../../../../common/Movies/Essentials";
import Title from "../../../../common/Title";
import { Wrapper } from "../../../../common/Wrapper";

interface PopularMoviesPageContentProps {
  genres: GenresObject;
  movies: MovieListResult[];
  query: string | number | null;
  totalResults: number;
}

const PopularMoviesPageContent = ({
  genres,
  movies,
  query,
  totalResults,
}: PopularMoviesPageContentProps) => (
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

export default PopularMoviesPageContent;
