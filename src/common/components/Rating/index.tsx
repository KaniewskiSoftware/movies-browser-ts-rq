import { SecondaryText } from "../SecondaryText";
import { Rate, Container, StyledStar } from "./styled";

interface RatingProps {
  vote?: number;
  votesAmount?: number;
  smallText?: boolean;
  backdrop?: boolean;
}

/**
 * The Rating component displays a rating value, represented by a star icon
 * followed by the rating number and an optional votes amount.
 *
 * @param vote - The rating value.
 * @param votesAmount - (Optional) The number of votes used to calculate the rating value.
 * @param smallText - (Optional) A boolean to set the font size of the votes amount to small.
 * @param backdrop - (Optional) A boolean to apply backdrop-related styles.
 */
interface RatingProps {
  vote?: number;
  votesAmount?: number;
  smallText?: boolean;
  backdrop?: boolean;
}
const Rating = ({ vote, votesAmount, smallText, backdrop }: RatingProps) => {
  if (!vote || vote <= 0) {
    return null;
  }

  return (
    <>
      {" "}
      <Container $large={backdrop}>
        <StyledStar $large={backdrop} />
        <Rate $large={!!backdrop}>{vote.toFixed(2)}</Rate>
        <SecondaryText $hidden={!backdrop} $backdrop $bottomSelfAlignment>
          / 10
        </SecondaryText>
        {votesAmount && (
          <SecondaryText
            $displayOnMobile={backdrop}
            $smallText={smallText}
            $backdrop={backdrop}
          >
            {votesAmount} votes
          </SecondaryText>
        )}
      </Container>
      {votesAmount && (
        <SecondaryText
          $hidden={!backdrop}
          $displayOnDesktop={backdrop}
          $backdrop
        >
          {votesAmount} votes
        </SecondaryText>
      )}
    </>
  );
};

export default Rating;
