import { useParams } from "react-router-dom";
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
  const { data, isLoading, isError } = useMovieDetails(id!);
  return (
    <Page isLoading={isLoading} isError={isError} hasResults={!!data}>
      <Content movie={data ?? {}} />
    </Page>
  );
};

export default MovieDetailsPage;
