import { useReplaceQueryParameter } from "../hooks/queryParameters";

/**
 * A custom React Hook that provides a function to set the page query parameter.
 * It utilizes the `useReplaceQueryParameter` custom hook to manage the query parameter.
 *
 * @returns A function that accepts a page number and updates the "page" query parameter accordingly.
 */
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
