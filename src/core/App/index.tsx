import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { GlobalStyle } from "./GlobalStyle";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "../../common/Header";
import { toMovies } from "../../common/routes";
import PopularMoviesPage from "../../features/movies/PopularMovies";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Routes>
        <Route path={toMovies} element={<PopularMoviesPage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
    
  );
}

export default App;
