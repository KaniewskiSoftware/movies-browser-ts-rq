import { useParams } from "react-router-dom";
import { useMovieCredits } from "../../../common/api/hooks/movies/useMovieCredits";
import { useMovieDetails } from "../../../common/api/hooks/movies/useMovieDetails";
import Page from "../../../common/components/Page";
import Content from "./Content";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const {
    data: details,
    isLoading: detailsLoading,
    isError: detailsIsError,
    error: detailsError,
  } = useMovieDetails(id!);
  const {
    data: credits,
    isLoading: creditsIsLoading,
    isError: creditsIsError,
    error: creditsError,
  } = useMovieCredits(id!);

  const isLoading = detailsLoading || creditsIsLoading;
  const isError = detailsIsError || creditsIsError;
  const errorMessage = detailsError?.errorMessage || creditsError?.errorMessage;
  return (
    <Page
      isLoading={isLoading}
      isError={isError}
      hasResults={!!details}
      errorMessage={errorMessage}
    >
      <Content movie={details ?? {}} credits={credits ?? {}} />
    </Page>
  );
};

export default MovieDetailsPage;
