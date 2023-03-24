import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <p>ID: {id}</p>
  )
};

export default MovieDetailsPage;
