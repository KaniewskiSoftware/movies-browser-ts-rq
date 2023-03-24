import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../../common/api/movies/movieDetails";
import Page from "../../../common/components/Page";
import PageContent from "../../../common/components/Page/PageContent";

const MovieDetailsPage = () => {
  const { id } = useParams();

  console.log(id);

  const {
    data,
    isLoading,
    isError
  } = useMovieDetails(id!);
  console.log(data, isError);
  return (
    <Page
    isLoading={isLoading}
    isError={isError}
    hasResults={!!(data)}
    >
      <PageContent>
        <p>Hi there!</p>
      </PageContent>
    </Page>
  )
};

export default MovieDetailsPage;
