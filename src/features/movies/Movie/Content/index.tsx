import { MovieDetailsResponse } from "../../../../common/api/types/movies/movieDetails";
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
import { MovieCreditsResponse } from "../../../../common/api/types/movies/movieCredits";
import { toPeople } from "../../../../common/utils/routes";
import Title from "../../../../common/components/Title";

interface ContentProps {
  movie: MovieDetailsResponse;
  credits: MovieCreditsResponse;
}

const Content = ({ movie, credits }: ContentProps) => {
  const backdropSize = useResponsiveImageSize("backdrop") as BackdropSize;
  const posterSize = useResponsiveImageSize("poster") as PosterSize;
  const profileSize = useResponsiveImageSize("profile") as ProfileSize;

  const properties = [
    createPropertyObject("Production", movie.production_countries),
    createPropertyObject("Relase Date", movie.release_date),
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
        {credits.cast && credits.cast.length > 0 && (
          <Wrapper $containerType="credits">
            <Title title="Cast" styleType="movieCredits" />
            <TilesGrid $moreItems>
              {credits.cast.map((person, index) => (
                <Tile
                  key={index}
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
                  smallTitleOnTiny
                />
              ))}
            </TilesGrid>
          </Wrapper>
        )}

        {credits.crew && credits.crew.length > 0 && (
          <Wrapper $containerType="credits">
            <Title title="Crew" styleType="movieCredits" />
            <TilesGrid $moreItems>
              {credits.crew.map((person, index) => (
                <Tile
                  key={index}
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
                  smallTitleOnTiny
                />
              ))}
            </TilesGrid>
          </Wrapper>
        )}
      </Wrapper>
    </>
  );
};

export default Content;
