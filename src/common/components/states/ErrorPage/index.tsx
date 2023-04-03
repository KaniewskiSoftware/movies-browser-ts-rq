import { Wrapper } from "../../Wrapper";
import { Button, Sign, Text } from "./styled";

interface ErrorPageProps {
  errorMessage?: string;
}

const ErrorPage = ({ errorMessage }: ErrorPageProps) => (
  <Wrapper $containerType="error">
    <Sign />
    <Text $big>Ooops! Something went wrong...</Text>
    <Text>
      {errorMessage ||
        "Please check your network connection and try again"}
    </Text>
    <Button to={"/movies"}>
      <Text $callToAction>Back to home page</Text>
    </Button>
  </Wrapper>
);

export default ErrorPage;
