import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import svg from "./search.svg";
import { Input, InputWrapper, Loupe } from "./styled";
import useSearchLogic from "../../../hooks/useSearchLogic";

const Search = () => {
  const location = useLocation();

  const { inputValue, onInputChange } = useSearchLogic();

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
