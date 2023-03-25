import Rating from "../../../../../common/components/Rating";
import { BackdropContent, Background, Container, Title } from "./styled";

interface BackdropProps {
  backdrop?: string | null;
  title?: string;
  vote?: number;
  voteAmount?: number;
}

/**
 * A Backdrop component that displays an image background with an optional title
 * and rating. The component will not render if the backdrop prop is not provided.
 *
 * @param backdrop - The URL of the backdrop image.
 * @param title - The optional title to be displayed over the backdrop.
 * @param vote - The average vote (rating) for the movie.
 * @param voteAmount - The number of votes received for the movie.
 * @returns A Backdrop component with the specified background, title, and rating, or null if no backdrop is provided.
 */
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
