import { SecondaryText } from "../SecondaryText";
import { Rate, Container, StyledStar } from "./styled";

interface RatingProps {
  vote?: number;
  votesAmount?: number;
  smallText?: boolean;
}

const Rating: React.FC<RatingProps> = ({ vote, votesAmount, smallText }) => {
  if (!vote || vote <= 0) {
    return null;
  }

  return (
    <Container>
      <StyledStar />
      <Rate>{vote.toFixed(2)}</Rate>
      {votesAmount && (
        <SecondaryText $smallText={smallText}>{`${votesAmount} votes`}</SecondaryText>
      )}
    </Container>
  );
};

export default Rating;
