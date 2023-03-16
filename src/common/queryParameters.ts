import { useLocation, useSearchParams } from "react-router-dom";

type UseQueryParameterFunction = (key: string) => string | null;

type ReplaceQueryParameterProps = {
  key: string;
  value: string | null;
};

type UseReplaceQueryParameterFunction = () => (
  props: ReplaceQueryParameterProps
) => void; //returns function, the returned function gets props with the ReplaceQuery... type and returns void.

export const useQueryParameter: UseQueryParameterFunction = (key) => {
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
