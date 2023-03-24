import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../../common/api/movies/movieDetails";
import Page from "../../../common/components/Page";
import Content from "./Content";

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
