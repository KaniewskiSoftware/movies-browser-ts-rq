import { useGenres } from "../../../common/api/genres/genres";
import MovieTile from "../../../common/Movies";
import { MovieTiles } from "../../../common/Movies/Essentials";

const PopularMoviesPage = () => {
  const genres = useGenres();
  console.log(genres);

  return <h1>Hi</h1>;
};

export default PopularMoviesPage;
