import { GenresObject } from "../../../../common/api/genres/genres";
import { MovieListResult } from "../../../../common/apiResponseTypes/movies/movies";
import MovieTile from "../../../../common/components/Movies";
import { MovieTiles } from "../../../../common/components/Movies/Essentials";
import Title from "../../../../common/components/Title";
import { Wrapper } from "../../../../common/components/Wrapper";

interface MoviesPageContentProps {
  genres: GenresObject;
  movies: MovieListResult[];
  query: string | number | null;
  totalResults: number;
}

const MoviesPageContent = ({
  genres,
  movies,
  query,
  totalResults,
}: MoviesPageContentProps) => (
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

export default MoviesPageContent;
