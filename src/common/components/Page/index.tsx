import { loadingDelay, useDelayLoading } from "../../hooks/useLoadingDelay";
import ErrorPage from "../states/ErrorPage";
import Loader from "../states/Loader";
import NoResults from "../states/NoResults";
import Footer from "../Footer";

interface PageProps {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  hasResults: boolean;
  detailsPage?: boolean;
  totalPages?: number;
  page?: number;
  children: React.ReactNode;
}

const Page = ({
  isLoading,
  isError,
  errorMessage,
  hasResults,
  totalPages = undefined,
  page = undefined,
  children,
}: PageProps) => {
  const delayedLoading = useDelayLoading(isLoading, loadingDelay);

  if (delayedLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage errorMessage={errorMessage} />;
  }

  if (!hasResults) {
    return <NoResults />;
  }

  return (
    <>
      {children}
      {totalPages !== undefined && page !== undefined && (
        <Footer totalPages={totalPages} page={page} />
      )}
    </>
  );
};

export default Page;
