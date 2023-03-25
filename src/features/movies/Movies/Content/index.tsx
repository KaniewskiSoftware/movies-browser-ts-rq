import { GenresObject } from "../../../../common/api/genres/genres";
import { MovieListResult } from "../../../../common/apiResponseTypes/movies/movies";
import Tile from "../../../../common/components/Tile";
import { TilesGrid } from "../../../../common/components/TilesGrid";
import { useResponsiveImageSize } from "../../../../common/hooks/useResponsiveImageSize";
import { buildImageURL } from "../../../../common/utils/buildImageURL";
import { toMovies } from "../../../../common/utils/routes";
import defaultMovie from "../../../../common/images/defaultMovie.svg";
import { PosterSize } from "../../../../common/utils/externalImagesProperties";
import { Wrapper } from "../../../../common/components/Wrapper";
import Title from "../../../../common/components/Title";

interface MoviesPageContentProps {
  genres: GenresObject;
  movies: MovieListResult[];
  query: string | number | null;
  totalResults: number;
}

/**
 * Content component displays a list of movie tiles based on the provided data.
 * It uses the TilesGrid, Tile, Title, and Wrapper components.
 */
const Content = ({
  genres,
  movies,
  query,
  totalResults,
}: MoviesPageContentProps) => {
  /**
   * Determines the appropriate poster size for the current screen resolution using
   * the useResponsiveImageSize custom hook and casts the result to PosterSize.
   * 
   * The type casting is necessary because TypeScript sometimes has difficulty
   * recognizing that the hook always returns the correct size type for all possible
   * image type keys, even though the hook ensures the proper type is returned.
   */
  const size = useResponsiveImageSize("poster") as PosterSize;
  return (
    <Wrapper>
      <Title
        title={
          !query
            ? "Popular movies"
            : `Search results for "${query}" (${totalResults})`
        }
      />
      <TilesGrid>
        {movies.map((movie) => (
          <Tile
            key={movie.id}
            linkTo={`${toMovies}/${movie.id}`}
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
    </Wrapper>
  );
};

export default Content;
