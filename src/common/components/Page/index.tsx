import { loadingDelay, useDelayLoading } from "../../hooks/useLoadingDelay";
import ErrorPage from "../states/ErrorPage";
import Loader from "../states/Loader";
import NoResults from "../states/NoResults";
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

/**
 * The Page component is a wrapper that manages the display of content based on the loading state, error
 * state, and the presence of results.
 *
 * @interface PageProps
 * @param isLoading - A boolean representing whether the content is being loaded.
 * @param isError - A boolean representing whether there is an error in loading the content.
 * @param hasResults - A boolean representing whether the loaded content has results to display.
 * @param detailsPage - (Optional) A boolean representing whether the current page is a details page.
 * @param totalPages - (Optional) The total number of pages available for pagination.
 * @param page - (Optional) The current page number.
 * @param children - The actual content (e.g., movies, people) to be displayed when the conditions are met.
 *
 * @returns {JSX.Element} The rendered component.
 */
const Page = ({
  isLoading,
  isError,
  hasResults,
  totalPages = undefined,
  page = undefined,
  children,
}: PageProps) => {
  const delayedLoading = useDelayLoading(isLoading, loadingDelay);

  // Display the Loader component while content is being loaded.
  if (delayedLoading) {
    return <Loader />;
  }

  // Display the ErrorPage component if there is an error in loading the content.
  if (isError) {
    return <ErrorPage />;
  }

  // Display the NoResults component if there are no results to display.
  if (!hasResults) {
    return <NoResults />;
  }

  /**
   * Display the actual content and the Footer component (if totalPages and page are provided) when
   * the conditions are met (i.e., content is loaded, no errors, and has results).
   *
   * @returns {JSX.Element} The rendered component.
   */
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
