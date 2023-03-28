import { Text } from "../Text";
import { Rate, Container, StyledStar, TextBox } from "./styled";

interface RatingProps {
  vote?: number;
  votesAmount?: number;
  smallText?: boolean;
  large?: boolean;
  medium?: boolean;
}

/**
 * The Rating component displays a rating value, represented by a star icon
 * followed by the rating number and an optional votes amount.
 *
 * @param vote - The rating value.
 * @param votesAmount - (Optional) The number of votes used to calculate the rating value.
 * @param smallText - (Optional) A boolean to set the font size of the votes amount to small.
 * @param large - (Optional) A boolean to apply large version styles.
 * @param medium - (Optional) A boolean to apply medium version styles.
 * @returns {JSX.Element | null} The Rating component JSX code or null if no rating value is provided or it is less or equal to 0.
 */
const Rating = ({
  vote,
  votesAmount,
  smallText,
  large,
  medium,
}: RatingProps) => {
  if (!vote || vote <= 0) {
    return null;
  }

  return (
    <>
      {" "}
      <Container $large={large} $medium={medium}>
        <StyledStar $large={large} />
        <TextBox>
          <Rate $large={!!large} $medium={!!medium}>
            {!!large || !!medium ? vote.toFixed(1) : vote.toFixed(2)}
          </Rate>
          <Text
            $hidden={!(large || medium)}
            $backdrop={large}
            $detailsTile={medium}
            $bottomSelfAlignment={large}
            $displayOnDesktop={medium}
          >
            / 10
          </Text>
          {votesAmount && (
            <Text
              $displayOnMobile={large}
              $smallText={smallText || medium}
              $backdrop={large}
              $detailsTile={medium}
            >
              {votesAmount} votes
            </Text>
          )}
        </TextBox>
      </Container>
      {votesAmount && (
        <Text $hidden={!large} $displayOnDesktop={large} $backdrop>
          {votesAmount} votes
        </Text>
      )}
    </>
  );
};

export default Rating;
