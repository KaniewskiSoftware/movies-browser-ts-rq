import { TileLink } from "../styled";

interface WrapperProps {
  linkTo?: string;
  children: React.ReactNode;
}

const Wrapper = ({ linkTo, children }: WrapperProps) => {
  return linkTo ? <TileLink to={linkTo}>{children}</TileLink> : <>{children}</>;
};

export default Wrapper;
