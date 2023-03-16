import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { GlobalStyle } from "./GlobalStyle";
import { HashRouter, Routes } from "react-router-dom";
import Header from "../../common/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Routes>
        </Routes>
      </HashRouter>
    </ThemeProvider>
    
  );
}

export default App;
