import { Text } from "../../Text";
import { getYearFromReleaseDate } from "../../../utils/getYearFromDate";

interface RoleAndReleaseProps {
  bigFont?: boolean;
  role?: string;
  releaseDate?: string;
  smallText?: boolean;
}

const RoleAndRelease = ({
  bigFont,
  role,
  releaseDate,
  smallText,
}: RoleAndReleaseProps) => {
  if (releaseDate && role) {
    return (
      <Text $small={smallText} $big={bigFont}>
        {role} ({getYearFromReleaseDate(releaseDate)})
      </Text>
    );
  }

  if (releaseDate) {
    return (
      <Text $small={smallText} $big={bigFont}>
        {getYearFromReleaseDate(releaseDate)}
      </Text>
    );
  }

  if (role) {
    return (
      <Text $small={smallText} $big={bigFont}>
        {role}
      </Text>
    );
  }

  return null;
};

export default RoleAndRelease;
