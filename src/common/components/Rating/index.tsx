import { Rate, Container, StyledStar, TextBox, Count } from "./styled";

interface RatingProps {
  vote?: number;
  votesAmount?: number;
  large?: boolean;
  medium?: boolean;
}

/**
 * The Rating component displays a rating value, represented by a star icon
 * followed by the rating number and an optional votes amount.
 *
 * @param vote - The rating value.
 * @param votesAmount - (Optional) The number of votes used to calculate the rating value.
 * @param large - (Optional) A boolean to apply large version styles.
 * @param medium - (Optional) A boolean to apply medium version styles.
 * @returns {JSX.Element | null} The Rating component JSX code or null if no rating value is provided or it is less or equal to 0.
 */
const Rating = ({
  vote,
  votesAmount,
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
          <Count
            $hidden={!(large || medium)}
            $large={large}
            $medium={medium}
            $bottomSelfAlignment={large}
            $displayOnDesktop={medium}
          >
            / 10
          </Count>
          {votesAmount && (
            <Count
              $displayOnMobile={large}
              $large={large}
              $medium={medium}
            >
              {votesAmount} votes
            </Count>
          )}
        </TextBox>
      </Container>
      {votesAmount && (
        <Count $hidden={!large} $displayOnDesktop={large} $large>
          {votesAmount} votes
        </Count>
      )}
    </>
  );
};

export default Rating;
