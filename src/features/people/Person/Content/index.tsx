import { PersonCreditsResponse } from "../../../../common/apiResponseTypes/people/personCredits";
import { PersonDetailsResponse } from "../../../../common/apiResponseTypes/people/personDetails";
import Tile from "../../../../common/components/Tile";
import { Wrapper } from "../../../../common/components/Wrapper";
import { useResponsiveImageSize } from "../../../../common/hooks/useResponsiveImageSize";
import { buildImageURL } from "../../../../common/utils/buildImageURL";
import { GenresObject } from "../../../../common/utils/convertGenresArrayToObject";
import { createPropertyObject } from "../../../../common/utils/createPropertyObject";
import {
  PosterSize,
  ProfileSize,
} from "../../../../common/utils/externalImagesProperties";

interface ContentProps {
  person: PersonDetailsResponse;
  genres: GenresObject;
  credits: PersonCreditsResponse;
}
/**
 * The Content component displays the main content of the person details page,
 * person image, date and place of birth, death date, biography, movie-cast and movie-crew information.
 *
 * @param {PersonDetailsResponse} person - The person details data to be displayed.
 * @param {PersonCreditsResponse} credits - The person credits data to be displayed.
 * @param {GenresObject} genres - genres object consists of ids as keys and names as values.
 *
 * @returns {JSX.Element} A component that displays the main content of the movie details page.
 */
const Content = ({ person, credits, genres }: ContentProps) => {
  /**
   * Determines the appropriate poster and backdrop image sizes for the current screen resolution using
   * the useResponsiveImageSize custom hook and casts the result to their corresponding size types.
   *
   * The type casting is necessary because TypeScript sometimes has difficulty
   * recognizing that the hook always returns the correct size type for all possible
   * image type keys, even though the hook ensures the proper type is returned.
   *
   * @type {PosterSize}
   */
  const posterSize = useResponsiveImageSize("poster") as PosterSize;
  /**
   * @type {ProfileSize}
   */
  const profileSize = useResponsiveImageSize("profile") as ProfileSize;

  //   const properties = [
  //     createPropertyObject(person.production_countries, "production_countries"),
  //     createPropertyObject(movie.release_date, "release_date"),
  //   ];
  return (
    <Wrapper $containerType="details">
      <Tile
        big
        imageURL={buildImageURL(profileSize, person.profile_path, "profile")}
        title={person.name}
        //   metaData={properties}
        description={person.biography}
      />
    </Wrapper>
  );
};

export default Content;
