import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import svg from "./search.svg";
import { Input, InputWrapper, Loupe } from "./styled";
import useSearchLogic from "../../../hooks/useSearchLogic";

/**
 * The Search component provides a search input field that allows users to search for movies or people
 * based on the current location (pathname). The component uses the useSearchLogic custom hook to handle
 * user input, search state management, and debounced navigation.
 * 
 * The search input field's placeholder text is determined by the current pathname, and the input's value
 * is managed by the useSearchLogic hook. When the user types in the input field, the search will be
 * performed after a specified debounce delay, helping to reduce unnecessary API calls.
 */
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
