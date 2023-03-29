import { LogoImg, LogoLink, LogoText, StyledHeader, Wrapper } from "./styled";
import logo from "./video.svg";
import Navigation from "./Navigation";
import Search from "./Search";

/**
 * The Header component is the top part of the application, displaying the logo, navigation links, and
 * search input. The component includes a logo with a link to the movies page, a Navigation component
 * for navigating between the movies and people pages, and a Search component for searching movies or
 * people based on the current location (pathname).
 */
const Header = () => (
  <StyledHeader>
    <Wrapper>
      <LogoLink to={"/movies"}>
        <LogoImg src={logo} alt="White vector camera Icon"/>
        <LogoText>movies browser</LogoText>
      </LogoLink>
      <Navigation />
    </Wrapper>
    <Search />
  </StyledHeader>
);

export default Header;
