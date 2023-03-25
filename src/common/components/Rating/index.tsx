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
  large?: boolean;
  medium?: boolean;
}
const Rating = ({ vote, votesAmount, smallText, large, medium }: RatingProps) => {
  if (!vote || vote <= 0) {
    return null;
  }

  return (
    <>
      {" "}
      <Container $large={large} $medium={medium}>
        <StyledStar $large={large} />
        <Rate $large={!!large} $medium={!!medium}>{vote.toFixed(2)}</Rate>
        <SecondaryText $hidden={!large} $backdrop $bottomSelfAlignment>
          / 10
        </SecondaryText>
        {votesAmount && (
          <SecondaryText
            $displayOnMobile={large}
            $smallText={smallText}
            $backdrop={large}
          >
            {votesAmount} votes
          </SecondaryText>
        )}
      </Container>
      {votesAmount && (
        <SecondaryText
          $hidden={!large}
          $displayOnDesktop={large}
          $backdrop
        >
          {votesAmount} votes
        </SecondaryText>
      )}
    </>
  );
};

export default Rating;
