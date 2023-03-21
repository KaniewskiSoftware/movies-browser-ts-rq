import { useReplaceQueryParameter } from "../hooks/queryParameters";

export const useSetPage = () => {
  const replaceQueryParameter = useReplaceQueryParameter();

  const setPage = (page: number) => {
    replaceQueryParameter({
      key: "page",
      value: `${page}`,
    });
  };

  return setPage;
};
