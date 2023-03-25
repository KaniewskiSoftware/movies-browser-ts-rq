import { useEffect, useRef, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { searchQueryParamName } from "./queryParameters";
import { debounce } from "../utils/debounce";
import { toMovie, toMovies, toPeople, toPerson } from "../utils/routes";

/**
 * The useSearchLogic custom hook provides logic for handling user input, navigation, and state management
 * for the search field. It manages the input value state, updates the input value based on the current
 * location's search query parameters, and uses a debounced navigate function to perform the search with
 * a delay to reduce the number of unnecessary API calls.
 * 
 * When the user types in the input field, the debounced navigate function will be called after the specified
 * delay (1000ms). This ensures that the search is performed only once during the delay period, even if the
 * user continues to type.
 *
 * The hook returns an object containing the input value, a function to set the input value, and a function
 * to handle input changes.
 */
const useSearchLogic = () => {
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
      }, 1000)
    );
  
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setInputValue(value);
      debouncedNavigate.current(value, location.pathname);
    };
  
    return { inputValue, setInputValue, onInputChange };
  };
  
  export default useSearchLogic;
