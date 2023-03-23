import { GenresObject } from "../../../../common/api/genres/genres";
import { MovieListResult } from "../../../../common/apiResponseTypes/movies/movies";
import PageContent from "../../../../common/components/Page/PageContent";
import Tile from "../../../../common/components/Tile";
import { TilesGrid } from "../../../../common/components/TilesGrid";
import { useResponsivePosterSize } from "../../../../common/hooks/useResponsivePosterSize";
import { buildPosterURL } from "../../../../common/utils/buildPosterURL";
import { toMovies } from "../../../../common/utils/routes";
import defaultMovie from "../../../../common/images/defaultMovie.svg";

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
}: MoviesPageContentProps) => {
  const posterSize = useResponsivePosterSize();
  return (
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
            linkTo={`${toMovies}${movie.id}`}
            horizontalOnMobile
            imageURL={buildPosterURL(posterSize, movie.poster_path)}
            imagePlaceholder={defaultMovie}
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
};

export default MoviesPageContent;
