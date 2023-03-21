import { PeopleListResult } from "../../../../common/apiResponseTypes/people/popularPeople";
import Person from "../../../../common/People";
import {
  PeopleContainer,
  PeopleTiles,
} from "../../../../common/People/Essentials";
import Title from "../../../../common/Title";
import { Wrapper } from "../../../../common/Wrapper";

interface PopularMoviesPageContentProps {
  people: PeopleListResult[];
  query: string | number | null;
  totalResults: number;
}

const PopularPeoplePageContent = ({
  people,
  query,
  totalResults,
}: PopularMoviesPageContentProps) => (
  <Wrapper>
    <PeopleContainer>
      <Title
        title={
          !query
            ? "Popular people"
            : `Search results for "${query}" (${totalResults})`
        }
      />
      <PeopleTiles>
        {people.map((person, index) => (
          <Person
            key={person.id}
            path={person.profile_path}
            name={person.name}
            id={person.id ?? index}
          />
        ))}
      </PeopleTiles>
    </PeopleContainer>
  </Wrapper>
);

export default PopularPeoplePageContent;
