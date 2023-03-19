import { StyledArrow, StyledButton, Title } from "./styled";

interface ButtonProps {
  title: string;
  rotated?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  mobile?: boolean;
}

const Button = ({ title, rotated, onClick, disabled, mobile }: ButtonProps) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    <StyledArrow $rotated={rotated} />
    <StyledArrow $rotated={rotated} $mobile={mobile} $hidden={true} />
    <Title>{title}</Title>
  </StyledButton>
);

export default Button;
