import { GenresObject } from "../../api/genres/genres";
import { getTagsFromGenres } from "../../utils/getTagsFromGenres";
import Tags from "../Tags";
import Rating from "./Rating";
import RoleAndRelease from "./RoleAndRelease";
import { Content, Image, TileContainer, Title } from "./styled";
import Wrapper from "./Wrapper";

interface TileProps {
  linkTo?: string;
  horizontalOnMobile?: boolean;
  imageURL?: string | null;
  imagePlaceholder?: string;
  contentTextCentered?: boolean;
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
  contentTextCentered,
  title,
  smallTitle,
  releaseDate,
  smallText,
  role,
  genreIds,
  genres,
  vote,
  votesAmount,
}: TileProps) => {
  const tags = genreIds && genres && getTagsFromGenres(genreIds, genres);
  
  return (
    <Wrapper linkTo={linkTo}>
      <TileContainer $horizontalOnMobile={horizontalOnMobile}>
        <Image
          $imageURL={imageURL ?? imagePlaceholder}
          $noImage={!imageURL}
          $horizontalOnMobile={horizontalOnMobile}
        />
        <Content $textCentered={contentTextCentered}>
          {title && <Title $smallTitle={smallTitle}>{title}</Title>}
          <RoleAndRelease
            role={role}
            releaseDate={releaseDate}
            smallText={smallText}
          />
          {tags && <Tags tags={tags} />}
          <Rating vote={vote} votesAmount={votesAmount} smallText={smallText} />
        </Content>
      </TileContainer>
    </Wrapper>
  );
};
export default Tile;
