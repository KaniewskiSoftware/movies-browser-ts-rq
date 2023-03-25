import { MovieDetailsResponse } from "../../../../common/apiResponseTypes/movies/movieDetails";
import Tile from "../../../../common/components/Tile";
import { useResponsiveImageSize } from "../../../../common/hooks/useResponsiveImageSize";
import {
  BackdropSize,
  PosterSize,
} from "../../../../common/utils/externalImagesProperties";
import { buildImageURL } from "../../../../common/utils/buildImageURL";
import Backdrop from "./Backdrop";
import { Wrapper } from "../../../../common/components/Wrapper";

interface MoviesPageContentProps {
  movie: MovieDetailsResponse;
}

const Content = ({ movie }: MoviesPageContentProps) => {
  /**
   * Determines the appropriate poster size for the current screen resolution using
   * the useResponsiveImageSize custom hook and casts the result to PosterSize.
   *
   * The type casting is necessary because TypeScript sometimes has difficulty
   * recognizing that the hook always returns the correct size type for all possible
   * image type keys, even though the hook ensures the proper type is returned.
   */
  const backdropSize = useResponsiveImageSize("backdrop") as BackdropSize;
  const posterSize = useResponsiveImageSize("poster") as PosterSize;
  console.log(movie);
  return (
    <>
      <Backdrop
        backdrop={buildImageURL(backdropSize, movie.backdrop_path, "backdrop")}
        title={movie.original_title}
        vote={movie.vote_average}
        voteAmount={movie.vote_count}
      />

      <Wrapper>
        <Tile
          imageURL={buildImageURL(posterSize, movie.poster_path, "poster")}
          title={movie.original_title}
          releaseDate={movie.release_date}
          genresDetailed={movie.genres}
        />
      </Wrapper>
    </>
  );
};

export default Content;
