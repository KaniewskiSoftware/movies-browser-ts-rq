import { PeopleListResult } from "../../../../common/apiResponseTypes/people/popularPeople";
import PageContent from "../../../../common/components/Page/PageContent";
import Tile from "../../../../common/components/Tile";
import { TilesGrid } from "../../../../common/components/TilesGrid";
import { useResponsiveImageSize } from "../../../../common/hooks/useResponsiveImageSize";
import { ProfileSize } from "../../../../common/utils/externalImagesProperties";
import { buildImageURL } from "../../../../common/utils/buildImageURL";
import { toPeople } from "../../../../common/utils/routes";

interface PopularMoviesPageContentProps {
  people: PeopleListResult[];
  query: string | number | null;
  totalResults: number;
}

const Content = ({
  people,
  query,
  totalResults,
}: PopularMoviesPageContentProps) => {
  const size = useResponsiveImageSize("profile") as ProfileSize;
  return (
    <PageContent
      title={
        !query
          ? "Popular people"
          : `Search results for "${query}" (${totalResults})`
      }
    >
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
    </PageContent>
  );
};
export default Content;
