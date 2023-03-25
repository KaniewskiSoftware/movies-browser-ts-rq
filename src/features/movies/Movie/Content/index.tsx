import { MovieDetailsResponse } from "../../../../common/apiResponseTypes/movies/movieDetails";
import Tile from "../../../../common/components/Tile";
import { useResponsiveImageSize } from "../../../../common/hooks/useResponsiveImageSize";
import { BackdropSize } from "../../../../common/utils/externalImagesProperties";
import { buildImageURL } from "../../../../common/utils/buildImageURL";
import Backdrop from "./Backdrop";
import { Wrapper } from "../../../../common/components/Wrapper";

interface MoviesPageContentProps {
  movie: MovieDetailsResponse;
}

const Content = ({ movie }: MoviesPageContentProps) => {
  const size = useResponsiveImageSize("backdrop") as BackdropSize;
  return (
    <>
      <Backdrop
        backdrop={buildImageURL(size, movie.backdrop_path, "backdrop")}
        title={movie.original_title}
        vote={movie.vote_average}
        voteAmount={movie.vote_count}
      />

      <Wrapper>
        <Tile />
      </Wrapper>
    </>
  );
};

export default Content;
