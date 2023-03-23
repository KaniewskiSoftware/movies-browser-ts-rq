import { GenresObject } from "../../../../common/api/genres/genres";
import { MovieListResult } from "../../../../common/apiResponseTypes/movies/movies";
import PageContent from "../../../../common/components/Page/PageContent";
import Tile from "../../../../common/components/Tile";
import { TilesGrid } from "../../../../common/components/TilesGrid";

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
  <PageContent
    title={
      !query
        ? "Popular movies"
        : `Search results for "${query}" (${totalResults})`
    }
  >
    <TilesGrid>
      {movies.map((movie) => (
        <Tile
          key={movie.id}
          id={movie.id}
          imageURL={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          title={movie.title}
          releaseDate={movie.release_date}
          smallText
          genreIds={movie.genre_ids}
          genres={genres}
          vote={movie.vote_average}
          votesAmount={movie.vote_count}
        />
      ))}
    </TilesGrid>
  </PageContent>
);

export default MoviesPageContent;
