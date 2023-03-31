import { TileLink } from "./styled";

interface LinkProps {
  linkTo?: string;
  children: React.ReactNode;
}

/**
 * The Link component is used to conditionally wrap its children with a TileLink.
 * If the 'linkTo' prop is provided, the children will be wrapped with a TileLink.
 * Otherwise, the children will be rendered as-is.
 *
 * @param linkTo - (Optional) A string representing the URL to navigate to when the TileLink is clicked.
 * @param children - The React child elements to be rendered within the Link component.
 */
const Link = ({ linkTo, children }: LinkProps) => {
  return linkTo ? <TileLink to={linkTo}>{children}</TileLink> : <>{children}</>;
};

export default Link;
