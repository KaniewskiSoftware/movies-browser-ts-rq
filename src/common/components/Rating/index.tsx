import { Rate, Container, StyledStar, TextBox, Count } from "./styled";

interface RatingProps {
  vote?: number;
  votesAmount?: number;
  large?: boolean;
  medium?: boolean;
}

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
