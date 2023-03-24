import { useEffect, useRef, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { searchQueryParamName } from "../../../hooks/queryParameters";
import { debounce } from "../../../utils/debounce";
import { toMovie, toMovies, toPeople, toPerson } from "../../../utils/routes";

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
