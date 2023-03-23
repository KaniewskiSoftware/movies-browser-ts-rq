import { TileLink } from "../styled";

interface TileWrapperProps {
  linkTo?: string;
  children: React.ReactNode;
}

const TileWrapper = ({ linkTo, children }: TileWrapperProps) => {
  return linkTo ? <TileLink to={linkTo}>{children}</TileLink> : <>{children}</>;
};

export default TileWrapper;
