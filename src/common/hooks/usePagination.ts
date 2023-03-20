import { useReplaceQueryParameter } from "./queryParameters";

interface UsePaginationProps {
  page: number;
  lastPageNumber: number;
}

export const usePagination = ({ page, lastPageNumber }: UsePaginationProps) => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const setPage = (page: number) => {
    replaceQueryParameter({
      key: "page",
      value: `${page}`,
    });
  };

  const firstPage = () => {
    setPage(1);
  };
  const nextPage = () => {
    if (page < lastPageNumber) setPage(page + 1);
  };
  const prevPage = () => {
    if (page !== 1) setPage(page - 1);
  };
  const lastPage = () => {
    setPage(lastPageNumber);
  };

  return { firstPage, nextPage, prevPage, lastPage };
};

export type UsePaginationType = ReturnType<typeof usePagination>