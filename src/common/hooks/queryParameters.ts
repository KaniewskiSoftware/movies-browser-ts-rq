import { useLocation, useSearchParams } from "react-router-dom";

interface ReplaceQueryParameterProps {
  key: string;
  value: string | null;
}

export const useQueryParameter = (key: string) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

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

export const searchQueryParamName = "search";
export const pageQueryParamName = "page";
