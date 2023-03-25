import { toMovies, toPeople } from "../../../utils/routes";
import { Item, List, Nav, StyledNavLink } from "./styled";

/**
 * Navigation component for the main menu in the application.
 */
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
