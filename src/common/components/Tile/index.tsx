import { getTagsFromGenres } from "../../utils/getTagsFromGenres";
import { Genre } from "../../api/types/genres/genres";
import { GenresObject } from "../../utils/convertGenresArrayToObject";
import { PropertyObject } from "../../utils/createPropertyObject";
import { MetaData } from "./MetaData";
import Tags from "./Tags";
import Rating from "../Rating";
import RoleAndRelease from "./RoleAndRelease";
import Link from "./Link";
import { Content, Image, TileContainer, Title } from "./styled";
import { Description } from "../Text";

interface TileProps {
  big?: boolean;
  linkTo?: string;
  horizontalOnMobile?: boolean;
  imageURL?: string | null;
  imagePlaceholder?: string;
  contentTextCentered?: boolean;
  title?: string;
  smallTitleOnTiny?: boolean;
  releaseDate?: string;
  smallRoleAndRelease?: boolean;
  role?: string;
  metaData?: PropertyObject[];
  genreIds?: number[];
  genres?: GenresObject;
  genresDetailed?: Genre[];
  tagsLargeGap?: boolean;
  vote?: number;
  votesAmount?: number;
  mediumRating?: boolean;
  description?: string | null;
}

const Tile = ({
  big,
  linkTo,
  horizontalOnMobile,
  imageURL,
  imagePlaceholder,
  contentTextCentered,
  title,
  smallTitleOnTiny,
  releaseDate,
  smallRoleAndRelease,
  role,
  metaData,
  genreIds,
  genres,
  genresDetailed,
  tagsLargeGap,
  vote,
  votesAmount,
  mediumRating,
  description,
}: TileProps) => {
  const tags = getTagsFromGenres(genreIds, genres, genresDetailed);

  return (
    <Link linkTo={linkTo}>
      <TileContainer $horizontalOnMobile={horizontalOnMobile} $big={big}>
        <Image
          $imageURL={imageURL ?? imagePlaceholder}
          $noImage={!imageURL}
          $horizontalOnMobile={horizontalOnMobile}
          $big={big}
        />
        <Content $textCentered={contentTextCentered} $big={big}>
          {title && (
            <Title $smallOnTiny={smallTitleOnTiny} $big={big}>
              {title}
            </Title>
          )}
          <RoleAndRelease
            role={role}
            releaseDate={releaseDate}
            smallText={smallRoleAndRelease}
            bigFont={big}
          />
          {!!metaData && <MetaData properties={metaData} />}
          {tags && <Tags tags={tags} largeGap={tagsLargeGap} />}
          <Rating vote={vote} votesAmount={votesAmount} medium={mediumRating} />
          {!!description && (
            <Description $displayOnDesktop>{description}</Description>
          )}
        </Content>
        {!!description && (
          <Description $displayOnMobile>{description}</Description>
        )}
      </TileContainer>
    </Link>
  );
};
export default Tile;
