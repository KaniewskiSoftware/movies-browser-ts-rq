import { PersonCreditsResponse } from "../../../../common/apiResponseTypes/people/personCredits";
import { PersonDetailsResponse } from "../../../../common/apiResponseTypes/people/personDetails";
import Tile from "../../../../common/components/Tile";
import { TilesGrid } from "../../../../common/components/TilesGrid";
import Title from "../../../../common/components/Title";
import { Wrapper } from "../../../../common/components/Wrapper";
import { useResponsiveImageSize } from "../../../../common/hooks/useResponsiveImageSize";
import { buildImageURL } from "../../../../common/utils/buildImageURL";
import { GenresObject } from "../../../../common/utils/convertGenresArrayToObject";
import { createPropertyObject } from "../../../../common/utils/createPropertyObject";
import defaultMovie from "../../../../common/images/defaultMovie.svg";
import {
  PosterSize,
  ProfileSize,
} from "../../../../common/utils/externalImagesProperties";
import { toMovies } from "../../../../common/utils/routes";

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

  const properties = [
    createPropertyObject("Date of Birth", person.birthday),
    createPropertyObject("Place of Birth", person.place_of_birth),
    createPropertyObject("Death Date", person.deathday),
  ];

  return (
    <Wrapper $containerType="details">
      <Tile
        big
        imageURL={buildImageURL(profileSize, person.profile_path, "profile")}
        title={person.name}
        smallTitleOnTiny
        metaData={properties}
        description={person.biography}
      />
      {credits.cast && credits.cast.length > 0 ? (
        <Wrapper $containerType="credits">
          <Title
            title={`Movies - cast (${credits.cast.length})`}
            styleType="personCredits"
          />
          <TilesGrid>
            {credits.cast.map((movie) => (
              <Tile
                key={movie.id}
                linkTo={`${toMovies}/${movie.id}`}
                horizontalOnMobile
                imageURL={buildImageURL(
                  posterSize,
                  movie.poster_path,
                  "poster"
                )}
                imagePlaceholder={defaultMovie}
                title={movie.title}
                releaseDate={movie.release_date}
                smallRoleAndRelease
                genreIds={movie.genre_ids}
                genres={genres}
                vote={movie.vote_average}
                votesAmount={movie.vote_count}
              />
            ))}
          </TilesGrid>
        </Wrapper>
      ) : null}
      {credits.crew && credits.crew.length > 0 ? (
        <Wrapper $containerType="credits">
          <Title
            title={`Movies - crew (${credits.crew.length})`}
            styleType="personCredits"
          />
          <TilesGrid>
            {credits.crew.map((movie) => (
              <Tile
                key={movie.id}
                linkTo={`${toMovies}/${movie.id}`}
                horizontalOnMobile
                imageURL={buildImageURL(
                  posterSize,
                  movie.poster_path,
                  "poster"
                )}
                imagePlaceholder={defaultMovie}
                title={movie.title}
                releaseDate={movie.release_date}
                smallRoleAndRelease
                genreIds={movie.genre_ids}
                genres={genres}
                vote={movie.vote_average}
                votesAmount={movie.vote_count}
              />
            ))}
          </TilesGrid>
        </Wrapper>
      ) : null}
    </Wrapper>
  );
};

export default Content;
