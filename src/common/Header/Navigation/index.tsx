import { toMovies, toPeople } from "../../routes";
import { Item, List, Nav, StyledNavLink } from "./styled";

const Navigation = () => (
  <Nav>
    <List>
      <Item>
        <StyledNavLink to={toMovies}>MOVIES</StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to={toPeople}>PEOPLE</StyledNavLink>
      </Item>
    </List>
  </Nav>
);

export default Navigation;
