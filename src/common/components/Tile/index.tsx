import { getTagsFromGenres } from "../../utils/getTagsFromGenres";
import { Genre } from "../../apiResponseTypes/genres/genres";
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

/**
 * The Tile component is used for displaying various pieces of information
 * in a structured format, such as title, release date, role, genre tags, and rating.
 *
 * @param {boolean} [big] - Optional. A boolean indicating whether the tile should display as a horizontal, larger version.
 * @param {string} [linkTo] - Optional. A string representing the URL to navigate to when the tile is clicked.
 * @param {boolean} [horizontalOnMobile] - Optional. A boolean indicating whether the tile should display horizontally on mobile devices.
 * @param {string} [imageURL] - Optional. A string representing the URL of the image to be displayed in the tile.
 * @param {string} [imagePlaceholder] - Optional. A string representing the URL of the image placeholder.
 * @param {boolean} [contentTextCentered] - Optional. A boolean indicating whether the content text should be centered.
 * @param {string} [title] - Optional. A string representing the title of the tile.
 * @param {boolean} [smallTitleOnTiny] - Optional. A boolean indicating whether the title should be rendered with a smaller font size.
 * @param {string} [releaseDate] - Optional. A string representing the release date of the movie or TV show.
 * @param {boolean} [smallRoleAndRelease] - Optional. A boolean indicating whether the text should be rendered with a smaller font size.
 * @param {string} [role] - Optional. A string representing the role of the actor in the movie or TV show.
 * @param {PropertyObject[]} [metaData] - Optional. An array of objects representing additional metadata to display.
 * @param {number[]} [genreIds] - Optional. An array of numbers representing the genre IDs of the movie or TV show.
 * @param {GenresObject} [genres] - Optional. An object containing information about the genres.
 * @param {Genre[]} [genresDetailed] - Optional. An array of objects containing detailed information about the genres.
 * @param {boolean} [tagsLargeGap] - Optional. A boolean indicating whether the gap between the tags should be large.
 * @param {number} [vote] - Optional. A number representing the rating of the movie or TV show.
 * @param {number} [votesAmount] - Optional. A number representing the total number of votes for the movie or TV show.
 * @param {boolean} [mediumRating] - Optional. A boolean indicating whether to render a medium-sized rating component.
 * @param {string | null} [description] - Optional. A string representing the description of the movie or TV show.
 *
 * @returns {JSX.Element} A component that displays various pieces of information in a structured format.
 *
 * @example
 *
 * // Example usage:
 *
 * import Tile from "./Tile";
 *
 * const movieData = {
 *   title: "The Shawshank Redemption",
 *   releaseDate: "1994-09-14",
 *   genreIds: [18, 80],
 *   vote: 9.3,
 *   votesAmount: 2473664,
 *   description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
 * };
 */
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
