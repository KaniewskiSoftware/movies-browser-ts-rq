/**
 * App.tsx
 *
 * This file contains the main App component that serves as the root of the application.
 * It includes the ThemeProvider, Normalize, GlobalStyle, HashRouter, and the main application
 * routes.
 */
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { GlobalStyle } from "./GlobalStyle";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../../common/components/Header";
import { toMovie, toMovies, toPeople, toPerson } from "../../common/utils/routes";
import MoviesPage from "../../features/movies/Movies";
import PeoplePage from "../../features/people/People";
import MovieDetailsPage from "../../features/movies/Movie";
import PersonDetailsPage from "../../features/people/Person";

/**
 * App component renders the main application layout, including the theme provider,
 * global styles, and main application routes.
 *
 * It includes:
 * 1. ThemeProvider with the custom theme.
 * 2. Normalize component for CSS normalizing.
 * 3. GlobalStyle component for global styles.
 * 4. HashRouter for client-side routing.
 * 5. Header component for the site header.
 * 6. Routes with the main application routes, including MoviesPage, PeoplePage, and MovieDetailsPage.
 */
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
          <Route path={toMovie} element={<MovieDetailsPage />} />
          <Route path={toPerson} element={<PersonDetailsPage />} />
          <Route path={"*"} element={<Navigate replace to={toMovies} />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
