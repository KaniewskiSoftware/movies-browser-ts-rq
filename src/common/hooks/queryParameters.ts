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
 * @property useLocation - A React Hook that returns the current location object.
 * @property URLSearchParams - A built-in Web API that provides an easy way to get query parameters from a URL.
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
 * @property useSearchParams - A React Hook that returns the current search params object and a function to set it.
 * @interface ReplaceQueryParameterProps - An interface that defines the key and value of the query parameter to replace.
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

/**
 * The name of the query parameter that holds the search term in search-related routes.
 *
 * @type {"search"}
 */
export const searchQueryParamName = "search";

/**
 * The name of the query parameter that holds the current page number in paginated routes.
 *
 * @type {"page"}
 */
export const pageQueryParamName = "page";
