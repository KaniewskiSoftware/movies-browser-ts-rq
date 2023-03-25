import { PeopleListResult } from "../../../../common/apiResponseTypes/people/popularPeople";
import Tile from "../../../../common/components/Tile";
import { TilesGrid } from "../../../../common/components/TilesGrid";
import { useResponsiveImageSize } from "../../../../common/hooks/useResponsiveImageSize";
import { ProfileSize } from "../../../../common/utils/externalImagesProperties";
import { buildImageURL } from "../../../../common/utils/buildImageURL";
import { toPeople } from "../../../../common/utils/routes";
import { Wrapper } from "../../../../common/components/Wrapper";
import Title from "../../../../common/components/Title";

interface PopularMoviesPageContentProps {
  people: PeopleListResult[];
  query: string | number | null;
  totalResults: number;
}

/**
 * Content component displays a list of movie tiles based on the provided data.
 * It uses the TilesGrid, Tile, Title, and Wrapper components.
 */
const Content = ({
  people,
  query,
  totalResults,
}: PopularMoviesPageContentProps) => {
  /**
   * Determines the appropriate poster size for the current screen resolution using
   * the useResponsiveImageSize custom hook and casts the result to PosterSize.
   * 
   * The type casting is necessary because TypeScript sometimes has difficulty
   * recognizing that the hook always returns the correct size type for all possible
   * image type keys, even though the hook ensures the proper type is returned.
   */
  const size = useResponsiveImageSize("profile") as ProfileSize;
  return (
    <Wrapper>
      <Title
        title={
          !query
            ? "Popular people"
            : `Search results for "${query}" (${totalResults})`
        }
      />
      <TilesGrid $moreItems>
        {people.map((person) => (
          <Tile
            key={person.id}
            linkTo={`${toPeople}/${person.id}`}
            imageURL={buildImageURL(size, person.profile_path, "profile")}
            contentTextCentered
            title={person.name}
            smallTitle
          />
        ))}
      </TilesGrid>
    </Wrapper>
  );
};
export default Content;
