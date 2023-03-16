import { Item, List, Nav, StyledNavLink } from "./styled";

const Navigation = () => (
  <Nav>
    <List>
      <Item>
        <StyledNavLink to={"#"}>MOVIES</StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to={"#"}>PEOPLE</StyledNavLink>
      </Item>
    </List>
  </Nav>
);

export default Navigation;
