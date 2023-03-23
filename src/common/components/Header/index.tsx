import { LogoImg, LogoLink, LogoText, StyledHeader, Wrapper } from "./styled";
import png from "./video.svg";
import Navigation from "./Navigation";
import Search from "./Search";

const Header = () => (
  <StyledHeader>
    <Wrapper>
      <LogoLink to={"/movies"}>
        <LogoImg src={png} />
        <LogoText>movies browser</LogoText>
      </LogoLink>
      <Navigation />
    </Wrapper>
    <Search />
  </StyledHeader>
);

export default Header;
