import { useEffect, useMemo, useRef, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import {
  searchQueryParamName,
} from "../../hooks/queryParameters";
import { debounce } from "../../debounce";
import { toMovie, toMovies, toPeople, toPerson } from "../../routes";
import svg from "./Search.svg";
import { Input, InputWrapper, Loupe } from "./styled";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!location.search) setInputValue("");
  }, [location.search]);

  const debouncedNavigate = useRef(
    debounce((value: string, currentPath: string) => {
      if (currentPath.split("/")[1] === toMovie.split("/")[1]) {
        navigate({
          pathname: toMovies,
          search: createSearchParams({
            [searchQueryParamName]: value,
          }).toString(),
        });
      } else if (currentPath.split("/")[1] === toPerson.split("/")[1]) {
        navigate({
          pathname: toPeople,
          search: createSearchParams({
            [searchQueryParamName]: value,
          }).toString(),
        });
      }
    }, 500)
  );

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    debouncedNavigate.current(value, location.pathname);
  };

  const placeholderText = useMemo(() => {
    return location.pathname.includes("people")
      ? "Search for people..."
      : "Search for movies...";
  }, [location.pathname]);

  return (
    <InputWrapper>
      <Loupe src={svg} alt="Loupe" />
      <Input
        aria-label="Search for movies or people"
        placeholder={placeholderText}
        value={inputValue}
        onChange={onInputChange}
      />
    </InputWrapper>
  );
};

export default Search;
