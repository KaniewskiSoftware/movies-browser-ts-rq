import { LogoImg, LogoLink, LogoText, StyledHeader, Wrapper } from "./styled";
import logo from "./video.svg";
import Navigation from "./Navigation";
import Search from "./Search";

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
