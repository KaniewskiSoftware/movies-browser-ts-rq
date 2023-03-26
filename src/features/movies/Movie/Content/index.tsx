import { MovieDetailsResponse } from "../../../../common/apiResponseTypes/movies/movieDetails";
import Tile from "../../../../common/components/Tile";
import { useResponsiveImageSize } from "../../../../common/hooks/useResponsiveImageSize";
import {
  BackdropSize,
  PosterSize,
  ProfileSize,
} from "../../../../common/utils/externalImagesProperties";
import { buildImageURL } from "../../../../common/utils/buildImageURL";
import Backdrop from "./Backdrop";
import { Wrapper } from "../../../../common/components/Wrapper";
import defaultPerson from "../../../../common/images/defaultPerson.svg";
import { createPropertyObject } from "../../../../common/utils/createPropertyObject";
import { TilesGrid } from "../../../../common/components/TilesGrid";
import { MovieCreditsResponse } from "../../../../common/apiResponseTypes/movies/movieCredits";
import { toPeople } from "../../../../common/utils/routes";
import { CreditsContainer } from "./styled";
import Title from "../../../../common/components/Title";

interface ContentProps {
  movie: MovieDetailsResponse;
  credits: MovieCreditsResponse;
}

const Content = ({ movie, credits }: ContentProps) => {
  /**
   * Determines the appropriate poster and backdrop image sizes for the current screen resolution using
   * the useResponsiveImageSize custom hook and casts the result to their corresponding size types.
   *
   * The type casting is necessary because TypeScript sometimes has difficulty
   * recognizing that the hook always returns the correct size type for all possible
   * image type keys, even though the hook ensures the proper type is returned.
   *
   * @type {BackdropSize}
   */
  const backdropSize = useResponsiveImageSize("backdrop") as BackdropSize;
  /**
   * @type {PosterSize}
   */
  const posterSize = useResponsiveImageSize("poster") as PosterSize;
  /**
   * @type {ProfileSize}
   */
  const profileSize = useResponsiveImageSize("profile") as ProfileSize;

  const properties = [
    createPropertyObject(movie.production_countries, "production_countries"),
    createPropertyObject(movie.release_date, "release_date"),
  ];
  return (
    <>
      <Backdrop
        backdrop={buildImageURL(backdropSize, movie.backdrop_path, "backdrop")}
        title={movie.original_title}
        vote={movie.vote_average}
        voteAmount={movie.vote_count}
      />

      <Wrapper $containerType="details">
        <Tile
          big
          imageURL={buildImageURL(posterSize, movie.poster_path, "poster")}
          title={movie.original_title}
          releaseDate={movie.release_date}
          metaData={properties}
          genresDetailed={movie.genres}
          tagsLargeGap
          vote={movie.vote_average}
          votesAmount={movie.vote_count}
          mediumRating
          description={movie.overview}
        />
        {!!credits && credits.cast && credits.cast.length > 0 && (
          <CreditsContainer>
            <Title title="Cast" styleType="movieCredits" />
            <TilesGrid $moreItems>
              {credits.cast.map((person) => (
                <Tile
                  key={person.id}
                  linkTo={`${toPeople}/${person.id}`}
                  imageURL={buildImageURL(
                    profileSize,
                    person.profile_path,
                    "profile"
                  )}
                  imagePlaceholder={defaultPerson}
                  contentTextCentered
                  title={person.name}
                  role={person.character}
                  smallTitle
                />
              ))}
            </TilesGrid>
          </CreditsContainer>
        )}

        {!!credits && credits.crew && credits.crew.length > 0 && (
          <CreditsContainer>
            <Title title="Crew" styleType="movieCredits" />
            <TilesGrid $moreItems>
              {credits.crew.map((person) => (
                <Tile
                  key={person.id}
                  linkTo={`${toPeople}/${person.id}`}
                  imageURL={buildImageURL(
                    profileSize,
                    person.profile_path,
                    "profile"
                  )}
                  imagePlaceholder={defaultPerson}
                  contentTextCentered
                  title={person.name}
                  role={person.department}
                  smallTitle
                />
              ))}
            </TilesGrid>
          </CreditsContainer>
        )}
      </Wrapper>
    </>
  );
};

export default Content;
