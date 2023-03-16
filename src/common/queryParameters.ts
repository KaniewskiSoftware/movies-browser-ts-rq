import { useLocation, useSearchParams } from "react-router-dom";

interface ReplaceQueryParameterProps {
  key: string;
  value: string | null;
}

interface UseReplaceQueryParameterFunction {
  (): (props: ReplaceQueryParameterProps) => void; //returns function, the returned function gets props with type ReplaceQuery... and returns void.
}

export const useQueryParameter = (key: string): string | null => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

export const useReplaceQueryParameter: UseReplaceQueryParameterFunction =
  () => {
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

export const searchQueryParamName = "search";
