import { GenresObject } from "../../api/genres/genres";
import { getTagsFromGenres } from "../../utils/getTagsFromGenres";
import Tags from "./Tags";
import Rating from "../Rating";
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

/**
 * The Tile component is used for displaying various pieces of information
 * in a structured format, such as title, release date, role, genre tags, and rating.
 *
 * @param linkTo - (Optional) A string representing the URL to navigate to when the tile is clicked.
 * @param horizontalOnMobile - (Optional) A boolean indicating whether the tile should display horizontally on mobile devices.
 * @param imageURL - (Optional) A string representing the URL of the image to be displayed in the tile.
 * @param imagePlaceholder - (Optional) A string representing the URL of the image placeholder.
 * @param contentTextCentered - (Optional) A boolean indicating whether the content text should be centered.
 * @param title - (Optional) A string representing the title of the tile.
 * @param smallTitle - (Optional) A boolean indicating whether the title should be rendered with a smaller font size.
 * @param releaseDate - (Optional) A string representing the release date of the movie or TV show.
 * @param smallText - (Optional) A boolean indicating whether the text should be rendered with a smaller font size.
 * @param role - (Optional) A string representing the role of the actor in the movie or TV show.
 * @param genreIds - (Optional) An array of numbers representing the genre IDs of the movie or TV show.
 * @param genres - (Optional) An object containing information about the genres.
 * @param vote - (Optional) A number representing the rating of the movie or TV show.
 * @param votesAmount - (Optional) A number representing the total number of votes for the movie or TV show.
 */
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
  /**
   * The 'tags' constant is created by checking if both 'genreIds' and 'genres' are truthy values.
   * If they are, the 'getTagsFromGenres' function is called with the 'genreIds' and 'genres' as arguments.
   * This function maps the provided genre IDs to their corresponding genre names using the provided GenresObject.
   * The resulting array of genre names is then assigned to the 'tags' constant.
   * If either 'genreIds' or 'genres' is falsy, the 'tags' constant will be assigned a falsy value (null or undefined).
   */
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
