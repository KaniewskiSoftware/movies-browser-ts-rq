import { GenresObject } from "../../api/genres/genres";
import { Tag, Tags } from "../Tags";
import { GreyText } from "./GreyText";
import RoleAndRelease from "./RoleAndRelease";
import {
  Content,
  Image,
  Rate,
  Rating,
  StyledStar,
  TileContainer,
  Title,
} from "./styled";
import Wrapper from "./Wrapper";

interface TileProps {
  linkTo?: string;
  horizontalOnMobile?: boolean;
  imageURL?: string | null;
  imagePlaceholder?: string;
  title?: string;
  smallTitle?: boolean;
  releaseDate?: string;
  smallText?: boolean;
  role?: string;
  genreIds?: number[];
  genres?: GenresObject;
  vote?: number;
  votesAmount?: number;
}

const Tile = ({
  linkTo,
  horizontalOnMobile,
  imageURL,
  imagePlaceholder,
  title,
  smallTitle,
  releaseDate,
  smallText,
  role,
  genreIds,
  genres,
  vote,
  votesAmount,
}: TileProps) => (
  <Wrapper linkTo={linkTo}>
    <TileContainer $horizontalOnMobile={horizontalOnMobile}>
      <Image
        $imageURL={imageURL || imagePlaceholder}
        $noImage={!imageURL}
        $horizontalOnMobile={horizontalOnMobile}
      />
      <Content>
        {title && <Title $smallTitle={smallTitle}>{title}</Title>}
        <RoleAndRelease
          role={role}
          releaseDate={releaseDate}
          smallText={smallText}
        />
        {genreIds && genres ? (
          <Tags>
            {genreIds.map((genreId) => (
              <Tag key={genreId}>{genres[genreId]}</Tag>
            ))}
          </Tags>
        ) : null}
        {!!vote && vote > 0 && (
          <Rating>
            <StyledStar />
            <Rate>{vote.toFixed(2)}</Rate>
            {votesAmount && (
              <GreyText
                $smallText={smallText}
              >{`${votesAmount} votes`}</GreyText>
            )}
          </Rating>
        )}
      </Content>
    </TileContainer>
  </Wrapper>
);
export default Tile;
