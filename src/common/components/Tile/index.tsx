import { getTagsFromGenres } from "../../utils/getTagsFromGenres";
import Tags from "./Tags";
import Rating from "../Rating";
import RoleAndRelease from "./RoleAndRelease";
import { Content, Image, TileContainer, Title } from "./styled";
import Wrapper from "./Wrapper";
import { Genre } from "../../apiResponseTypes/genres/genres";
import {
  GenresObject,
} from "../../utils/convertGenresArrayToObject";

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
  genresDetailed?: Genre[];
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
  genresDetailed,
  vote,
  votesAmount,
}: TileProps) => {
  /**
   * The 'getTagsFromGenres' function is used to generate an array of genre name strings or an empty array.
   * If 'genresDetailed' is provided, the function maps the 'name' property of each genre
   * in the array and returns a flattened array of genre names.
   * If the 'name' property is undefined, it is excluded from the resulting array.
   *
   * If 'genresDetailed' is not provided, the function checks if both 'genreIds' and 'genres' are truthy values.
   * If they are, the function maps the provided genre IDs to their corresponding genre names using the provided GenresObject.
   * The resulting array of genre names is then returned.
   *
   * If all conditions fail, null is returned so it matches the display logic of the Tags component.
   */
  const tags = getTagsFromGenres(genreIds, genres, genresDetailed);

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
