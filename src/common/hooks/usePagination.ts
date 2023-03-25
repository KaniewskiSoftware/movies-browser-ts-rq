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
