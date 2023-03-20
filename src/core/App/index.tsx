import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { GlobalStyle } from "./GlobalStyle";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../../common/Header";
import { toMovies, toPeople } from "../../common/routes";
import PopularMoviesPage from "../../features/movies/PopularMovies";
import PopularPeoplePage from "../../features/people/PopularPeople";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Routes>
          <Route path={toMovies} element={<PopularMoviesPage />} />
          <Route path={toPeople} element={<PopularPeoplePage />} />
          <Route path={"*"} element={<Navigate replace to={toMovies} />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
