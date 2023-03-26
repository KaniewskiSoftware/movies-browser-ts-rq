// Custom hook to handle pagination logic.
import { useSetPage } from "./useSetPage";

interface PaginationOptions {
  page: number;
  lastPageNumber: number;
}

/**
 * A custom React Hook that provides pagination functionalities.
 *
 * @param {PaginationOptions} options - An object containing the current page number and the last page number.
 * @returns An object containing functions to navigate between pages (goToFirstPage, goToNextPage, goToPreviousPage, goToLastPage).
 * @property setPage - A function to set the current page number.
 * @property goToFirstPage - A function to navigate to the first page.
 * @property goToNextPage - A function to navigate to the next page.
 * @property goToPreviousPage - A function to navigate to the previous page.
 * @property goToLastPage - A function to navigate to the last page.
 * @property UsePaginationType - A type alias for the return type of the usePagination hook.
 */
export const usePagination = ({ page, lastPageNumber }: PaginationOptions) => {
  const setPage = useSetPage();
  const goToFirstPage = () => {
    setPage(1);
  };
  const goToNextPage = () => {
    if (page < lastPageNumber) setPage(page + 1);
  };
  const goToPreviousPage = () => {
    if (page !== 1) setPage(page - 1);
  };
  const goToLastPage = () => {
    setPage(lastPageNumber);
  };

  return { goToFirstPage, goToNextPage, goToPreviousPage, goToLastPage };
};

export type UsePaginationType = ReturnType<typeof usePagination>;
