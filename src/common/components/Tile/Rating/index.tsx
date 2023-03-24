import { GreyText } from "../GreyText";
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
        <GreyText $smallText={smallText}>{`${votesAmount} votes`}</GreyText>
      )}
    </Container>
  );
};

export default Rating;
