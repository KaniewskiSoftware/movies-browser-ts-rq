import { useLocation, useSearchParams } from "react-router-dom";

/**
 * Interface representing the properties for the ReplaceQueryParameterProps.
 */
interface ReplaceQueryParameterProps {
  key: string;
  value: string | null;
}

/**
 * A custom React Hook that returns the value of a query parameter based on the given key.
 *
 * @param key - The key of the query parameter.
 * @returns The value of the query parameter or null if it doesn't exist.
 */
export const useQueryParameter = (key: string) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

/**
 * A custom React Hook that provides a function to replace the value of a query parameter.
 * The function takes an object with a key and a value, and it either sets or deletes
 * the query parameter depending on the value.
 *
 * @returns A function that accepts an object with a key and a value, and updates the query parameter accordingly.
 */
export const useReplaceQueryParameter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return ({ key, value }: ReplaceQueryParameterProps) => {
    if (!value) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    setSearchParams(searchParams);
  };
};

// The name of the search query parameter
export const searchQueryParamName = "search";

// The name of the page query parameter
export const pageQueryParamName = "page";
