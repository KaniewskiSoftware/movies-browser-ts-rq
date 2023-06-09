// Custom hook to handle pagination logic.
import { useSetPage } from "./useSetPage";

interface PaginationOptions {
  page: number;
  lastPageNumber: number;
}

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
