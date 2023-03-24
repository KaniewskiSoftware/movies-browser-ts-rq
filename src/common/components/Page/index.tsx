import ErrorPage from "../../states/ErrorPage";
import Loader from "../../states/Loader";
import NoResults from "../../states/NoResults";
import Footer from "../Footer";

interface PageProps {
  isLoading: boolean;
  isError: boolean;
  hasResults: boolean;
  detailsPage?: boolean;
  totalPages?: number;
  page?: number;
  children: React.ReactNode;
}

const Page = ({
  isLoading,
  isError,
  hasResults,
  totalPages = undefined,
  page = undefined,
  children,
}: PageProps) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
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
