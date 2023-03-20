import { useReplaceQueryParameter } from "./queryParameters";

type UsePaginationType = (
  page: number,
  lastPageNumber: number
) => {
  firstPage: () => void;
  nextPage: () => void;
  prevPage: () => void;
  lastPage: () => void;
};

export const usePagination: UsePaginationType = (page, lastPageNumber) => {
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
