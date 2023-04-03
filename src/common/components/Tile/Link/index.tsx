import { TileLink } from "./styled";

interface LinkProps {
  linkTo?: string;
  children: React.ReactNode;
}

const Link = ({ linkTo, children }: LinkProps) => {
  return linkTo ? <TileLink to={linkTo}>{children}</TileLink> : <>{children}</>;
};

export default Link;
