import { SecondaryText } from "../SecondaryText";
import { Rate, Container, StyledStar } from "./styled";

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
