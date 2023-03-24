import { MovieDetailsResponse } from "../../../../common/apiResponseTypes/movies/movieDetails";
import PageContent from "../../../../common/components/Page/PageContent";
import Tile from "../../../../common/components/Tile";
import { useResponsiveImageSize } from "../../../../common/hooks/useResponsiveImageSize";
import { BackdropSize } from "../../../../common/types/imageTypes";
import { buildImageURL } from "../../../../common/utils/buildImageURL";
import Backdrop from "./Backdrop";

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

      <PageContent>
        <Tile />
      </PageContent>
    </>
  );
};

export default Content;
