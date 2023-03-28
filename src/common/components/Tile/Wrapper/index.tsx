import { TileLink } from "./styled";

interface WrapperProps {
  linkTo?: string;
  children: React.ReactNode;
}

/**
 * The Wrapper component is used to conditionally wrap its children with a TileLink.
 * If the 'linkTo' prop is provided, the children will be wrapped with a TileLink.
 * Otherwise, the children will be rendered as-is.
 *
 * @param linkTo - (Optional) A string representing the URL to navigate to when the TileLink is clicked.
 * @param children - The React child elements to be rendered within the Wrapper component.
 */
const Wrapper = ({ linkTo, children }: WrapperProps) => {
  return linkTo ? <TileLink to={linkTo}>{children}</TileLink> : <>{children}</>;
};

export default Wrapper;
