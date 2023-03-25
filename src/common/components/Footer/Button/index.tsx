import { StyledArrow, StyledButton, Title } from "./styled";

interface ButtonProps {
  title: string;
  rotated?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  mobile?: boolean;
}

/**
 * Button component for pagination and navigation.
 *
 * @param title - The title displayed on the button.
 * @param rotated - A boolean indicating if the arrow icon should be rotated.
 * @param onClick - A function to be called when the button is clicked.
 * @param disabled - A boolean indicating if the button should be disabled.
 * @param mobile - A boolean indicating if the button should be styled for mobile devices.
 */
const Button = ({ title, rotated, onClick, disabled, mobile }: ButtonProps) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    <StyledArrow $rotated={rotated} />
    <StyledArrow $rotated={rotated} $mobile={mobile} $hidden={true} />
    <Title>{title}</Title>
  </StyledButton>
);

export default Button;
