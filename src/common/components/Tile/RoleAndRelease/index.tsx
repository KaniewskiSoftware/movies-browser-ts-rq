import { GreyText } from "../GreyText";
import { getYearFromReleaseDate } from "../../../utils/getYearFromDate";

interface RoleAndReleaseProps {
  role?: string;
  releaseDate?: string;
  smallText?: boolean;
}

const RoleAndRelease = ({
  role,
  releaseDate,
  smallText,
}: RoleAndReleaseProps) => {
  if (releaseDate && role) {
    return (
      <GreyText $smallText={smallText}>
        {role} ({getYearFromReleaseDate(releaseDate)})
      </GreyText>
    );
  }

  if (releaseDate) {
    return (
      <GreyText $smallText={smallText}>
        {getYearFromReleaseDate(releaseDate)}
      </GreyText>
    );
  }

  if (role) {
    return <GreyText $smallText={smallText}>{role}</GreyText>;
  }

  return null;
};

export default RoleAndRelease;
