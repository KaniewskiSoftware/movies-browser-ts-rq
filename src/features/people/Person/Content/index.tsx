import { PersonCreditsResponse } from "../../../../common/api/types/people/personCredits";
import { PersonDetailsResponse } from "../../../../common/api/types/people/personDetails";
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

const Content = ({ person, credits, genres }: ContentProps) => {
  const posterSize = useResponsiveImageSize("poster") as PosterSize;
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
            {credits.cast.map((movie, index) => (
              <Tile
                key={index}
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
                role={movie.character}
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
            {credits.crew.map((movie, index) => (
              <Tile
                key={index}
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
                role={movie.job}
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
