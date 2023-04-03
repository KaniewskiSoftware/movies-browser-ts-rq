import Rating from "../../../../../common/components/Rating";
import { BackdropContent, Background, Container, Title } from "./styled";

interface BackdropProps {
  backdrop?: string | null;
  title?: string;
  vote?: number;
  voteAmount?: number;
}

const Backdrop = ({ backdrop, title, vote, voteAmount }: BackdropProps) => {
  if (!!backdrop)
    return (
      <Container>
        <Background $backdrop={backdrop}>
          <BackdropContent>
            {title && <Title>{title}</Title>}
            {<Rating vote={vote} votesAmount={voteAmount} large />}
          </BackdropContent>
        </Background>
      </Container>
    );

  return null;
};

export default Backdrop;
