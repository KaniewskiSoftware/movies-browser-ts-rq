import { GenresObject } from "../api/genres/genres";
import { Tag, Tags } from "../Tags";
import {
  Content,
  GreyText,
  Image,
  ImageBackground,
  MovieLink,
  Rate,
  Rating,
  Star,
  Tile,
  Title,
} from "./styled";

interface MovieTileProps {
  id?: number;
  path?: string | null;
  title?: string;
  release?: string;
  undertaking?: string;
  genre_ids?: number[];
  genres?: GenresObject;
  vote?: number;
  vote_amount?: number;
}

const MovieTile = ({
  id,
  path,
  title,
  release,
  undertaking,
  genre_ids,
  genres,
  vote,
  vote_amount,
}: MovieTileProps) => {
  return (
    <MovieLink key={id} to={`/movies/${id}`}>
      <Tile>
        <ImageBackground>
          {path ? (
            <Image src={`https://image.tmdb.org/t/p/w500/${path}`} alt="" />
          ) : (
            <Image />
          )}
        </ImageBackground>
        <Content>
          {title && <Title>{title}</Title>}
          {release && undertaking ? (
            <GreyText>
              {undertaking} ({release.slice(0, 4)})
            </GreyText>
          ) : release ? (
            <GreyText>{release.slice(0, 4)}</GreyText>
          ) : undertaking ? (
            <GreyText>{undertaking}</GreyText>
          ) : null}
          {genre_ids && genres ? (
            <Tags>
              {genre_ids.map((genre_id) => (
                <Tag key={genre_id}>{genres[genre_id]}</Tag>
              ))}
            </Tags>
          ) : null}
          {!!vote && vote > 0 && (
            <Rating>
              <Star />
              <Rate>{vote.toFixed(2)}</Rate>
              {vote_amount && <GreyText>{`${vote_amount} votes`}</GreyText>}
            </Rating>
          )}
        </Content>
      </Tile>
    </MovieLink>
  );
};

export default MovieTile;
