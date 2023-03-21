import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { GlobalStyle } from "./GlobalStyle";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../../common/components/Header";
import { toMovies, toPeople } from "../../common/utils/routes";
import MoviesPage from "../../features/movies/Movies";
import PeoplePage from "../../features/people/People";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Routes>
          <Route path={toMovies} element={<MoviesPage />} />
          <Route path={toPeople} element={<PeoplePage />} />
          <Route path={"*"} element={<Navigate replace to={toMovies} />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
