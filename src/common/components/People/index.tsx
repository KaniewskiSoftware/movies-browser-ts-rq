import {
  FullName,
  PersonLink,
  Portrait,
  PortraitBackground,
  Role,
  Storage,
  Tile,
} from "./styled";

interface PersonProps {
  path?: string;
  name?: string;
  role?: string;
  id: number;
}

const PersonTile = ({ path, name, role, id }: PersonProps) => (
  <PersonLink key={name} to={`/people/${id}`}>
    <Tile>
      <PortraitBackground>
        {path ? (
          <Portrait
            alt="portrait"
            src={`https://image.tmdb.org/t/p/w500/${path}`}
          />
        ) : (
          <Portrait as="div" />
        )}
      </PortraitBackground>
      <Storage>
        <FullName>{name}</FullName>
        <Role>{role}</Role>
      </Storage>
    </Tile>
  </PersonLink>
);

export default PersonTile;
