import { Wrapper } from "../../Wrapper";
import { Button, Sign, Text } from "./styled";

interface ErrorPageProps {
  errorMessage?: string;
}

/**
 * The ErrorPage component is a simple, reusable error page that is displayed when an error occurs.
 * It includes an error icon, a title, a description, and a button to navigate back to the home page.
 */
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
