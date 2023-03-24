import { GenresObject } from "../../../../common/api/genres/genres";
import { MovieListResult } from "../../../../common/apiResponseTypes/movies/movies";
import PageContent from "../../../../common/components/Page/PageContent";
import Tile from "../../../../common/components/Tile";
import { TilesGrid } from "../../../../common/components/TilesGrid";
import { PosterSize, useResponsiveImageSize } from "../../../../common/hooks/useResponsiveImageSize";
import { buildImageURL } from "../../../../common/utils/buildImageURL";
import { toMovies } from "../../../../common/utils/routes";
import defaultMovie from "../../../../common/images/defaultMovie.svg";

interface MoviesPageContentProps {
  genres: GenresObject;
  movies: MovieListResult[];
  query: string | number | null;
  totalResults: number;
}

const Content = ({
  genres,
  movies,
  query,
  totalResults,
}: MoviesPageContentProps) => {
  const size = useResponsiveImageSize("poster") as PosterSize;
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
            linkTo={`${toMovies}${movie.id}`}
            horizontalOnMobile
            imageURL={buildImageURL(size, movie.poster_path, "poster")}
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

export default Content;
