import { useParams } from "react-router-dom";
import { useGenres } from "../../../common/api/genres/genres";
import { usePersonCredits } from "../../../common/api/people/personCredits";
import { usePersonDetails } from "../../../common/api/people/personDetails";
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
const PersonDetailsPage = () => {
  const { id } = useParams();

  const {
    data: details,
    isLoading: detailsLoading,
    isError: detailsIsError,
  } = usePersonDetails(id!);

  const {
    data: genresData,
    isLoading: genresIsLoading,
    isError: genresIsError,
  } = useGenres();

  const {
    data: credits,
    isLoading: creditsIsLoading,
    isError: creditsIsError,
  } = usePersonCredits(id!);

  const isLoading = detailsLoading || genresIsLoading || creditsIsLoading;
  const isError = detailsIsError || genresIsError || creditsIsError;

  return (
    <Page isLoading={isLoading} isError={isError} hasResults={!!details}>
      <Content person={details ?? {}} credits={credits ?? {}} genres={genresData.genres} />
    </Page>
  );
};

export default PersonDetailsPage;
