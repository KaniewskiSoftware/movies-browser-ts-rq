import { useParams } from "react-router-dom";
import { useMovieCredits } from "../../../common/api/movies/movieCredits";
import { useMovieDetails } from "../../../common/api/movies/movieDetails";
import Page from "../../../common/components/Page";
import Content from "./Content";

/**
 * The MovieDetailsPage component fetches and displays detailed information
 * about a single movie. It uses the useMovieDetails custom hook to fetch
 * data about a movie with a given ID from the API, and renders the Page and
 * Content components with the fetched data.
 *
 * @returns A React component that renders detailed information about a movie.
 */
const MovieDetailsPage = () => {
  const { id } = useParams();
  const {
    data: details,
    isLoading: detailsLoading,
    isError: detailsIsError,
  } = useMovieDetails(id!);
  const {
    data: credits,
    isLoading: creditsIsLoading,
    isError: creditsIsError,
  } = useMovieCredits(id!);

  const isLoading = detailsLoading || creditsIsLoading;
  const isError = detailsIsError || creditsIsError;
  return (
    <Page isLoading={isLoading} isError={isError} hasResults={!!details}>
      <Content movie={details ?? {}} credits={credits ?? {}} />
    </Page>
  );
};

export default MovieDetailsPage;
