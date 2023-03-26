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
 * @returns An object containing the input value, a function to set the input value, and a function to handle input changes.
 * @property inputValue - The current value of the search input field.
 * @property setInputValue - A function to set the value of the search input field.
 * @property onInputChange - A function to handle changes to the search input field.
 * @param location - The current location object from the react-router-dom library.
 * @param navigate - The navigate function from the react-router-dom library.
 * @param debounce - A utility function to debounce the navigate function.
 * @param searchQueryParamName - The name of the search query parameter in the URL.
 * @param toMovie - The path to the movie page.
 * @param toMovies - The path to the movies list page.
 * @param toPeople - The path to the people list page.
 * @param toPerson - The path to the person page.
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
