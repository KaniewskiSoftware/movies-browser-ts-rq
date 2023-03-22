import { PeopleListResult } from "../../../../common/apiResponseTypes/people/popularPeople";
import PageContent from "../../../../common/components/Page/PageContent";
import PersonTile from "../../../../common/components/People";
import { PeopleTiles } from "../../../../common/components/People/Essentials";

interface PopularMoviesPageContentProps {
  people: PeopleListResult[];
  query: string | number | null;
  totalResults: number;
}

const PeoplePageContent = ({
  people,
  query,
  totalResults,
}: PopularMoviesPageContentProps) => (
  <PageContent
    title={
      !query
        ? "Popular people"
        : `Search results for "${query}" (${totalResults})`
    }
  >
    <PeopleTiles>
      {people.map((person, index) => (
        <PersonTile
          key={person.id}
          path={person.profile_path}
          name={person.name}
          id={person.id ?? index}
        />
      ))}
    </PeopleTiles>
  </PageContent>
);

export default PeoplePageContent;
