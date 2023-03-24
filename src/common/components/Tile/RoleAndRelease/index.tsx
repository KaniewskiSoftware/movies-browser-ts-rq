import { SecondaryText } from "../../SecondaryText";
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
      <SecondaryText $smallText={smallText}>
        {role} ({getYearFromReleaseDate(releaseDate)})
      </SecondaryText>
    );
  }

  if (releaseDate) {
    return (
      <SecondaryText $smallText={smallText}>
        {getYearFromReleaseDate(releaseDate)}
      </SecondaryText>
    );
  }

  if (role) {
    return <SecondaryText $smallText={smallText}>{role}</SecondaryText>;
  }

  return null;
};

export default RoleAndRelease;
